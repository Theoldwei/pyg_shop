function animate(obj, target, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            // 回调函数写到定时器结束里面
            if (callback) {//先判断是否有参数
                callback()//调用函数
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 20);
}
// 使用动画函数的前提，该元素必须有定位
// 注意是ul移动而不是小li滚动
// 图片的核心算法：点击某个小圆圈，就让图片滚动小圆圈的索引号乘以图片的宽度做为ul移动距离