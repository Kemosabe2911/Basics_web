const express= require('express');
const path=require('path');
const multer=require('multer');
const ejs= require('ejs');
const { Pool, Client } = require('pg');

const app= express();

app.set('view engine', 'ejs');