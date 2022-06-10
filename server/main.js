const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
const getJson = require("./module/getJson")
const PORT = 8085
app.use("*", cors())

app.use(express.static(path.join(__dirname, "/static")))

app.post("/getBanner", async (req, res) => {
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
    res.status(200)
    await getJson(path.join(__dirname, "./json/hot.json"))
        .then(data => {
            res.send(data)
        })
        .catch(() => {
            res.send([])
        })
})

app.post("/getFloor", async (req, res) => {
    res.status(200)
    await new Promise((resolve, reject) => {
        req.on("data", (data) => {
            data = data.toString()
            try {
                data = JSON.parse(data).id
                resolve(data)
            } catch (e) {
                reject()
            }
        })
    }).then((id) => getJson(path.join(__dirname, "./json/floor.json"))
        .then(data => data.filter(e => e.id === id)[0]
        ))
        .then(data => {
            res.send(data)
        })
        .catch(() => res.send(null))
})


app.listen(PORT, () => console.log(`Server is running.`)) 
