/*
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-12 01:32:59
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-12 08:50:09
 * @FilePath: \one-shop\server\module\sendValidCode.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Core = require('@alicloud/pop-core');

var client = new Core({
    accessKeyId: 'LTAI5tKccFKtmdvFUX1h8gkf',
    accessKeySecret: 'CK83mZz0M9W3iJFpPxn92YT1zNEIsF',
    // securityToken: '<your-sts-token>', // use STS Token
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
});

var params = {
    "SignName": "阿里云短信测试",
    "TemplateCode": "SMS_154950909",
    "PhoneNumbers": "18063240519",
    "TemplateParam": "{\"code\":\"1234\"}"
}

var requestOption = {
    method: 'POST',
    formatParams: false,

};

module.exports = () => {
    return client.request('SendSms', params, requestOption).then((result) => {
        return result
    }, (ex) => {
        console.log(ex);
    })
}
