const blogRouter = require("express").Router()
const Blog = require("../models/blogModel")
const User = require("../models/userModel")
const authChecker = require("../utils/authChecker")

blogRouter.get("/", async (req, res) => {
  const blogs = await Blog.find({}).populate("user")
  res.json(blogs)
})

blogRouter.get("/:id", async (req, res) => {
  console.log("Test")
  const id = req.params.id
  try {
    const blog = await Blog.findById(id)
      .populate("user")
      .populate({ path: "comments",
      populate: {
        path: "user",
      }})
    res.json(blog)
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
  }
})

blogRouter.post("/", authChecker, async (req, res) => {
  const { title, content } = req.body
  const user = req.user
  //const MongoUser = await User.findById(user.id)
  const newBlog = new Blog({
    title,
    content,
    dateAdded: new Date(),
    user: user,
  })
  
  try {
    const savedBlog = await newBlog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    return res.json(savedBlog)
  } catch (error) {
    return res.send(error).status(400)
  }
})

module.exports = blogRouter
