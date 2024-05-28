const connection = require("../models/db");
const jwt = require("jsonwebtoken")

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  const consult = "select * from Usuarios where username = ? AND password = ?";

  try {
    connection.query(consult, [email, password], (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        const token = jwt.sign({email}, "Stack", {expiresIn: "3m"})
        console.log(result);
        res.send({token});
      } else {
        console.log("Wrong user");
        res.send({ message: "Wrong user" });
      }
    });
  } catch (e) {
    
  }
};
