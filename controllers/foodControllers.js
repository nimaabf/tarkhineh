const fs = require("fs");

const { MongoClient } = require("mongodb");

// Replace `connectionString` with your MongoDB connection string
const connectionString =
  "mongodb+srv://db-tarkhineh:13751375@tarkhineh.j7tgyan.mongodb.net/";

let db;

MongoClient.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.error("Failed to connect to MongoDB:", err);
      return;
    }
    console.log("Connected to MongoDB");
    db = client.db(); // Assign the MongoDB database to the `db` variable
  }
);

exports.getAllFoods = (req, res) => {
  // Replace 'specialFoodsByBranch' with the appropriate collection name in your MongoDB
  db.collection("specialFoodsByBranch")
    .find()
    .toArray((err, specialFoods) => {
      if (err) {
        console.error("Failed to fetch special foods from MongoDB:", err);
        res
          .status(500)
          .json({ status: "error", message: "Failed to fetch special foods" });
        return;
      }
      res.status(200).json({
        data: {
          getSpecialFoods: specialFoods,
        },
        status: "success",
        branchCount: specialFoods.length,
      });
    });
};

exports.addSpecialFood = (req, res) => {
  console.log(req.body);
  // const newId=specialFoods[specialFoods.length-1].id
  const newSpecialFoods = req.body;
  specialFoods.vanak.push(newSpecialFoods);
  fs.writeFile(
    `specialFoodsByBranch.json`,
    JSON.stringify(specialFoods),
    (err) => {
      res.status(201).json({
        data: {
          specialFoods: newSpecialFoods,
        },
      });
    }
  );
  res.send("Done");
};
