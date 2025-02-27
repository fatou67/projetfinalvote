const express  = require('express')
const cors = require('cors');
const {connect } = require('mongoose');
require("dotenv").config()


const app = express();
app.use(express.json({extended: true}))
app.use(express.urlencoded({entended: true}))
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))


app.listen(process.env.Port, () => console.log(`Server is running on port 5000 ${process.env.PORT}`))

connect(process.env.MONGO)