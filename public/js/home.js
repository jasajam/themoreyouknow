// var axios = require("axios");
// var cheerio = require("cheerio");

$(document).ready(function() {
  //   // $("#scrape-articles").on("click", function() {
  //   //   // alert("was a click!");
  //   //   $.ajax({
  //   //     url: "/api/articles",
  //   //     method: "GET"
  //   //   }).then(function(res) {
  //   //     // console.log(res);
  //   //     console.log(res);
  //   //     location.href = "/";
  //   //   });
  //   // });
  //   // $("#clear-articles").on("click", function() {
  //   //   alert("other click");
  //   //   // $.ajax({
  //   //   //   url: "api/articles",
  //   //   //   method: "DELETE"
  //   //   // }).then(function(res) {
  //   //   //   console.log("articles deleted");
  //   //   //   location.href = "/";
  //   //   // })
  //   // });

  $(".comment-btn").on("click", function() {
    $(".modal").modal();
  });

  // $(".comment-btn").on("click", function() {
  //   $(".modal").modal();
  // });

  // $(".save-note").on("click", function() {
  //   // alert("hello");
  //   var newNote = {};
  //   newNote.title = $("textarea")
  //     .val()
  //     .trim();
  //   newNote.body = $("input")
  //     .val()
  //     .trim();
  //   console.log(newNote);

  //   $.ajax({
  //     url: "/api/post-note",
  //     method: "POST",
  //     data: newNote
  //   }).then(function() {
  //     console.log("comment added to db");
  //     window.location.href = "/api/get-articles";
  //   });
  // });
});
