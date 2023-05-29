const asyncHandler = require("express-async-handler");
const FarmFolio = require("../model/farmFolioModel");

//@desc Get all crops
//@route GET /api/crops
//@access public
const getCrops = asyncHandler(async (req, res) => {
  const farmFolio = await FarmFolio.find({});
  res.status(200).json(farmFolio);
});

//@desc Post crops
//@route Post /api/crops
//@access public
const postCrop = asyncHandler(async (req, res) => {
  const farmFolio = await FarmFolio.create(req.body);
  res.status(200).json(farmFolio);
});

//@desc Put crops
//@route Post /api/crops
//@access public
const editCrop = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const crops = await FarmFolio.findByIdAndUpdate(id, req.body);
  if (!crops) res.status(404).json({ message: "Crops not found" });
  const updatedCrops = await FarmFolio.findById(crops.id);
  res.status(200).json(updatedCrops);
});

module.exports = { getCrops, postCrop, editCrop };
