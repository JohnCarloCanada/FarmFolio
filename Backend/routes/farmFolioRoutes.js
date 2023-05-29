const express = require("express");
const {
  getCrops,
  postCrop,
  editCrop,
} = require("../controller/farmFolioController");
const router = express.Router();

router.route("/").get(getCrops);
router.route("/").post(postCrop);
router.route("/:id").put(editCrop);

module.exports = router;
