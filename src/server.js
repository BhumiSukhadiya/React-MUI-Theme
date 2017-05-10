//server.js
'use strict';
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Data = require('./model/data');
//and create our instances
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/TestDB');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
let multer = require('multer');
let filename='';
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/assets/images')
    },
    filename: function (req, file, cb) {
        filename = Date.now() + '.jpg';
        cb(null, filename);

    }
});
let upload = multer({storage: storage});

app.get('/getData', function (req, res) {
    //looks at our data Schema
    let id = req.query.id;
    let t = null;
    //console.log("id="+id);
    if (id) {
        Data.find({_id: id}, function (err, userdata) {
            if (err)
                res.send(err);
            res.json(userdata)
        });
    } else {
        Data.find({}, function (err, userdata) {
            if (err)
                res.send(err);
            res.json(userdata)
        });
    }
});

app.post('/insertData', upload.single('file'), function (req, res) {
    let data = new Data();

    data.name = req.body.name;
    data.email = req.body.email;
    data.gender = req.body.gender;
    data.country = req.body.country;
    data.technology = req.body.technology;
    data.profile = filename;
    data.status = req.body.status;
    data.save(function (err) {
        if (err)
            res.send(err);
        res.send(' Data successfully added!');
    });
    //res.send("image uploaded");
});
app.put('/updateData', upload.single('file'), function (req, res) {
    if (req.file !== undefined) {
        Data.findOneAndUpdate({"_id": req.query.id}, {
            $set: {
                "name": req.body.name,
                "email": req.body.email,
                "gender": req.body.gender,
                "country": req.body.country,
                "technology": req.body.technology,
                "profile": filename,
                "status": req.body.status
            }
        }, {new: true}, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send("User data updated successfully");
            }
        })
    } else {
        Data.findOneAndUpdate({"_id": req.query.id}, {
            $set: {
                "name": req.body.name,
                "email": req.body.email,
                "gender": req.body.gender,
                "country": req.body.country,
                "technology": req.body.technology,
                "status": req.body.status,
            }
        }, {new: true}, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send("User data updated successfully");
            }
        })
    }

});

app.delete('/deleteData',function (req, res) {
    Data.remove({"_id": req.query.id}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send("User data deleted successfully");
        }
    })
});
/*//multer for image upload
 let multer  = require('multer');
 let filename;
 let storage = multer.diskStorage({
 destination: function (req, file, cb) {
 cb(null, '/Users/lcom81_two/react_test1/public/images/')
 },
 filename: function (req, file, cb) {
 filename=Date.now()+'.jpg';
 cb(null, filename );

 }
 });
 let upload = multer({ storage: storage });

 app.post( '/insertData',upload.single('file'),function(req,res){
 //console.log(req.body);
 let data = new Data();

 data.firstName = req.body.firstName;
 data.lastName = req.body.lastName;
 data.age = req.body.age;
 data.profile=filename;
 data.save(function (err) {
 if (err)
 res.send(err);
 res.json({message: 'Author Data successfully added!'});
 });
 //res.send("image uploaded");
 });
 app.get('/getData',function (req, res) {
 //looks at our data Schema
 let id = req.query.id;
 let t = null;
 //console.log("id="+id);
 if (id) {
 Data.find({_id: id}, function (err, authordata) {
 if (err)
 res.send(err);
 res.json(authordata)
 });
 } else {
 Data.find({}, function (err, authordata) {
 if (err)
 res.send(err);
 res.json(authordata)
 });
 }
 });
 //post new data to the database

 app.put('/updateData',upload.single('file'),function (req, res) {
 console.log(req.body);
 if(req.body.file == null ){
 Data.findOneAndUpdate({"_id": req.query.id}, {
 $set: {
 "firstName": req.body.firstName,
 "lastName": req.body.lastName,
 "age": req.body.age,
 "profile": filename
 }
 }, {new: true}, function (err, data) {
 if (err) {
 res.send(err);
 } else {
 res.send("Author data updated");
 }
 })
 }else{
 Data.findOneAndUpdate({"_id": req.query.id}, {
 $set: {
 "firstName": req.body.firstName,
 "lastName": req.body.lastName,
 "age": req.body.age
 }
 }, {new: true}, function (err, data) {
 if (err) {
 res.send(err);
 } else {
 res.send("Author data updated");
 }
 })
 }


 });
 app.delete('/deleteData',function (req, res) {
 Data.remove({"_id": req.query.id}, function (err, data) {
 if (err) {
 res.send(err);
 } else {
 res.send("Author data deleted");
 }


 })

 });
 app.post('/userRegister',function(req,res){
 console.log(req.body)
 UserData.find({"EmailId":req.body.umail},function(err,data){
 if(err){
 res.send(err);
 return;
 }
 if(data.length >0){
 res.send("Email Id Exist");
 return;
 }else{
 let udata=new UserData();
 udata.UserName=req.body.uname;
 udata.EmailId=req.body.umail;
 udata.Password=req.body.upass;
 console.log(udata);
 udata.save(function (err) {
 if (err)
 res.send(err);
 res.send('User registered successfully!');
 });
 }
 })
 });
 app.post('/userLogin',function(req,res){
 console.log(req.body)
 UserData.find({"EmailId":req.body.mail,"Password":req.body.pass},function(err,data){
 if(err){
 res.send(err);
 return;
 }
 if(data.length >0){
 res.send({check:true});

 }else{
 res.send({check:false});
 }
 })
 })*/
let port = process.env.API_PORT || 3001;
//starts the server and listens for requests
app.listen(port, function () {
    console.log('api running on port :' + port);
});
