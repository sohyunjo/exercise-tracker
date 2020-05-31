const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose'); //help to connect to mongo db

//to have variables in dotenv file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware 
app.use(cors());
//allow us to parse json
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true })

const connection  = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connect succes")
})

//require the files to use, import
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

//when going to the url, will load the router. 
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

//what starts the server
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})