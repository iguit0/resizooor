const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create vehicle schema & model
const VehicleSchema = new Schema({
    marca: {
      type: String,
      required: [true, "This field is required"]
    },
    modelo: {
      type: String,
      required: [true, "This field is required"]
    },
    cor: {
      type: String,
      required: [true, "This field is required"]
    },
    ano: {
      type: Number,
      required: [true, "This field is required"]
    },
    preco: {
      type: Number,
      required: [true, "This field is required"]
    },
    descricao: {
      type: String
    },
    novo: {
      type: Boolean,
      default: false,
      required: [true, "This field is required"]
    },
    data_cadastro: {
      type: Date,
      default: Date.now,
      required: [true, "This field is required"]
    },
    data_atualizacao: {
      type: Date,
      default: undefined
    },
});

const Vehicle = mongoose.model('vehicle', VehicleSchema);
module.exports = Vehicle;
