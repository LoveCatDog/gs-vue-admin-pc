import Vue from 'vue' //引入vue
import Vuex from 'vuex' //引入vuex
import * as Cookies from 'js-cookie'

import createPersistedState from 'vuex-persistedstate'
import user from './user'
import {
    stat
} from 'fs';
//使用vuex
Vue.use(Vuex);
// 创建vuex实例
const store = new Vuex.Store({
    modules: {
        user
    },
    //把VUEX中的所有数据存到localStorage中
    plugins: [createPersistedState({
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, {
            expires: 3,
            secure: true
        }),
        removeItem: key => Cookies.remove(key)
    })],
    state: {
        count: 0,
        sidebarStatu: true,
    },
    mutations: {
        increment(state) {
            state.count++
        },
        handleSidebar(state) {
            state.sidebarStatu = !state.sidebarStatu;
        }
    },
}); //导出store


// 将其挂载到 vuex的Store下
export default store