require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(()=>console.log("DB server connect"))
.catch(e => console.log("DB error", e));
   
app.get('/', (req, res) => {
    res.send("Hello There")
})

app.listen(port, () => {
    console.log("Server is running");
})