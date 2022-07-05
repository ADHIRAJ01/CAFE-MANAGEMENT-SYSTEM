const express= require('express');
const connection = require("../connection");
const router = express.Router();

router.post('/signup', (req, res)=> {
    let user = req.body;
    query = "select email,password,role,status from user where email=?";
    //wriiten query but need to provide email for the query
    // from connection running query  , parameters = query , [user.email]-passing email as input ; check if error occured or result displayed
    connection.query(query, [user.email], (err, result)=>{
        if(!err){
            console.log("result = ",result);
            if(result.length<=0){               // if length = 0 , means no record found then
                query = 'insert into user(name , contactNumber , email , password , status , role) values ( ?,?,?,?, "false"';                // insert data into our database
                connection.query(query , [user.name , user.contactNumber , user.email , user.password], (err, result)=>{
                    if(!err){
                        return res.status(200),json({message:"successfully registered"});
                    }
                    else{
                        return res.status(500).json(err);
                    }
                })
            }
            else{
                return res.status(400).json({message: "email already exists"});         // if record found then say user exists.
            }

        }
        else {
            console.log("query error occured");
            return res.status(500).json(err);
        }

    });
});

module.exports = router;