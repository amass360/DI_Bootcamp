// 🌟 Exercise 1: Building A RESTful API
// Instructions
// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// Create a directory named blog-api.

// Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the express package by running npm install express in the terminal.

// Create a file named server.js.

// In server.js, require the express package and set up an Express app.
const express = require('express')
const app = express()
// Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.
const blogPosts = [
    {id:1,title:'guhh',content:'goopy'},
    {id:2,title:'sideDoor',content:'heh'},
    {id:3,title:'hello',content:'zeep'},
]
// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
app.get("/posts",(req,res)=> {
    return JSON.stringify(blogPosts)
})

// console.log(blogPosts);

// GET /posts/:id: Return a specific blog post based on its id.
app.get("/posts/:id",(req,res)=> {
    console.log(req.params);
    const {id} = req.params
    const blogPost = blogPosts.find((blogPost) => blogPost.id == id)
    //only 2 equal signs above because "id" is a string
    if (!blogPost) return res.status(404).json({msg:'not found'})
    res.json(blogPost)
})
// POST /posts: Create a new blog post.
app.use(express.json()); // parse json body content

app.post("/posts", (req, res) => {
  const newPost = {
    id: blogPosts.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});
// PUT /posts/:id: Update an existing blog post.
app.use(express.json()); // parse json body content

app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = blogPosts.findIndex((blogPost) => blogPost.id === id);
  if (index === -1) {
    return res.status(404).send("Blogpost not found");
  }
  const updatedBlogPost = {
    id: blogPosts[index].id,
    name: req.body.name,
    price: req.body.price,
  };
  blogPosts[index] = updatedBlogPost;
  res.status(200).json("Blogpost updated");
});
// DELETE /posts/:id: Delete a blog post.
app.use(express.json()); // parse json body content

app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = blogPosts.findIndex((blogPost) => blogPost.id === id);
  if (index === -1) {
    return res.status(404).send("Blogpost not found");
  }
  blogPosts.splice(index, 1);
  res.status(200).json("Blogpost deleted");
});
// Implement error handling for invalid routes and server errors.
app.use((req,res)=> {
    res.status(404).json({message:'route not found'})
})
// Start the Express app and listen on a specified port (e.g., 3000).
app.listen(3000, ()=> {
    console.log('running on 3000');
})