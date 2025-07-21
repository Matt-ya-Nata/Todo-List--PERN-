const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());

//When getting data from a cleint side we get it from the request.body object 
app.use(express.json());


//Routes 

//Create a todo
app.post("/todos",async (req,res)=>{

    try {

        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo(description) VALUES($1)",
            [description]
        
        );

        res.json(newTodo.rows[0])
        
    } catch (err) {
        console.error(err.message);
        
    }

});
//Get all todos

//Get a todo

//Update a todo

//Delete a todo



app.listen(5000,() =>{ 
    console.log("Server running on port 5000")
})