var oUser = document.getElementsByClassName('user-name')[0],
    oKey = document.getElementsByClassName('key')[0],
    oBtn = document.getElementsByClassName('btn-login')[0],
    oError =document.getElementsByClassName('error')[0],
    oUl = document.getElementsByTagName('ul')[0],
    regUser = /^[1]\d{10}$/g,
    regKey = /^[A-Z]\w{5,}/g
oBtn.addEventListener('click',function () {
    var username = oUser.value,
        password = oKey.value
    if (regUser.test(username) && regKey.test(password)) {
        oBtn.innerText = '登入中...'
    } else {
        oError.classList.remove('hide')
    }
})
oUl.addEventListener('click',function () {
    oBtn.innerText = '登入'
    oError.classList.add('hide')
})