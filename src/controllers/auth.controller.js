import User from "../models/User"
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from "../models/Role"

export const signUp = async (req, res) => {

  const {username, email, password, roles } = req.body
  
  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password)
  })
console.log('roles>' , roles)
  if (roles) {
    const foundRoles = await Role.find({name: {$in: roles}})
    newUser.roles = foundRoles.map(role => role._id)
  } else {
    const role = await Role.findOne({name: "user"})
console.log('role>>>' , role)
    newUser.roles = [role._id]
  }
  
  const savedUser = await newUser.save()
  console.log(savedUser)

  const token = jwt.sign({id: savedUser._id}, config.SECRET, {
    expiresIn: 86400  // 24 horas
  })

  res.status(200).json({token})
}

export const signIn = (req, res) => {
  res.json('get signIn')
}

