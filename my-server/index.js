const express = require ('express');
  const cors = require ('cors');
const { connect } = require('mongoose');
 require ('dotenv').config();


 const app = express ();
 app.use(express.json ({extented:true}))
 app.use(express.urlencoded ({extented:true}))
 app.use(cors({Credentials: true, origin: ['http://localhost:3000']}));   
 

 app.listen (process.env.PORT,() => console.log(`server started on port  ${process.env.PORT}`));