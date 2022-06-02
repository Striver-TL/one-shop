import axios from 'axios'
// 与后端端口号一致
// 本机访问
// 如需其它设备访问需要指定ip地址
const ip = "http://localhost:8085"

export const path = ip;

export const sendRequest = (option) => {
    return axios({
        url: `${ip}/${option.url}`,
        method: option.method ? option.method.toUpperCase() : 'POST',
        data: option.data,
        headers: {
            "Content-Type": option["Content-Type"] ? option["Content-Type"] : undefined
        }
    }).then(data => {
        return data.data
    })
}