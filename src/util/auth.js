/**
 *   autor: andy
 *   desc: token cookie 操作封装
 */

import Cookies from 'js-cookie'

const TokenKey = 'x-token'

//获取token
export function getToken() {
    return Cookies.get(TokenKey)
}

//更新token
export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

//删除token
export function removeToken() {
    return Cookies.remove(TokenKey)
}