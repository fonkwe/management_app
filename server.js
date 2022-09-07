const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 3000;
//log request
app.use(morgan('tiny'));
app.get('/', (req, res) => {
    res.send("User Management System");
})

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`)
  })