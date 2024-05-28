const express = require("express")
const router = express.Router()
const path = require("path")
const {login} = require("../controller/loginController.js")

router.get("/home", (req, res)=>{
    res.sendFile(path.join(__dirname, '../../../frontend/public/home.html'));
})

router.post("/login", login)

module.exports = router;