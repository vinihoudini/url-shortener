const Url = require('../models/Url');
const analyticsService = require('../services/analyticsService');

exports.createUrl = async (req, res) => {
  const { longUrl } = req.body;

  try {
    const newUrl = new Url({ longUrl });
    await newUrl.save();

    res.status(201).json({
      shortUrl: `${req.protocol}://${req.get('host')}/${newUrl.shortUrl}`
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar URL curta.' });
  }
};

exports.redirectUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });
    if (!url) return res.status(404).json({ error: 'URL não encontrada.' });

    url.clicks++;
    await url.save();

    // Captura e salva os dados analíticos
    const clientIp = req.ip;
    await analyticsService.recordClick(clientIp);

    res.redirect(url.longUrl);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao redirecionar URL.' });
  }
};

exports.getAnalytics = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });
    if (!url) return res.status(404).json({ error: 'URL não encontrada.' });

    const analytics = await analyticsService.getAnalytics(url.shortUrl);

    res.json({
      totalClicks: url.clicks,
      analytics
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter dados analíticos.' });
  }
};
