const express = require('express');
const app = express();

require("dotenv").config();
require("./db");

const PORT = process.env.PORT || 4000;

const pictureRouter = require("./routes/picture");

app.use("/pictures", pictureRouter);

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});