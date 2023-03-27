import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'
import Role from '../models/Role'

export const verifyToken = async (req, res, next) =>{
  try {
    const token = req.headers["x-access-token"]
    console.log(token)
    if (!token) return res.status(403).json({message: "No token provided"})
  
    const decoded = jwt.verify(token, config.SECRET)
    req.userId = decoded.id
      
    const user = await User.findById(req.userId, {password: 0})
  
    if (!user) return res.status(400).json({message: 'No user found'})
  
    next()
  } catch (error) {
    return res.status(401).json({message: 'Unauthorized'})
  } // para que continue con la siguiente ejecución
}

export const isModerator = async (req, res, next) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({_id: {$in: user.roles}})
  const isModerator = roles.some(item => item.name==='moderator')

  if (isModerator) {
    next() 
    return
  }

  return res.status(400).json({message: "Moderator role is required."})
}

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({_id: {$in: user.roles}})
  const isAdmin = roles.some(item => item.name==='admin')

  if (isAdmin) {
    next() 
    return
  }

  return res.status(400).json({message: "Admin role is required."})
}