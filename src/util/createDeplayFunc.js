/*
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 17:16:11
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-11 21:35:48
 * @FilePath: \one-shop\src\util\createDeplayFunc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * 创建队列执行函数（在一段时间内只有一个函数会被执行，该函数执行后才执行下一个未执行的函数）
 * @param { Boolean } isRandom 是否为随机执行（默认：否）
 * @author Striver-TL
 * @returns { Function } 用于指定执行某个函数，并规定执行的时间
 */
const deplayFunc = (isRandom) => (() => {
    // 待执行函数队列
    const stack = [];
    // 顺序执行函数
    const toEmit = isRandom ? () => {
        if (stack.length) stack[Math.floor(Math.random() * stack.length)]();
    } : () => {
        if (stack.length) stack[0]();
    }

    /**
     * 将一个函数添加入到队列中
     * @param { Function } callback 添加的函数
     * @param { Number } time 执行函数的毫秒数
     * @param { All } args 执行callback的参数
     */
    return (callback, time, ...args) => {
        if (Object.prototype.toString.call(callback) !== "[object Function]") throw new Error("callback is must be Function")
        const func = () => {
            const timer = setTimeout(() => {
                callback(...args);
                clearTimeout(timer);
                stack.splice(stack.indexOf(func), 1);
                toEmit();
            }, time);
        };
        stack.push(func);
        if (stack.length === 1) func();
    };
})();

export default deplayFunc