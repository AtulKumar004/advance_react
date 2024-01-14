const express = require("express")
const app = express()
app.use(express.json())

let SERVER_PORT = 4000
app.listen(SERVER_PORT, () => {
  console.log("server is listing on port no 4000")
})

let currentUser = {
  name: "Atul kumar",
  age: 26,
  country: "India",
  books: ["Fingersmith", "The Night Watch"]

}

let users = [
  {
    id: 1,
    name: "Sarah Waters",
    age: 55,
    country: "United Kingdom",
    books: ["Fingersmith", "The Night Watch"],
  },
  {
    id: 2,
    name: "Haruki Murakami",
    age: 71,
    country: "Japan",
    books: ["Norwegian Wood", "Kafka on the Shore"],
  },
  {
    id: 3,
    name: "Chimamanda Ngozi Adichie",
    age: 43,
    country: "Nigeria",
    books: ["Half of a Yellow Sun", "Americanah"],
  },
];

let books = [
  {
    id: 1,
    name: "To Kill a Mockingbird",
    pages: 281,
    title: "Harper Lee",
    price: 12.99,
  },
  {
    id: 2,
    name: "The Catcher in the Rye",
    pages: 224,
    title: "J.D. Salinger",
    price: 9.99,
  },
  {
    id: 3,
    name: "The Little Prince",
    pages: 85,
    title: "Antoine de Saint-Exupéry",
    price: 7.99,
  },
];



app.get("/user", (req, res) => {
  let obj = {
    statusCode: 200,
    data: users,
    message: "Successfully get data"
  }
  return res.json(obj);
})


app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.json(users.find((user) => user.id == id));
})

app.get("/all-users", (req, res) => res.json(users))
app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  res.json(books.find((book) => book.id == id));
});

app.post("/books" , (req ,res) => {
  const {newUser: bookData}  = req.body;
  console.log("bookData => " , req.body)
  
  books = [ ...books , {...req.body , id: books.length + 1}];
  let response = {
    statusCode: 200,
    message: "User added successfully :)",
    data: bookData
  }
  res.json(response);

})

app.post("user/:id", (req , res) => {
  const {id} = req.params;
  const {user: editUser}  = req.body;

  users = users.map((user) => user.id === id ? editUser : user);
  res.json(users.find((user) => user.id === id));


})