import { Schema, model } from "mongoose";
import bycrypt from "bcryptjs";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    ref: "Role",
    type: Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
})

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bycrypt.genSalt(10)
  const newPassword = await bycrypt.hash(password, salt)
  console.log(newPassword)
  return newPassword
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bycrypt.compare(password, receivedPassword)
}

export default model('User', userSchema)



