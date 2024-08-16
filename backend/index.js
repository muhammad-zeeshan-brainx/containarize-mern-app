require('dotenv').config();
const express = require('express');
const app = new express();
const cors = require('cors');
const db = require('./config/db.js');

const port = process.env.PORT || 3001;

app.use(cors('*'));
app.use(express.json());

app.use('/api/v1', require('./routes/index.js'));

db.connection()
  .then((res) => {
    app.listen(port, '0.0.0.0', () =>
      console.log(`server started at port ${port}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
