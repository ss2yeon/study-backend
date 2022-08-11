const express = require("express");
const app = express();

const port = 8000;
// localhost:8000/
app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/test.html");
})

app.listen(port, ()=>{
    console.log("server open: ", port);
})