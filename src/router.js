const express = require("express");
const router = express.Router();

const encrypt = require("./routes/encrypt");
const decrypt = require("./routes/decrypt");
const sign = require("./routes/sign");
const verify = require("./routes/verify");

router.use("/encrypt", encrypt);
router.use("/decrypt", decrypt);
router.use("/sign", sign);
router.use("/verify", verify);

module.exports = router;
