const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const UsersRoute = require('./routes/users');

app.use('/api/Users', UsersRoute);

//DB Connection
const db= 'mongodb://localhost:27017/UserDB';
mongoose.connect(db, {useNewURLParser: true}, () => {
    console.log("Connected to DB");
})
const port = process.env.PORT || 3001;

app.listen(port, ()=> console.log(`Listening on port ${port}`));