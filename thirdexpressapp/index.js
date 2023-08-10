// bring

const express = require("express");

// Assign

const app = express();


// Port

const Port = 3000;

// Route

app.get("/", (req,res) => {
res.status(200).send("Hello Word");
})

//Listen

app.listen(Port,() => {
    console.log("Server Connect successful");
})