require("dotenv").config(); //ดึงเอา packket .env

const express = require("express")
const app = express();
const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("Test Cloud")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})