// Bring

const express = require("express");

// Assign

const app = express();

// Port

const PORT = 3000;

//Route

app.get("/",(req,res) => {
   res.status("200").send("<h1>welcome User</h1>");
})

app.get("/instagram",(req,res) => {
    const instagram = {
        username : "divyeshgodhani",
        followers : 490,
        follwing : 400,
        website : "divyeshgodhani.tech"
    }
    res.status("200").send({instagram});
})

app.get("/twitter",(req,res) => {
const twitter = {
    username : "divyeshgodhani",
    followers : 490,
    follwing : 400,
    website : "divyeshgodhani.tech"
}

res.status("200").send({twitter});

})

app.get("/linkdln",(req,res) => {
const twitter = {
    username : "divyeshgodhani",
    followers : 11600,
    follwing : 300,
    website : "divyeshgodhani.tech"
}

res.status("200").send({twitter});

})

app.get("*",(req,res) => {
res.status("200").send("404 page")
})





// listen

app.listen(PORT,() => {
    console.log("server is Running");
})