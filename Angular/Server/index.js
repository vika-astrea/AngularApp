const express = require("express");
const cors = require("cors");
require("dotenv").config();
const skillsRouter = require('./routes/skills');


const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT||5000;

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/skills', skillsRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});


  return;
});


app.listen(PORT, () =>{ console.log(`The server has started on port: ${PORT}`)});
