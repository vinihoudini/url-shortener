const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const urlRoutes = require('./routes/urlRoutes');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(urlRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB conectado...');
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

module.exports = app;
