import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/pages/Layout/Layout.vue'; //

import Login from '@/pages/Login/Login.vue'; //登录
import Home from '@/pages/Home/index.vue'; //首页

//司机管理 DriverManagement
import DriverList from '@/pages/DriverManagement/DriverList.vue'; //司机列表
import DriverInfo from '@/pages/DriverManagement/DriverInfo.vue'; //基本信息
import DriverFile from '@/pages/DriverManagement/DriverFile.vue'; //驾驶员档案
import SafetyLearing from '@/pages/DriverManagement/SafetyLearing.vue'; //配置安全学习

// 车辆管理 CarManagement
import CarList from '@/pages/CarManagement/CarList.vue'
import CarBaseInfo from '@/pages/CarManagement/CarBaseInfo.vue'; //车辆基本信息
import CarStatus from '@/pages/CarManagement/CarStatus.vue'; //车辆状态
import CarLifeInfo from '@/pages/CarManagement/CarLifeInfo.vue'; //车辆档案信息
import CarSafety from '@/pages/CarManagement/CarSafety.vue'; //车辆安全管理

// 借款审批 LoanApproval
import LoanContract from '@/pages/LoanApproval/LoanContract.vue'; //借款合同（线下签署）后台配置是否签署  
import ProofApproval from '@/pages/LoanApproval/ProofApproval.vue'; //凭证审批（按借款要素）
import Pass from '@/pages/LoanApproval/Pass.vue'; //通过-上级审批
import NoPass from '@/pages/LoanApproval/NoPass.vue'; //不通过-反馈c端
import InterestCalculated from '@/pages/LoanApproval/InterestCalculated.vue'; //利息计算及统计（配置计算公式）
import PaymentCollection from '@/pages/LoanApproval/PaymentCollection.vue'; //还款催收（设置逾期，无法借款/完成年检）
import ManualPayments from '@/pages/LoanApproval/ManualPayments.vue'; //手动核销还款（需要授权审批）线下还款，后台核销）

// 待办事项消息管理 Schedule
import IllegalRemind from '@/pages/Schedule/IllegalRemind.vue'; //违章提醒
import PendingRemind from '@/pages/Schedule/PendingRemind.vue'; //待审批提醒（同步APP）
import RenewalRemind from '@/pages/Schedule/RenewalRemind.vue'; //续保提醒
import ASRemind from '@/pages/Schedule/ASRemind.vue'; //年检提醒
import RefundRemind from '@/pages/Schedule/RefundRemind.vue'; //还款提醒
import MaiTainRemind from '@/pages/Schedule/MaiTainRemind.vue'; //保养提醒

// 权限管理 Permissions
import Registered from '@/pages/Permissions/Registered.vue'; //注册
import ChildAccount from '@/pages/Permissions/ChildAccount.vue'; //子账号生成
import SettingPermissions from '@/pages/Permissions/SettingPermissions.vue'; //设置审批权限

// 数据报表 DataReport
import Statistical from '@/pages/DataReport/Statistical.vue'; //系统内B端对应管理C端信息数据的采集/统计/分析（统计的维度）
import FinancialStatements from '@/pages/DataReport/FinancialStatements.vue'; //财务报表
import PersonnelReport from '@/pages/DataReport/PersonnelReport.vue'; //人员增减报表（月）
import TeamReport from '@/pages/DataReport/TeamReport.vue'; //车队对应相关报表（需要的维度）

import Error404 from '@/pages/error404.vue'; //页面404


Vue.use(VueRouter);
/**
 * 配置页面路由
 */

