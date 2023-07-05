const dotenv = require("dotenv");
const app = require(`./app`);
const mongoose = require("mongoose");
// dotenv.config({path:'./config.env'})

const DB = "mongodb+srv://db-tarkhineh:13751375@tarkhineh.j7tgyan.mongodb.net/";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("db connection successful");
  });
// console.log(DB);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on Port ${port}`);
});
