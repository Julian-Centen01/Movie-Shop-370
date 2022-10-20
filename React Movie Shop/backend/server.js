const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// Routes//
app.get('/' ,(req,res) =>{
    res.send('Api is running')
});

// register and login routes
app.use("/auth", require("./jwtAuth"));
// Create an account
app.post("/CreateAccount",async(req, res) => {
    try {

    } catch (err){

    }
});
// Sign in

// Forgot PW

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
