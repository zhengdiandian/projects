var express = require('express')
var app = express();
var bodyParser = require('body-parser')
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.listen(8080);
app.get('/getUser',function (req,res) {
  res.send([{
    name:'zzp',age:20
  }]);
});
app.post('/postUser',function (req,res) {
  console.log(req.body);
  res.send(
    req.body
  );
});
app.get('/',function (req,res) {
  res.sendFile('./get.html',{root:__dirname})
});