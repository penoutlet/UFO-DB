
// Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models');
var path = require("path");

router.get("/", function (req, res) {
        res.render('index');
});

router.get("/api/all", function (req, res) {
    models.sightings.findAll({}).then(function(sightings) {
        var hbsObject = {sightings : sightings};
        console.log(hbsObject);
        res.render('allSightings', hbsObject);
    });
});

router.get("/api/shape/:shape", function(req,res) {
    models.sightings.findAll({
    where: {
        shape: req.params.shape
    }
    }).then(function(results){
        res.json(results)
    });
});

router.get("/api/date/:date", function(req,res){
    models.sightings.findAll({ 
    where: {
        date: req.params.date
    }
    }).then(function(results){
    res.json(results);
    console.log(results);
    });
});

router.get("/api/state/:state", function(req,res){
    models.sightings.findAll({
        where: {
            state: req.params.state 
        }
    }).then(function(results){
    res.json(results);
    });
});

router.get("/api/city/:city", function(req,res){
    models.sightings.findAll({
        where: {
            city: req.params.city
        }
    }).then(function(results){
        res.json(results);
    });
});

// router.get("/api/city/:city", function (req, res) {
//     models.sightings.findAll({
//         where: {
//             city: req.params.city
//         }
//     }).then(function(sightings) {
//         var hbsObject = {sightings : sightings};
//         console.log(hbsObject);
//         res.render('citySearch', hbsObject);
//     });
// });

//post route for adding new sighting
router.post("/", function (req, res) {
    console.log(req.body);
    models.sightings.create({
      Date: req.body.date,
      City: req.body.city,
      State: req.body.state,
      Shape: req.body.shape,
      Duration: req.body.duration,
      Summary: req.body.summary
    }).then(function(dbSighting) {
        //res.json(dbSighting);
        res.redirect("/");
    });//dbsighting
})//post

//get route to display addSighting handlebars page where POST route info shows
router.get("/api/add", function (req, res) {

        res.render('addSighting');
    
});

//get route to display the citySearch handlebars page when the button is clicked on the home page
router.get("/api/city", function (req, res) {

        res.render('citySearch');
    
});
// //HTML add route loads the add.html page, where users can enter new books to the db
//   router.get("/add", function(req, res) {
//     res.sendFile(path.join(__dirname, "../views/addSighting.handlebars"));
//   });

module.exports = router;