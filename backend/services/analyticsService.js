const Redis = require('ioredis');
const redis = new Redis();

exports.recordClick = async (clientIp) => {
  // Simula a captura de localização (substituir com API de geolocalização real)
  const location = 'Brazil';
  const device = 'mobile';

  await redis.hincrby('analytics:location', location, 1);
  await redis.hincrby('analytics:device', device, 1);
};

exports.getAnalytics = async () => {
  const locationData = await redis.hgetall('analytics:location');
  const deviceData = await redis.hgetall('analytics:device');

  return {
    location: locationData,
    device: deviceData
  };
};
