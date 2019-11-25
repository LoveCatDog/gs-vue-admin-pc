import {
    loginBtn,
    loginOut

} from '@/api/login'
import {
    getToken,
    setToken,
    removeToken
} from '@/util/auth'
const user = {
    state: {
        token: '',
        name: '',
        avater: '',
        roles: []
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATER: (state, avater) => {
            state.avater = avater
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },
    actions: {
        //登录
        Login({
            commit
        }, userInfo) {
            return new Promise((resolve, reject) => {

                loginBtn(userInfo).then(response => {
                    const data = response.data
                    const tokenStr = data.token;
                    setToken(tokenStr)
                    commit('SET_TOKEN', tokenStr);
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        //获取用户信息
        GetInfo({
            commit,
            state
        }) {

        },
        //退出
        LogOut({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                loginOut({}).then(() => {
                    commit('SET_TOKEN', '')
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        FedLogOut({
            commit
        }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }
    }
}
export default user