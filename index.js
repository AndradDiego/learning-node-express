const express = require("express")
const app = express()
const {route} = require("./src/routes")

app.use(express.json())
app.use("/",route)

app.listen(3333,()=>{
    console.log("servidor on la porta:3333")
})
