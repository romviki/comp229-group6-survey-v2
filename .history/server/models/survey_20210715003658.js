const { ObjectId } = require('mongodb');
let mongoose = require('mongoose');

// create a model class
let sataSurveyModel = mongoose.Schema({
    name: String,
    contactno: String,
    email: String,
    accomplish: String,
    recommend: String,
    bestmatch: String,
    easyuse: String,
    satisfied: String,
    competitive: String,
    oftenuse: String,
    comments: String
},
{
    collection: "sara_survey"
});

let surveyModel = mongoose.Schema({
    title: String,
    startdate: Date,
    enddate: Date,
},
{
    collection: "survey"
});

let userModel = mongoose.Schema({
    username: String,
    title: String,
    startdate: Date,
    enddate: Date,
},
{
    collection: "survey"
});

module.exports = mongoose.model('Survey', surveyModel);