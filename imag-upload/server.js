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
  })

app.set('view engine', 'ejs');