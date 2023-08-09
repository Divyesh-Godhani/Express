// Bring

const express = require("express");

// Assign
const app = express();

//Port

const PORT = 3000;

// Route

app.get("/", (req,res) => {
    res.send("<h1> Connect Express </h1>");
});

app.get("/home",(req,res) => {
    res.send("home page");
})

app.get("/about",(req,res) => {
    res.send("About page")
})

app.get("*",(req,res) =>{
    res.send("404 page");
})

// Listen

app.listen(PORT, () => {
    console.log("server is running");
})