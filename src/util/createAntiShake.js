// 防抖函数

const createAntiShake = (callback, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
    }, delay);
    callback(...args);
  };
};

export default createAntiShake;
