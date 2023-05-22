const express = require("express");
const { getCrops, postCrop } = require("../controller/farmFolioController");
const router = express.Router();

router.route("/").get(getCrops);
router.route("/").post(postCrop);

module.exports = router;
