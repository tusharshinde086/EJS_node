const express = require("express");
const app = express();
const port = 8080;

app.set("view engin ", "ejs ");
app.get("/", (req , res )=> {
    // res.send("this is root ");

    res.render("home.ejs");
})
app.get("/hello ", (req , res )=> {
    res.send("hello  ! ");

})

app.listen(port,() => {
    console.log(`listening on port ${port}`);
})