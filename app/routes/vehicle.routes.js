module.exports = function(app) {
  var vehicle = require("../controllers/vehicle.controller.js");

  // Create new Vehicle
  app.post("/vehicles", vehicle.create);

  // Retrieve all vehicles
  app.get("/vehicles", vehicle.findAll);

  // Retrieve one single vehicle with vehicleID
  app.get("/vehicles/:vehicleId", vehicle.findOne);

  // Update a vehicle with vehicleId
  app.put("/vehicles/:vehicleId", vehicle.update);

  // Delete a vehicle with vehicleId
  app.delete("/vehicles/:vehicleId", vehicle.delete);
};
