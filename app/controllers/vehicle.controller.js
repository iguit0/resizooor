var Vehicle = require("../models/vehicle.model");

exports.create = function(req, res) {
  // Create and Save new Vehicle
  var new_vehicle = new Vehicle(req.body);
  new_vehicle.save(function(err, data) {
    if (err) {
      res.send({ message: "Some error occurred while creating the vehicle." });
    }
    res.json(data);
  });
};

exports.findAll = function(req, res) {
  // Retrieve and return all vehicles from the database.
  Vehicle.find({}, function(err, vehicle) {
    if (err) {
      res.send({ message: "Some error occurred while retrieving vehicles." });
    }
    res.json(vehicle);
  });
};

exports.findOne = function(req, res) {
  // Find a single vehicle with a vehicleId
  Vehicle.findById(req.params.vehicleId, function(err, vehicle) {
    if (err) {
      res.send({ message: "Could not retrieve vehicle with id this id" });
    }
    res.json(vehicle);
  });
};

exports.update = function(req, res) {
  // Update a vehicle identified by the vehicleId in the request
  Vehicle.findOneAndUpdate(
    { _id: req.params.vehicleId },
    req.body,
    { new: true },
    function(err, vehicle) {
      if (err) {
        res.send({ message: "Could not find a note with this id" });
      }
      res.json(vehicle);
    }
  );
};

exports.delete = function(req, res) {
  // Delete a vehicle with the specified vehicleId in the request
  Vehicle.remove({ _id: req.params.vehicleId }, function(err, vehicle) {
    if (err) {
      res.send({ message: "Could not delete vehicle with this id" });
    }
    res.json({ message: "Vehicle successfully deleted" });
  });
};
