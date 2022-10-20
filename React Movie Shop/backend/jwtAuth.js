const router = require("express").Router()

// registering

router.post("/register", async (req,res)=>{
    try {
        // 1. destructure the req.body (name, email, password)
        
        const {username, email, password} = req.body;

        // 2. check user exists (if user exists throw error)
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [
            email
        ]);

        res.json(user.rows)
        // 3. crypt the user password

        // 4. enter the new user inside our database

        // 5. generating our jwt token

    } catch (err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


module.exports = router;