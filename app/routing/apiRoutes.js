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

    var newScore = req.body.scores;

    var closeFriend;
    var totalDifference = Number.MAX_SAFE_INTEGER;
    var tempDifference = 0;

    friends.forEach(function (friend) {
        var score = friend.scores;
        tempDifference = 0;

        for (var i = 0; i < score.length; i++) {
            if (score[i] !== newScore[i]) {
                var difference = Math.abs(score[i] - newScore[i]);
                tempDifference += difference;
            }
        }

        if (tempDifference < totalDifference) {
            totalDifference = tempDifference;
            closeFriend = friend;
        }
    })
    friends.push(req.body);

    console.log(closeFriend);
    res.send(closeFriend);
});

module.exports = router;