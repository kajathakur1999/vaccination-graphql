const { connect } = require("mongoose");

// const { mongoURI }= process.env;

const mongoURI = "mongodb+srv://kajal:rjQhgWJ8hXpRsHS0@cluster0.xgoaf.mongodb.net/brillio-db?retryWrites=true&w=majority";

// const mongoURI = "mongodb://localhost:27017/brillio-db"

connect(mongoURI)
    .then(() => console.log("MongoDB Connected..."))
    .catch(console.log)