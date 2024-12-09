const mongoose = require('mongoose');
const shortid = require('shortid');

const UrlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

UrlSchema.pre('save', function (next) {
  if (!this.shortUrl) {
    this.shortUrl = shortid.generate();
  }
  next();
});

module.exports = mongoose.model('Url', UrlSchema);
