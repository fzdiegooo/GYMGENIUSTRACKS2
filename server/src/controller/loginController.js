const connection = require("../models/db");
const jwt = require("jsonwebtoken")

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  const consult = "select * from Usuarios where email = ? AND password = ?";

  console.log(req.body);

  try {
    connection.query(consult, [email, password], (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        const token = jwt.sign({email}, "Stack", {expiresIn: "1h"})
        console.log(result);
        res.send({token, email});
      } else {
        console.log("Wrong user");
        res.send({ message: "Wrong user" });
      }
    });
  } catch (e) {
    
  } 
};
