const connection = require("../models/db")

module.exports.homedata = (req, res)=>{
    const {email} = req.body
    const dataUserQuery = "select * from usuarios where email = ?"
    
    connection.query(dataUserQuery, [email], (err, result)=>{
        if(err){
            res.send(err)
        }
        if(result.length > 0){
            res.send(result[0])
        }else{
            console.log("error!");
        }
    })

}