const express = require("express");
const app = express();
const path =require("path");
const port = 8080;


app.set("view engin ", "ejs ");
app.set("views",pathjoin(__dirname , "/views"));

app.get("/", (req , res )=> {
    // res.send("this is root ");

    res.render("home.ejs");
});
app.get("/hello ", (req , res )=> {
    res.send("hello  ! ");

});

app.listen(port,() => {
    console.log(`listening on port ${port}`);
});