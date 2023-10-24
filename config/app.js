/*app.js
Syed Kazmi
301330922
2023-10-27
*/

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//parsing text
app.use(express.urlencoded({ extended: true }));

//setup & connect db
let mongoose=require('mongoose');
let DB=require('./db');
mongoose.connect(DB.URI,{useNewUrlParser: true});

//check mongoose connection
mongoDB = mongoose.connection;
mongoDB.once('open', ()=>{console.log('Connected to MongoDB....')});

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'../public')));
app.use(express.static(path.join(__dirname,'../node_modules')));

const indexRouter = require('../routes/index');
app.use('/', indexRouter);

let pFolioUsersRouter = require('../routes/pFolioUsers');
app.use('/userList', pFolioUsersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


