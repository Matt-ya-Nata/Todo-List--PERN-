const express = require("express")
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());

//When getting data from a cleint side we get it from the request.body object 
app.use(express.json());


app.listen(5000,() =>{
    console.log("Server running on port 5000")
})