const newRouter = new VueRouter({
    mode: 'history', // //分为 hash 和 history
    scrollBehavior: () => ({
        y: 0
    }), //跳转页面的时候，让页面滚动到顶部
    routes: [{
            path: '/login',
            component: Login,
            name: 'Login',
            hidden: true,
            meta: {
                title: '登录'
            }, //路由元信息
        }, {
            path: '/404',
            component: Error404,
            name: 'Error404',
            hidden: true,
            meta: {
                title: '404'
            }, //路由元信息
        }, {
            path: '/home',
            redirect: '/home',
            component: Layout,
            meta: {
                title: '首页'
            },
            children: [{
                path: '/home',
                component: Home,
                name: 'Home',
                meta: {
                    title: '首页',
                    icon: 'home'
                },
            }, ]
        }, {
            path: '/',
            component: Layout,
            meta: {
                title: '司机管理',
                icon: 'product'
            },
            redirect: "/drive/list",
            children: [{
                    path: '/drive/list',
                    component: DriverList,
                    name: 'DriverList',
                    meta: {
                        title: '司机列表',
                        icon: 'home'
                    },
                },
                {
                    path: '/drive/info',
                    component: DriverInfo,
                    name: 'DriverInfo ',
                    meta: {
                        title: '基本信息',
                        icon: 'home'
                    },
                },
                {
                    path: '/drive/file',
                    component: DriverFile,
                    name: 'DriverFile ',
                    meta: {
                        title: '驾驶员档案',
                        icon: 'home'
                    },
                },
                {
                    path: '/drive/safetylearing',
                    component: SafetyLearing,
                    name: 'SafetyLearing ',
                    meta: {
                        title: '配置安全学习',
                        icon: 'home'
                    },
                },
            ]
        }, {
            path: '/car',
            component: Layout,
            meta: {
                title: '车辆管理',
                icon: 'product'
            },
            redirect: "/car/baseinfo",
            children: [{
                path: '/car/list',
                component: CarList,
                name: 'CarList',
                meta: {
                    title: '车辆列表',
                    icon: 'product-list'
                },
            }, {
                path: '/car/baseinfo',
                component: CarBaseInfo,
                name: 'CarBaseInfo',
                meta: {
                    title: '车辆基本信息',
                    icon: 'product-list'
                },
            }, {
                path: '/car/status',
                component: CarStatus,
                name: 'CarStatus ',
                meta: {
                    title: '车辆状态',
                    icon: 'product-recycle'
                },
            }, {
                path: '/car/listinfo',
                component: CarLifeInfo,
                name: 'CarLifeInfo ',
                meta: {
                    title: '车辆档案信息',
                    icon: 'product-brand'
                },
            }, {
                path: '/car/safety',
                component: CarSafety,
                name: 'CarSafety',
                meta: {
                    title: '车辆安全管理',
                    icon: 'product-recycle'
                },
            }, ]
        }, {
            path: '/loan_approval',
            component: Layout,
            meta: {
                title: '借款审批',
                icon: 'product'
            },
            redirect: '/loan_approval/loan_contract',
            children: [{
                path: '/loan_approval/loan_contract',
                component: LoanContract,
                name: 'LoanContract ',
                meta: {
                    title: '借款合同',
                    icon: 'product-list'
                },
            }, {
                path: '/loan_approval/proof_approval',
                component: ProofApproval,
                name: 'ProofApproval  ',
                meta: {
                    title: '凭证审批',
                    icon: 'product-recycle'
                },
            }, {
                path: '/loan_approval/pass',
                component: Pass,
                name: 'Pass ',
                meta: {
                    title: '通过-上级审批',
                    icon: 'product-brand'
                },
            }, {
                path: '/loan_approval/nopass',
                component: NoPass,
                name: 'NoPass',
                meta: {
                    title: '不通过-反馈c端',
                    icon: 'product-recycle'
                },
            }, {
                path: '/loan_approval/calculated',
                component: InterestCalculated,
                name: 'InterestCalculated ',
                meta: {
                    title: '利息计算及统计',
                    icon: 'product-recycle'
                },
            }, {
                path: '/loan_approval/payment',
                component: PaymentCollection,
                name: 'PaymentCollection ',
                meta: {
                    title: '还款催收',
                    icon: 'product-recycle'
                },
            }, {
                path: '/loan_approval/manual',
                component: ManualPayments,
                name: 'ManualPayments ',
                meta: {
                    title: '手动核销还款',
                    icon: 'product-recycle'
                },
            }, ]
        }, {
            path: '/Schedule',
            component: Layout,
            meta: {
                title: '代办事项消息管理',
                icon: 'product-list'
            },
            redirect: "/schedule/illegal",
            children: [{
                    path: '/schedule/illegal',
                    component: IllegalRemind,
                    name: 'IllegalRemind',
                    meta: {
                        title: '违章提醒',
                        icon: 'product-recycle'
                    },
                }, {
                    path: '/schedule/pending',
                    component: PendingRemind,
                    name: 'PendingRemind ',
                    meta: {
                        title: '待审批提醒',
                        icon: 'product-recycle'
                    },
                }, {
                    path: '/schedule/renawal',
                    component: RenewalRemind,
                    name: 'RenewalRemind ',
                    meta: {
                        title: '续保提醒',
                        icon: 'order-setting'
                    },
                },
                {
                    path: '/schedule/as',
                    component: ASRemind,
                    name: 'ASRemind',
                    meta: {
                        title: '年检提醒',
                        icon: 'product-recycle'
                    },
                }, {
                    path: '/schedule/refund',
                    component: RefundRemind,
                    name: 'RefundRemind ',
                    meta: {
                        title: '还款提醒',
                        icon: 'product-recycle'
                    },
                }, {
                    path: '/schedule/maitain',
                    component: MaiTainRemind,
                    name: 'MaiTainRemind ',
                    meta: {
                        title: '保养提醒',
                        icon: 'order-setting'
                    },
                },
            ]
        }, {
            path: '/permissions',
            component: Layout,
            name: 'user',
            meta: {
                title: '权限管理',
                icon: 'product-recycle'
            },
            redirect: '/permissions/registered',
            children: [{
                path: '/permissions/registered',
                component: Registered,
                name: 'Registered',
                meta: {
                    title: '注册',
                    icon: 'product-recycle'
                },
            }, {
                path: '/permissions/child_accound',
                component: ChildAccount,
                name: 'ChildAccount',
                meta: {
                    title: '子账号生成',
                    icon: 'product-recycle'
                },
            }, {
                path: '/permissions/setting_permissions',
                component: SettingPermissions,
                name: 'SettingPermissions ',
                meta: {
                    title: '设置审批权限',
                    icon: 'product-recycle'
                },
            }, ]
        }, {
            path: '/report',
            component: Layout,
            name: 'activity',
            meta: {
                title: '数据报表',
                icon: 'sms'
            },
            redirect: '/report/statistical',
            children: [{
                path: '/report/statistical',
                component: Statistical,
                name: 'Statistical ',
                meta: {
                    title: '系统内B端管理C端',
                    icon: 'sms-hot'
                },

            }, {
                path: '/report/financial',
                component: FinancialStatements,
                name: 'FinancialStatements ',
                meta: {
                    title: '财务报表',
                    icon: 'sms-new'
                },
            }, {
                path: '/report/personnel',
                component: PersonnelReport,
                name: 'PersonnelReport ',
                meta: {
                    title: '人员增减报表',
                    icon: 'sms-ad'
                },
            }, {
                path: '/report/team',
                component: TeamReport,
                name: 'TeamReport ',
                meta: {
                    title: '车队对应相关报表',
                    icon: 'sms-subject'
                },
            }, ]
        },
        {
            path: '*',
            component: Error404,
            name: 'Error404',
            hidden: true,
            meta: {
                title: '404'
            }, //路由元信息
        },
        //   {
        //     path: '*',
        //     redirect: '/404',
        //     hidden: true
        // },
        /**
         * <!-- 带查询参数，下面的结果为 /register?plan=private -->
        <router-link :to="{ path: 'register', query: { plan: 'private' }}"
          >Register</router-link
        >**/

    ]
});
/**
 * 重写路由的push方法
 */
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error)
// }
export default newRouter;