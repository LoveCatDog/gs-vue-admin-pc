import axios from 'axios';
import {
    Message
} from 'element-ui';
import store from '@/store';
//自定义配置新建一个 axios 实例
const vaxios = axios.create({
    baseURL: "", //api的请求地址
    time: 15000, //请求超时时间
});
// 添加请求拦截器
vaxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (store.getters.token) {
        config.headers['x-token'] = getToken()
        config.headers['Content-Type'] = 'application/json'
    }
    console.log('store', store, config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
vaxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const res = response.data;
    if (res.code != 0) {
        Message({
            message: res.msg,
            type: 'error',
            duration: 2 * 1000
        })
        // 判断是否未登录
        if (res.code === 401) {
            // 跳转到登录页
            store.dispatch('FedLogOut').then(() => {
                this.$router.push("/login");
            })
        }
        return Promise.reject('error')
    } else {
        return response.data
    }

}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default vaxios;