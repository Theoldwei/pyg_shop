// 动画函数，垂直缓动
window.addEventListener('load', function () {
    var top = document.querySelector('.ce_2').querySelector('.d4')
    top.addEventListener('click', function () {
        animate(window, 0);
        onmousewheel = function () {
            clearInterval(timer)
        }
    })
    function animate(obj, target, callback) {
        clearInterval(obj.timer)
        obj.timer = setInterval(function () {
            var step = (target - window.pageYOffset) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            if (window.pageYOffset == target) {
                clearInterval(obj.timer)
                // 回调函数写到定时器结束里面  
                if (callback) {//先判断是否有参数
                    callback()//调用函数
                }
            }
            window.scroll(0, window.pageYOffset + step)
        }, 12);
    }
})
