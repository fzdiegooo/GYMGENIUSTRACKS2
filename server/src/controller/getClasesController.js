const connection = require("../models/db");

module.exports.getClases = (req, res) => {
  const cursoId = req.query.cursoId;
  const consult =
    "select cl.nombre_clase, cl.descripcion_clase, cl.url_video from cursos c inner join curso_clase cc on c.id_curso = cc.id_curso inner join clases cl on cc.id_clase = cl.id_clase where c.id_curso = ?;";
  try {
    connection.query(consult, [cursoId], (err, result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    });
  } catch (e) {
    console.log(e)
  }
};
