const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicle');

// get a list of vehicle
router.get('/vehicles',function(req,res,next){
    Vehicle.find({}).then(function(vehicle){
        res.send(vehicle);
    })
});

//get a specify Vehicle
router.get('/vehicles/:id',function(req,res,next){
    Vehicle.find({_id:req.params.id}).then(function(vehicle){
        res.send(vehicle);
    }).catch(next);
});

// add a new vehicle
router.post('/vehicles',function(req,res,next){
    Vehicle.create(req.body).then(function(vehicle){
      res.send(vehicle);
    }).catch(next);
});

// update vehicle
router.put('/vehicles/:id',function(req,res,next){
    Vehicle.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Vehicle.findOne({_id: req.params.id}).then(function(vehicle){
            res.send(vehicle);
        }).catch(next);
    });
});

// delete vehicle
router.delete('/vehicles/:id',function(req,res,next){
    Vehicle.findByIdAndRemove({_id: req.params.id}).then(function(vehicle){
        res.send(vehicle);
    });
});

module.exports = router;
