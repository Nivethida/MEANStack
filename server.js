var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var morgan = require('morgan')
var jwt = require('jsonwebtoken')
mongoose.connect('mongodb://127.0.0.1:27017/newUI')

var loginSchema = new mongoose.Schema({
    name: String,
    password: String
})

var login = mongoose.model('logins',loginSchema);

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',function (req,res) {
    res.sendfile('Home.html')
});
 app.get('/index',function (req,res) {
     res.send("you are in index")
 });
 app.get('/loginAngular.js',function (req,res) {
     res.sendfile('loginAngular.js');
 })
 app.get('/login',function (req,res) {
     res.sendfile('index.html')
 });

app.post('/login',function (req,res) {

 var newLogin = new login({
      name: req.body.user,
      password:req.body.password
    });
 if(req.body.user == null || req.body.user == '' || req.body.password == null || req.body.password == '')
 {
      res.send("Ensure you have given name and password ")
 }
 else {
     newLogin.save(function (err, resp) {
         if (resp) {
             res.send("you are successfully registered")
         }
         else {
             res.send("Error sending registration")
         }
     });
     /* login.findOne({name:req.body.user,
      password: req.body.password},function (err,response) {
      if(response) {
      var token = jwt.sign(response.get('secretSecurity'),{
      expiresInMinutes: 1440
      });
      res.json({
      success: true,
      message: 'Enjoy your token',
      token: token
      });
      }
      else{
      res.send("wrong user name/password");
      }

      })*/
 }
});
app.get('/dashBoard',function (req,res) {
    res.sendfile('dashBoard.html');
});
 app.listen(8085);
 console.log("the server is running on 8085");