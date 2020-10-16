const express= require('express');
const path=require('path');
const multer=require('multer');
const ejs= require('ejs');
const { Pool, Client } = require('pg');

const app= express();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'image_up',
    password: 'Stevin123',
    port: 5432,
  });

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  });

  var upload = multer({ storage: storage });

  app.use(express.static('images'));

app.post('/',upload.single('image_upload'),(req,res)=>{
    var image= req.file.filename;
    var imagePath = req.file.path;
    console.log(req.file);
    console.log(imagePath);
  res.render('index',{image: imagePath});
}); 

app.listen(PORT, () =>{
    console.log(`Server Running on port ${PORT}`);
});