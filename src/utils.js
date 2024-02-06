const crypto = require("crypto");

//It can be defined as an environment variable in .env file
const secret = "54e03a19d72771bfc852";

function encode(text) {
  return Buffer.from(text).toString("base64");
}

function decode(base64Encoded) {
  return Buffer.from(base64Encoded, "base64").toString("utf-8");
}

function sign(payload) {
  const hmac = crypto.createHmac("sha256", secret);
  return hmac.update(JSON.stringify(payload)).digest("hex");
}

module.exports = {
  encode,
  decode,
  sign,
};
