const mongoose = require("mongoose");

const farmFolioSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Please add a contact name"],
    },
    hoverImage: {
      type: String,
      required: [true, "Please add a contact name"],
    },
    cropName: {
      type: String,
      required: [true, "Please add a contact name"],
    },
    cropOtherName: {
      type: String,
      required: [true, "Please add a contact name"],
    },
    scientificName: {
      type: String,
      required: [true, "Please add a contact name"],
    },
    firstDescription: {
      type: String,
      required: [true, "Please add a contact name"],
    },
    secondDescription: {
      type: String,
      required: [true, "Please add a contact name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("crops", farmFolioSchema);
