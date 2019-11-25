import request from '@/util/request.js';
// ceshi
export function getPomiseTest(params) {
    return request({
        url: '/users',
        method: 'post',
        data: params,
    })
}

//查看品牌列表
export function getBrandsList(params) {
    return request({
        url: '/api/hub.brand/getList',
        method: 'post',
        data: params
    })
}