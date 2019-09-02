const mongoose = require("mongoose");

const VehicleSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true
    },
    model: {
      String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);
