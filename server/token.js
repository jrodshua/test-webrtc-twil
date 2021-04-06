const twilio = require("twilio");
const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant } = AccessToken;

const generateToken = (config) => {
  return new AccessToken(
    config.twilio.accountSid,
    config.twilio.apiKey,
    config.twilio.apiSecret
  );
};

const videoToken = (identity, room, config) => {
  const token = generateToken(config);
  token.identity = identity;

  const grant = new VideoGrant({ room: room });
  token.addGrant(grant);

  return token;
};

module.exports = { videoToken };
