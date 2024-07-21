// 🌟 Exercise 2: Building A Basic CRUD API With Express.Js
// Instructions
// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

// Create a new directory named book-api.

// Inside the book-api directory, initialize a new Node.js project and install the express package.

// Create a new file named app.js in the book-api directory.

// In app.js, import the express module and create an instance of an Express app.
import { express } from 'express'
const app = express()
// Define a basic data array containing a few book objects. Each book object should have properties like id, title, author, and publishedYear.
const books = [
    {id:1,title:'guhh',author:'sam',publishedYear:2018},
    {id:2,title:'zeep',author:'daryl',publishedYear:2019},
    {id:3,title:'meep',author:'arnold',publishedYear:2020},
    {id:4,title:'dwind',author:'cameron',publishedYear:2021},
]
// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
app.listen(5000,()=> {
    console.log('server 5000 is running');
})
// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
app.get("/api/books", (req, res) => {
    res.json(books);
  });
// Implement the “Read” route by defining a route at GET /api/books/:bookId. 
//Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. 
//If the book is found, send a JSON response with the book details and a status code of 200 (OK).
// If the book is not found, send a 404 status with a “Book not found” message.
app.get("/api/books/:bookId", (req, res) => {
    const id = Number(req.params.bookId);
    const book = books.find((book) => book.id === id);
  
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.json(book);
  });
// Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. 
//Inside the route handler, create a new book object with an incremented ID and the data from the request body. 
//Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).
app.use(express.json()); // parse json body content

app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.name,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});