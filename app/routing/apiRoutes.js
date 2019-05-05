// =================================================================================== //
//					REQUIREMENTS
// =================================================================================== //
var friends = require('../data/friends.js');


// =================================================================================== //
//					GET & POST REQUESTS
// =================================================================================== //
module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	app.post('/api/friends', function(req, res){
        var totalDifference = 0;
		var greatMatch = {
			name: "",
			photo: "",
			matchDifference: 1000
		};
		var userData 	= req.body;
		var userName 	= userData.name;
		var userScores 	= userData.scores;

		var b = userScores.map(function(item){
            return parseInt(item, 10);
        });

        userData = {
            "name": req.body.name,
            "photo": req.body.photo,
            "scores": b
        }

		var sum = b.reduce((a, b) => a + b, 0);
        // For loop gathers the friends' answers into an array.
		for(var i = 0; i < friends.length; i++){
			console.log(friends[i].name);
			totalDifference = 0;
            console.log("Total diff " + totalDifference);
            console.log("Great Match diff " + greatMatch.matchDifference);

            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
			// loop through friend score array & user's answers,
			// calculate and return the absolute value to avoid neg score.
			// Push to totalDifference variable, add them up.
				if (totalDifference <= greatMatch.matchDifference){

					// Populates greatMatch. 
					greatMatch.name = friends[i].name;
					greatMatch.photo = friends[i].photo;
					greatMatch.matchDifference = totalDifference;
            }

		}
		friends.push(userData);
		res.json(greatMatch);
	});
};