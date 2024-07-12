const express = require("express")
const router = express.Router()
const { login } = require("../controller/loginController.js")
const { register } = require("../controller/registerController.js")
const { homedata } = require("../controller/homedataController.js")
const { userInfo } = require("../controller/userInfoController.js")
const { getCursos } = require("../controller/getCursosController.js")
const { getClases } = require("../controller/getClasesController.js")

router.post("/login", login)

router.post("/register", register)

router.post("/homedata", homedata)

router.post("/userInfo", userInfo)

router.get("/cursos", getCursos)

router.get("/clases", getClases)

module.exports = router;