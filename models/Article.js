var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    summary: {
        type: String, 
        required: true
    },
        // COMMENT OUT BC DATE AND SUMMARY NOT SEPARATE AT PRESENT
    // date: {
    //     type: String,
    //     required: true
    // },
    category: {
        type: String, 
    },
    image: {
        type: String,
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;