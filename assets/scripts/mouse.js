const throttled = function(delay, fn) {
    let lastCall = 0;
    return function (...args) {
      const now = (new Date).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
}

const setMousePos = function(e){
    let cursorX = e.clientX,
        cursorY = e.clientY;
    document.documentElement.style.setProperty('--cursorX', cursorX + 'px');
    document.documentElement.style.setProperty('--cursorY', cursorY + 'px');
};
const throttledSetMousePos = throttled(10, setMousePos);
document.addEventListener('mousemove', throttledSetMousePos);