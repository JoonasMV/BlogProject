const loginRouter = require("express").Router()
const User = require("../models/userModel")
const config = require("../utils/config")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })
  const correctPassword = await bcrypt.compare(password, user.passwordHash)
  
  if (!(user && correctPassword)) res.sendStatus(401)

  const userForToken = {
    username: user.username,
    id: user._id
  }

  const accessToken = jwt.sign(userForToken, config.SECRET)
  res.json({ accessToken })
})

module.exports = loginRouter