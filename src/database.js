import mongoose from "mongoose";
import {config} from "dotenv";
config()

const mongodb = process.env.MONGODB_URL

mongoose.connect(mongodb)
  .then(db => console.log(`${db.connection.name} is online`))
  .catch(error => console.log(error))