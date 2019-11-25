<template>
  <div class="home-main">
    <ul class="order-wrap flex">
      <li v-for="item in orderList" :key="item.name" class="order-item">
        <p class="name">{{item.name}}</p>
        <p class="number">
          <span v-if="item.isPrice">￥</span>
          {{item.number}}
        </p>
      </li>
    </ul>
    <div class="order-status wrap">
      <p class="status-header">待处理事务</p>
      <ul class="status-wrap">
        <li v-for="item in orderStatusList" :key="item.name" class="status-item">
          <span>{{item.name}}</span>
          <span class="right">({{item.number}})</span>
        </li>
      </ul>
    </div>
    <div class="goods-wrap wrap">
      <div class="two-wrap">
        <div class="good-item one-item">
          <p class="status-header">商品总览</p>
          <ul class="one-wrap flex">
            <li v-for="item in goodsList" :key="item.name" class="good-item">
              <p class="up">{{item.number}}</p>
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="user-item one-item">
          <p class="status-header">用户总览</p>
          <ul class="one-wrap flex">
            <li v-for="item in usersList" :key="item.name" class="good-item">
              <p class="up">{{item.number}}</p>
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="order-item">
        <div class="statistics-layout">
          <div class="status-header">订单统计</div>
          <el-row>
            <el-col :span="4">
              <div style="padding: 20px">
                <div>
                  <div style="color: #909399;font-size: 14px">本月订单总数</div>
                  <div style="color: #606266;font-size: 24px;padding: 10px 0">10000</div>
                  <div>
                    <span class="color-success" style="font-size: 14px">+10%</span>
                    <span style="color: #C0C4CC;font-size: 14px">同比上月</span>
                  </div>
                </div>
                <div style="margin-top: 20px;">
                  <div style="color: #909399;font-size: 14px">本周订单总数</div>
                  <div style="color: #606266;font-size: 24px;padding: 10px 0">1000</div>
                  <div>
                    <span class="color-danger" style="font-size: 14px">-10%</span>
                    <span style="color: #C0C4CC;font-size: 14px">同比上周</span>
                  </div>
                </div>
                <div style="margin-top: 20px;">
                  <div style="color: #909399;font-size: 14px">本月销售总额</div>
                  <div style="color: #606266;font-size: 24px;padding: 10px 0">100000</div>
                  <div>
                    <span class="color-success" style="font-size: 14px">+10%</span>
                    <span style="color: #C0C4CC;font-size: 14px">同比上月</span>
                  </div>
                </div>
                <div style="margin-top: 20px;">
                  <div style="color: #909399;font-size: 14px">本周销售总额</div>
                  <div style="color: #606266;font-size: 24px;padding: 10px 0">50000</div>
                  <div>
                    <span class="color-danger" style="font-size: 14px">-10%</span>
                    <span style="color: #C0C4CC;font-size: 14px">同比上周</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="20">
              <div style="padding: 10px;border-left:1px solid #DCDFE6">
                <el-date-picker
                  style="float: right;z-index: 1"
                  size="small"
                  v-model="orderCountDate"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  @change="handleDateChange"
                  :picker-options="pickerOptions"
                ></el-date-picker>
                <div>
                  <ve-line
                    :data="chartData"
                    :legend-visible="false"
                    :loading="loading"
                    :data-empty="dataEmpty"
                    :settings="chartSettings"
                  ></ve-line>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- <p class="status-header">订单统计</p>
        <div id="myChart" :style="{width: '600px', height: '400px'}"></div>-->
      </div>
    </div>
  </div>
</template>
<script>
// 引入基本模板
import home from "./home.js";
export default {
  ...home
};
</script>
<style lang="scss" scoped>
.home-main {
  .goods-wrap {
    .two-wrap {
      margin: 0 -10px 0 0;
      .one-item {
        width: calc((100% - 20px) / 2);
        display: inline-block;
        margin: 0 10px 0 0;
        border: 1px solid #9999992e;
        box-sizing: border-box;
        .one-wrap {
          padding: 25px;
          .up {
            color: #ff000096;
            margin-bottom: 8px;
            font-size: 14px;
          }
          .good-item {
            font-size: 12px;
          }
        }
      }
      .good-item {
      }
    }
  }
  .wrap {
    background: #fff;
    margin-top: 15px;
    border: 1px solid #9999992e;
    .status-header {
      line-height: 30px;
      text-align: left;
      padding: 5px 15px;
      background-color: aliceblue;
      color: #666;
      font-size: 14px;
    }
  }
  .order-wrap {
    justify-content: space-around;
    border: 1px solid #9999992e;
    padding: 25px;
    background: #fff;

    .order-item {
      flex: 1 1;
      border-right: 1px solid #9999992e;
      color: #999;
      font-size: 12px;
      &:last-child {
        border-right: transparent;
      }
      .name {
        padding-bottom: 10px;
      }
      .number {
        color: #333;
        font-size: 25px;
        span {
          font-size: 14px;
        }
      }
    }
  }
  .order-status {
    .status-wrap {
      padding: 15px;
    }

    .status-wrap {
      .status-item {
        position: relative;
        width: calc((100% - 130px) / 3);
        display: inline-block;
        /* vertical-align: top; */
        padding: 10px 15px;
        border-bottom: 1px solid #e6e9ef;
        font-size: 12px;
        border-radius: 4px;
        text-align: left;
        margin: 10px 10px 0 0;
        cursor: pointer;
        .right {
          float: right;
          color: red;
        }
      }
    }
  }
}
</style>