const express = require("express");
const app = express();
app.set("view engine", "ejs")
app.use("/static", express.static("static"))
const port = 8000;



app.get("/", (req,res)=>{
    var person = [
        { name: "김소연", gender: "여자" }, 
        { name: "홍길동", gender: "남자" }
    ];
    res.render("test", {
        per: person
    });
})

app.get("/test", (req,res)=>{
    res.render("test1");
})

app.listen(port, ()=>{
    console.log("server open: ", port);
})