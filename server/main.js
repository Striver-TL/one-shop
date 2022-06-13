/*
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-13 10:20:08
 * @FilePath: \one-shop\server\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
const getJson = require("./module/getJson")
const sendValidCode = require("./module/sendValidCode")
const UserManager = require("./module/UserManager")
const session = require("express-session")
const userManager = new UserManager()
const PORT = 8085
app.use("*", cors({
    credentials: true,
    origin: true
}))
const idendityKey = "loginMessage";
app.use(session({
    name: idendityKey,
    secret: 'secret', // 对session id 相关的cookie 进行签名
    resave: true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 设置 session 的有效时间，单位毫秒
        sameSite: "lax"
    },
}))

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


app.post("/getCategory", async (req, res) => {
    res.status(200)
    await getJson(path.join(__dirname, "./json/category.json"))
        .then(data => {
            if (req.query.type === "list") {
                res.send(data.list)
            } else {
                if (req.query.index) {
                    res.send(JSON.stringify(data.content[req.query.index]))
                }
            }
        })
        .catch(() => res.send(null))
})

app.post("/getNews", async (req, res) => {
    res.status(200)
    await getJson(path.join(__dirname, "./json/news.json"))
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(() => res.send(null))
})

app.post("/toRegister", async (req, res) => {
    res.status(200)
    const { phone, password } = req.query
    let registerResult = null
    await userManager.addUser(phone, password).then(data => {
        registerResult = data
    })
    if (registerResult === true) {
        res.send({
            success: true,
            message: "注册成功！"
        })
    } else {
        res.send({
            err: registerResult,
            message: "注册失败！"
        })
    }
})

app.post("/toLogin", async (req, res) => {
    res.status(200)
    const { cookieLogin } = req.query;
    if (cookieLogin == "1") {
        if (req.session.user) {
            res.send({
                err: false,
                data: {
                    phone: req.session.user.phone
                }
            })
        } else {
            res.send({
                err: true
            })
        }
        return;
    }
    const { word, password, autoLogin } = req.query
    const loginResult = userManager.validUser(word, password)

    if (loginResult) {
        if (autoLogin == "1") {
            req.session.user = loginResult
        } else {
            res.clearCookie(idendityKey)
        }
        res.send({
            err: false,
            data: {
                phone: loginResult.phone
            }
        })

    } else {
        res.send({
            err: true,
            message: "用户名或密码错误"
        })
    }
})

// sendValidCode()

app.listen(PORT, () => console.log(`Server is running.`)) 
