var mongoose = require("mongoose");

var VehicleSchema = mongoose.Schema(
  {
    brand: String,
    model: String,
    color: String,
    year: Number,
    price: Number,
    description: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);
