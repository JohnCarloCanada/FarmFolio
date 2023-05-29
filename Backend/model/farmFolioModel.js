const mongoose = require("mongoose");

const farmFolioSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Please add an image"],
    },
    hoverImage: {
      type: String,
      required: [true, "Please add an image"],
    },
    cropName: {
      type: String,
      required: [true, "Please add a crop name"],
    },
    cropOtherName: {
      type: String,
      required: [true, "Please add a crop other name"],
    },
    scientificName: {
      type: String,
      required: [true, "Please add a scientific name"],
    },
    firstDescription: {
      type: String,
      required: [true, "Please add first description"],
    },
    secondDescription: {
      type: String,
      required: [true, "Please add second description"],
    },
    commonPest: {
      type: Array,
      required: [true, "Please add common pest"],
    },
    reccomClimate: {
      type: String,
      required: [true, "Please add reccom climate"],
    },
    growthStages: {
      type: Array,
      required: [true, "Please add growth stages"],
    },
    commonVarr: {
      type: Array,
      required: [true, "Please add common varr"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("crops", farmFolioSchema);
