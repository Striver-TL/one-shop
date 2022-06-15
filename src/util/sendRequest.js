/*
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-14 17:36:51
 * @FilePath: \one-shop\src\util\sendRequest.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
// 与后端端口号一致
// 本机访问
// 如需其它设备访问需要指定ip地址
const ip = "http://127.0.0.1:8085"

// const ip = "http://192.168.1.101:8085"
export const path = ip;

export const sendRequest = (option) => {
    return axios({
        url: `${ip}/${option.url}`,
        method: option.method ? option.method.toUpperCase() : 'POST',
        data: option.data,
        withCredentials: 'include',
        headers: {
            // cookie: option.cookie ? option.cookie : undefined,
            "Content-Type": option["Content-Type"] ? option["Content-Type"] : undefined
        }
    }).then(data => {
        return data.data
    })
}