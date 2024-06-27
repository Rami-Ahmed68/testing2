const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path : "./config/.env" });
const cors = require("cors");


// connect to data base
// mongoose.connect(process.env.URL)
// .then(() => {
//     console.log("###### Conected ######")
// })
// .catch((error) => {
//     console.log(error)
// });

app.get("/test" , (req , res) => {
    res.send("test1")
});

app.get("/:id" , (req , res) => {
    res.send(req.params.id);
})

app.listen(3000 , () => {
    console.log(`Serve Listen on port 3000`);
});
