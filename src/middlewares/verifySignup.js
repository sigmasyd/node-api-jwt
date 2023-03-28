import {ROLES} from "../models/Role"

export const checkRolesExisted = async (req, res, next) => {
  /*
  const rolesUser = req.body.roles
  
  if (rolesUser) {
    const dbRoles = await Role.find({})
    const rolesId = rolesUser.filter(role => 
      dbRoles.some( dbRole => dbRole.name === role)
    )
    if (rolesId) res.status(400).json({message: 'None role was applied'})
  }
  */
  if (req.body.roles) {
    for (let i=0; i<req.body.roles.length; i++) {
      if(!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exists`
        })
      }
    }
  }
  next()  
}