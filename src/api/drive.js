import request from '@/util/request.js';

export function getFetchTest(params) {
    return request({
        url: 'http://jsonplaceholder.typicode.com/photos',
        method: 'post',
        data: params,
    })
}
//新增、编辑品牌
export function updateBrands(params) {
    return request({
        url: '/api/admin.brand/setBrand',
        method: 'post',
        data: params
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