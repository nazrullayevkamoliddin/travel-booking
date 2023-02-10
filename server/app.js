const express = require('express');
const connect_db = require('./config/db');
require('dotenv').config();  
const cors = require('cors');
connect_db()

const app = express();
app.use(cors())
app.use(express.json());
app.use('/api', require('./routers/router'));

app.listen(process.env.APP_PORT, () => {console.log(`Server run on port: ${process.env.APP_PORT}`)});