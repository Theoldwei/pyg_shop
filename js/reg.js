window.onload = function () {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; //手机号的正则表达式
    var regname = /^[\u4e00-\u9fa5]{2,8}$/; //汉字的正则表达式
    var regmess = /^\d{6}$/; //验证码
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/ //密码
    var tel = document.querySelector('#tel');
    var name = document.querySelector('#name');
    var mess = document.querySelector('#mess');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel, regtel)
    regexp(name, regname)
    regexp(mess, regmess)
    regexp(pwd, regpwd)
    // 表单验证的函数
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (ele.value != "") {
                if (reg.test(this.value)) {
                    this.nextElementSibling.className = 'success';
                    this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 正确';
                } else {
                    this.nextElementSibling.className = 'error';
                    this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入';
                }
            }
        }
    }
    surepwd.onblur = function () {
        if (this.value != "") {
            if (this.value == pwd.value) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 密码不一致，请从新输入';
            }
        }
    }
}