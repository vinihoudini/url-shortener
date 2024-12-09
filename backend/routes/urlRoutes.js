const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.post('/api/url', urlController.createUrl);
router.get('/:shortUrl', urlController.redirectUrl);
router.get('/api/url/:shortUrl/stats', urlController.getAnalytics);

module.exports = router;
