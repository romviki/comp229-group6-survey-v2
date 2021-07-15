const { ObjectId } = require('mongodb');
let mongoose = require('mongoose');

// create a model class
let saraSurveyModel = mongoose.Schema({
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
    userid: ObjectId
},
{
    collection: "surveys"
});

let userModel = mongoose.Schema({
    username: String,
    fullname: String,
    company: String,
    email: String,
    phone: String
},
{
    collection: "users"
});

module.exports = mongoose.model('Survey', surveyModel);
module.exports = mongoose.model('User', userModel);
