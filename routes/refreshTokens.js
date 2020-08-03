const express = require("express");
const router = express.Router();
const refreshTokensController = require("./controllers/refresh-tokens");

router.post("/", refreshTokensController.create);
router.get("/", refreshTokensController.getToken);

module.exports = router;
