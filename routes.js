'use strict';

const express = require('express');
const api1 = express.Router();

api1.get('/', (req,res)=>{
  res.send({message: 'Hola puerto 8000'});
});
module.exports = api1;