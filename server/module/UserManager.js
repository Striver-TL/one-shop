/*
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-12 11:54:46
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-12 17:19:33
 * @FilePath: \one-shop\server\module\UserManager.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const getJson = require("./getJson.js")
const path = require("path")
const crypto = require("crypto")
const fs = require("fs")

class UserManager {
    constructor() {
        this.users = []
        getJson(path.join(__dirname, "../json/userinfo.json"))
            .then(data => {
                this.users.push(...data)
            })
            .catch(() => {
                this.users = []
            })
    }

    validator(phone, password) {
        if (phone === "") {
            return {
                type: "phone",
                message: "手机号不能为空"
            }
        } else if (!/^[1][3,4,5,6,7,8,9]\d{9}$/.test(phone)) {
            const result = {
                type: "phone",
                message: ""
            }
            if (phone.length !== 11) {
                result.message = "手机号长度应为11位"
            } else {
                result.message = "手机号格式不正确"
            }
            return result
        } else if (this.users.filter(e => e.phone === phone)[0]) return {
            type: "phone",
            message: "该手机号已经被注册"
        }
        else if (password === "") {
            return {
                type: "password",
                message: "密码不能为空"
            }
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!%@#$^*()\-=+[\]{}\\|:;"',.?/])[\w`~!%+@#$^*[\]()\-={}\\|:;"',.?/]{8,16}/g.test(password)) {
            const result = {
                type: "password",
                message: ""
            }
            if (password.length < 8 || password.length > 16) {
                result.message = "密码长度应在8-16位"
            } else if (!/\d+/g.test(password) || !/\w+/g.test(password) || !/\w\W+/g.test(password)) {
                result.message = "密码必须包含数字、字符、特殊符号"
            } else {
                result.message = "密码格式不正确"
            }
            return result;
        } else {
            return true
        }
    }

    async addUser(phone, password) {
        let validResult = this.validator(phone, password)
        if (validResult !== true) return validResult
        const userInfo = {
            phone,
            password: crypto.createHash("md5").update(password).digest("hex")
        }

        this.users.push(userInfo)
        await fs.writeFile(path.join(__dirname, "../json/userinfo.json"), JSON.stringify(this.users), err => {
            if (err) validResult = {
                type: "global",
                message: "注册失败"
            }
            else validResult = true
        })
        return validResult
    }

    validUser(word, password) {
        const userInfo = this.users.filter(e => e.phone === word || e.email === word || e.username === word)[0]
        if (!userInfo) return false
        return userInfo.password === crypto.createHash("md5").update(password).digest("hex") ? userInfo : false
    }
}

module.exports = UserManager
