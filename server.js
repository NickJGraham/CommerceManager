//Imports
const express = require("express");
const app = express();

const mongoose = require("mongoose");

//config
mongoose.connect("mongodb://localhost/ProductManager", {
    useNewUrlParser: true,
});
require("./server/config/mongoose.js");

// Setting
app.use(express.static(__dirname + "/public/dist/public"));


app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//Database


//routes
require("./server/config/routes.js")(app);

//Port
app.listen(8000);