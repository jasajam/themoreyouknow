var db = require("../models");

// VERY FIRST V0 ROUTES FOR TESTING
// module.exports = function(app) {

//     app.get("/", function(req, res) {
//         res.render("index", {title: "The More You Know"});
//     });

//     app.get("/saved", function(req, res) {
//         res.render("saved", {title: "My Saved Articles"});
//     })

// };

var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {


    db.Article.find({})
    .then(function(dbArticle) {
            // THIS IS HANDLED IN HBS RATHER
        // if (dbArticle.length === 0) {
        //     res.send("No articles yet, love");
        // } 

        //     console.log(dbArticle);
        //     res.send("All the articles");

        
        // res.json(dbArticle);

            // dbArticle is an array within the object
        var hbsObject = {
            articles: dbArticle
        };

        console.log(hbsObject);
        res.render("index", hbsObject);

       
    })
    .catch(function(err) {
    // If an error occurred, send it to the client
        res.json(err);
    });
});

router.get("/saved", function(req, res) {
    res.render("saved", {title: "My Saved Articles"});
});

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

module.exports = router;

