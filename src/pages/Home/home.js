import { str2Date } from '@/components/utils/date'
import { read } from 'fs';

const DATA_FROM_BACKEND = {
  columns: ['date', 'orderCount', 'orderAmount'],
  rows: [
    { date: '2018-11-01', orderCount: 10, orderAmount: 1093 },
    { date: '2018-11-02', orderCount: 20, orderAmount: 2230 },
    { date: '2018-11-03', orderCount: 33, orderAmount: 3623 },
    { date: '2018-11-04', orderCount: 50, orderAmount: 6423 },
    { date: '2018-11-05', orderCount: 80, orderAmount: 8492 },
    { date: '2018-11-06', orderCount: 60, orderAmount: 6293 },
    { date: '2018-11-07', orderCount: 20, orderAmount: 2293 },
    { date: '2018-11-08', orderCount: 60, orderAmount: 6293 },
    { date: '2018-11-09', orderCount: 50, orderAmount: 5293 },
    { date: '2018-11-10', orderCount: 30, orderAmount: 3293 },
    { date: '2018-11-11', orderCount: 20, orderAmount: 2293 },
    { date: '2018-11-12', orderCount: 80, orderAmount: 8293 },
    { date: '2018-11-13', orderCount: 100, orderAmount: 10293 },
    { date: '2018-11-14', orderCount: 10, orderAmount: 1293 },
    { date: '2018-11-15', orderCount: 40, orderAmount: 4293 }
  ]
};

export default {
  name: 'home-main',
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            let start = new Date();
            start.setFullYear(2018);
            start.setMonth(10);
            start.setDate(1);
            end.setTime(start.getTime() + 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一月',
          onClick(picker) {
            const end = new Date();
            let start = new Date();
            start.setFullYear(2018);
            start.setMonth(10);
            start.setDate(1);
            end.setTime(start.getTime() + 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      orderCountDate: '',
      loading: false,
      chartData: {
        columns: [1, 2, 3, 4, 5, 6],
        rows: ['2001', '2002', '2003', '2004', '2005', '2006']
      },
      chartSettings: {
        xAxisType: 'time',
        area: true,
        axisSite: { right: ['orderAmount'] },
        labelMap: { 'orderCount': '订单数量', 'orderAmount': '订单金额' }
      },
      dataEmpty: false,
      msg: "首页",
      goodsList: [
        { name: "已下架", number: 100 },
        { name: "已上架", number: 100 },
        { name: "库存紧张", number: 100 },
        { name: "全部商品", number: 100 }
      ], //商品总览
      usersList: [
        { name: "今日新增", number: 100 },
        { name: "昨日新增", number: 100 },
        { name: "本月新增", number: 100 },
        { name: "会员总数", number: 100 }
      ], //用户总览
      OrderStatisticalList: [], //订单统计

      orderList: [
        { name: "今日订单总数", number: 200 },
        { name: "今日销售总额", number: 10000.0, isPrice: true },
        { name: "近七日销售总数", number: 50000.0, isPrice: true }
      ],
      orderStatusList: [
        { name: "待付款订单", number: "10" },
        { name: "已完成订单", number: "10" },
        { name: "待确定订单", number: "10" },
        { name: "待发货订单", number: "10" },
        { name: "新缺货登记", number: "10" },
        { name: "待处理退款申请", number: "10" },
        { name: "已发货订单", number: "10" },
        { name: "待处理退货订单", number: "10" },
        { name: "广告位即将到期", number: "10" }
      ]
    }
  },
  created() {
    this.initOrderCountDate()
    this.getData()
  },

  mounted: function () {
    this.getData();
  },
  methods: {
    handleDateChange() {
      this.getData()
    },
    initOrderCountDate() {
      let start = new Date()
      start.setFullYear(2018)
      start.setMonth(10)
      start.setDate(1)
      const end = new Date()
      end.setTime(start.getTime() + 1000 * 60 * 60 * 24 * 7);
      this.orderCountDate = [start, end];
      console.log(this.orderCountDate)
    },
    getData() {
      let _self = this
      setTimeout(() => {
        _self.chartData = {
          columns: ['date', 'orderCount', 'orderAmount'],
          rows: []
        }
        for (let i = 0; i < DATA_FROM_BACKEND.rows.length; i++) {
          let item = DATA_FROM_BACKEND.rows[i]
          let currDate = str2Date(item.date)
          let start = _self.orderCountDate[0]
          let end = _self.orderCountDate[1]
          if (currDate.getTime() >= start.getTime() && currDate.getTime() <= end.getTime()) {
            this.chartData.rows.push(item)
          }
        }
        _self.dataEmpty = false;
        _self.loading = false;
      }, 1000)
    }

  },
}
