/*
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-12 17:05:30
 * @FilePath: \one-shop\src\state\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'vuex'

export default createStore({
    state: {
        userinfo: {}
    },
    mutations: {
        setUserInfo(state, userinfo) {
            state.userinfo = userinfo
        }
    },
    actions: {

    }
})
