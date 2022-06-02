const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
const getJson = require("./module/getJson")
const PORT = 8085
app.use("*", cors())

app.use(express.static(path.join(__dirname, "/static")))

app.post("/getBanner", async (req, res) => {
    console.log(1)
    res.status(200)
    await getJson(path.join(__dirname, "./json/banner.json"))
        .then(data => {
            res.send(data)
        })
        .catch(() => {
            res.send([])
        })
})

app.post("/getHot", async (req, res) => {
    console.log(2)
    res.status(200)
    await getJson(path.join(__dirname, "./json/hot.json"))
        .then(data => {
            res.send(data)
        })
        .catch(() => {
            res.send([])
        })
})


app.listen(PORT, () => console.log(`Server is running.`)) 
