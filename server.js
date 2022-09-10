const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path= require('path');
const ejs = require('ejs');
const connectDB = require('./server/database/connection');


const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 3000;
//log request
app.use(morgan('tiny'));

//load mongoDb

connectDB();

//parse request to body-parser
app.use(bodyParser.urlencoded({extended: true}))

//set view engine
app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname, 'views'))

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

//load routers

app.use('/', require('./server/routes/router') )

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`)
  })