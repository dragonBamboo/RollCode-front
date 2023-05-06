import Cookies from 'js-cookie'

const TokenKey = 'token'

// 获取token
export function getToken(){
    return Cookies.get(TokenKey)
}

// 设置token
export function setToken(token: any){
    return Cookies.set(TokenKey,token)
}

// 删除token
export function removeToken(){
    localStorage.clear()
    return Cookies.remove(TokenKey)
}