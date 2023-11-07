const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

// Função de conexão
async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.hhd9emn.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("Conectado com sucesso!");
}

main().catch((err) => console.log(err));

module.exports = main;