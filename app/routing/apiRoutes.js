var friends = require("../data/friend");

var express = require('express');
var path = require("path");
var router = express.Router();

router.use(function timeLog(req, res, next) {
    // console.log('Time: ', Date.now())
    next();
})

router.get("/api/friends", function (req, res) {
    res.json(friends);
});

router.post("/api/friends", function (req, res) {
    // res.sendFile(path.join(__dirname, "reserve.html"));
    friends.push(req.body);

    console.log(req.body);
});

module.exports = router;