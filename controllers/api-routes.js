var express = require("express");
var router = express.Router();
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");

router.get("/api/articles", function(req, res) {
    var promises = [];
    axios.get("https://www.npr.org/sections/strange-news/").then(function(response) {
        var $ = cheerio.load(response.data);
            // FROM INITIAL TESTING
        // res.send("scraped");
        // var results = response.data;
        // res.json(results);

        // $("article.item").each(function(i, element) {
        $("article.item").each(function(i, element) {
                // OBJECT TO SAVE DATA
            var result = {};
                // SCRAPE THE ARTICLE TITLE
            result.title = $(this)
            .children("div.item-info-wrap")
            .children("div.item-info")
            .children("h2")
            .children("a")
            .text();
            
                // SCRAPE THE ARTICLE SUMMARY
            result.summary = $(this)
            .children("div.item-info-wrap")
            .children("div.item-info")
            .children("p.teaser")
            .children("a")
            .text();
                // SCRAPE THE ARTICLE LINK
            result.link = $(this)
            .children("div.item-info-wrap")
            .children("div.item-info")
            .children("h2")
            .children("a")
            .attr("href");
                // SCRAPE THE ARTICLE CATEGORY
            result.category = $(this)
            .children("div.item-info-wrap")
            .children("div.item-info")
            .children("div.slug-wrap")
            .children("h3.slug")
            .children("a")
            .text();
                // SCRAPE THE IMAGE URL
            result.image = $(this)
            .children("div.item-image")
            .children("div.imagewrap")
            .children("a")
            .children("img")
            .attr("src");


            // db.Article.update( {$or: [{result.title}, result.date] },
            var promise = db.Article.updateOne( result, { $setOnInsert: result }, { upsert: true })

            promises.push(promise);


        });

        Promise.all(promises).then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            res.json(err)
        })

    });
});



module.exports = router;