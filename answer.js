// Answer here for tasks.md

// Q1 Answer here...
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var definedUser = new Schema({
    name:{
        type : String,
    },
    email:{
        type:String,
    },
    age:{
        type:Number,
    }
});

var User = mongoose.model("User",definedUser);
module.exports = User;


// Q2 Answer here...

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newUserSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        lowercase:true,
    },
    age: {
        type:Number,
        default : 0,
    },
});

var User = mongoose.model("User",newUserSchema);
module.exports = User;


// Q3 Answer here...


var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newUserSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        lowercase:true,
    },
    age: {
        type:Number,
        default : 0,
    },
    password : {
        minlength:5,
    },
    createdAt:{
        type:Date,
        default : Date.now,
    }
});

var User = mongoose.model("User",newUserSchema);
module.exports = User;


// Q4 Answer here...

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var address = new Schema({
    village : {
        type:String
    },
    city : {
        type:String
    },
    state : {
        type: String
    },
    pin : {
        type : Number
    },
    user : {
        type:mongoose.ObjectId,
    }
})

var AddresSchema = mongoose.model("AddresSchema",address);
module.exports = AddresSchema;

// Q5 Answer here...

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var address = new Schema({
    village : {
        type:String
    },
    city : {
        type:String,
        required:true,
    },
    state : {
        type: String,
        required:true
    },
    pin : {
        type : Number
    },
    user : {
        type:mongoose.ObjectId,
    }
})

var AddresSchema = mongoose.model("AddresSchema",address);
module.exports = AddresSchema;


// Q6 Answer here...

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newUserSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        lowercase:true,
    },
    age: {
        type:Number,
        default : 0,
    },
    favourites : [{
        type:Array
    }],
});

var User = mongoose.model("User",newUserSchema);
module.exports = User;


// Q7 Answer here...

// user
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newUserSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        lowercase:true,
    },
    age: {
        type:Number,
        default : 0,
    },
    favourites : [{
        type:Array
    }],
},{timestamps : true});

var User = mongoose.model("User",newUserSchema);
module.exports = User;

// address
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var address = new Schema({
    village : {
        type:String
    },
    city : {
        type:String,
        required:true,
    },
    state : {
        type: String,
        required:true
    },
    pin : {
        type : Number
    },
    user : {
        type:mongoose.ObjectId,
    },
},{timestamps : true});

var AddresSchema = mongoose.model("AddresSchema",address);
module.exports = AddresSchema;

// Q8 Answer here...
// models is already created in user and address above.

// Q9,10,11,12...

var express = require("express");
var router = express.Router();
var User = require("../model/user");

router.get("/",(req,res)=>{
    res.send("hello at home from routes...");
});

router.post("/",(req,res)=>{
    let data = req.body;
    User.create(data,(err,usercreated)=>{
        if(err){console.log(err)};
        res.json({data});
    })
});

router.get("/:id",(req,res)=>{
    let id = req.params.id;
    User.findById(id,(err,data)=>{
        if(err){console.log(err)};
        res.json({data});
    })
});

router.patch("/:id",(req,res)=>{
    let id = req.params.id;
    User.findByIdAndUpdate(id,req.body,{new:true},(err,data)=>{
        if(err){console.log(err)};
        res.json({data});
    });
});

router.delete("/:id",(req,res)=>{
    let id = req.params.id;
    User.findByIdAndDelete(id,(err,removeuser)=>{
        if(err){console.log(err)}
        res.send(removeuser);
    })
})