const connection = require("../models/db");

module.exports.register = (req, res) => {
  const { name, lastname, email, password } = req.body;
  const insertUser = "insert into usuarios (nombre, apellido, email, password) values (?,?,?,?)";
  const checkEmail = "select * from usuarios where email = ? ";

  connection.query(checkEmail, [email], (err, result)=>{
    if(err){
      return res.status(500).json({ error: "Error en la base de datos" });
    }
    if(result.length > 0){
      return res.status(400).json({ error: "Email ya registrado!!" });
    }

    connection.query(insertUser, [name, lastname, email, password], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error en la base de datos"});
      }
      res.status(201).json({ message: "Usuario Registrado!!"})
    });
  })
  
};
