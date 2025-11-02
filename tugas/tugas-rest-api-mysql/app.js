const express = require("express");
const app = express();
const port = 3000
const router = require("./src/routes/main")

app.use(express.json())
app.use("/api" , router)

app.listen(port, ()=>{
    console.log(`example app listening ${port}`)
})

