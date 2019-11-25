import request from '@/util/request.js';
// 登录
export function loginBtn(params) {
    return request({
        url: '/api/admin.passport/login',
        method: 'post',
        data: params,
    })
}
//退出
export function loginOut(params) {
    return request({
        url: '/api/admin.passport/logout',
        method: 'post',
        data: params
    })
}