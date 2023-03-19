import mongoose from "mongoose";

const mongodb = "mongodb+srv://tasksuser:mDTOomkx7JEEihK6@cluster0.8wocs2s.mongodb.net/autenticationdb"

mongoose.connect(mongodb)
  .then(db => console.log(`${db.connection.name} is online`))
  .catch(error => console.log(error))