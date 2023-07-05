const dotenv = require("dotenv");
const fs = require("fs");
const mongoose = require("mongoose");

const FoodModel = require("./models/tarkhinehModel");
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

const specialfoods = JSON.parse(
  fs.readFileSync(`${__dirname}/specialFoodsByBranch.json`, "utf-8")
);

const importData = async () => {
  try {
    await FoodModel.create(specialfoods);
    console.log(specialfoods);
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await FoodModel.deleteMany();
    console.log("data successfully deleted");
  } catch (err) {
    console.log(err);
  }
};

importData();
// deleteData()
