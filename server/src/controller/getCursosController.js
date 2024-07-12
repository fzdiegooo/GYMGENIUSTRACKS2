const connection = require("../models/db");

module.exports.getCursos = (req, res) => {
  const consult = "select * from cursos";
  try {
    connection.query(consult, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  } catch (error) {}
};
