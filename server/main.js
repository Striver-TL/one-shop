const express = require("express")
const app = express()
const path = require("path")
const PORT = 8085

app.use(express.static(path.join(__dirname, "/static")))

app.listen(PORT, () => console.log(`Server is running.`)) 
