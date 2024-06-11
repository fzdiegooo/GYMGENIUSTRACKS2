const connection = require("../models/db")

module.exports.userInfo = (req, res)=>{
    const { peso, fecha_nac, altura, nivel, objetivo, email } = req.body;
    const updateQuery = "update usuarios set peso = ?, fecha_nacimiento = ?, altura = ?, id_nivel = ?, id_objetivo = ? where email = ?"

    connection.query(updateQuery, [peso, fecha_nac, altura, nivel, objetivo, email], (err, result)=>{
        if(err){
            return res.status(500).json({message: "Error en la base de datos"})
        }
        return res.status(200).json({message: "Datos Obtenidos"})
    })
}