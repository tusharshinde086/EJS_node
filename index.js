const express = require("express");
const app = express();
const path =require("path");
const port = 8080;


app.set("view engin ", "ejs ");
app.set("views",path.join(__dirname , "/views"));

// app.get("/", (req , res )=> {
//     // res.send("this is root ");

//     res.render("home.ejs");
// });

app.get("/hello ", (req , res )=> {
    res.send("hello  ! ");

});
app.get("/ ", (req , res )=> {
     
    res.render("rolldice.ejs");

});
app.listen(port,() => {
    console.log(`listening on port ${port}`);
});
