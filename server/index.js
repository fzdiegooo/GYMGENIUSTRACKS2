const express = require("express")
const app = express()
const port = 3000
const path = require("path")
const routes = require("./src/api/endpoints") //sale error pero si funciona xd(todo con miniscula si funciona xd)
const cors = require("cors")

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"]
}))

app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use("/api", routes)

app.use("/", (req, res)=>{
    res.sendFile(path.join(__dirname, '../frontend/index.html'))
})

app.listen(port, ()=>{
    console.log(`Corriendo en el puerto ${port}`);
})

