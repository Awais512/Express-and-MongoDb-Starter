const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const { connectDb } = require('./db');
const cors = require('cors');
dotenv.config();

connectDb();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));
