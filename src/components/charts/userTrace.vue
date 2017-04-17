<template>
<div>
  <div class="history">
   <div class="history-date">
      <div class="year">
        <div>2016年</div>
      </div>
      <ul>
        <li class="right">
          <h3>07.01<span>2016</span></h3>
          <dl>
            <span>第一次回帖</span>
          </dl>
        </li>
        <li class="left">
          <dl>
            <span>首次购买产品</span>
          </dl>
          <h3>09.01<span>2016</span></h3>
        </li>
        <li class="right">
          <h3>10.08<span>2016</span></h3>
          <dl>
            <span>联想商店应用下载达到50个</span>
          </dl>
        </li>
        <li class="left">
          <dl>
            <span>消费达到10K</span>
          </dl>
          <h3>12.12<span>2016</span></h3>
        </li>
      </ul>
    </div>
    <div class="history-date">
      <div class="year">
        <div>2017年</div>
      </div>
      <ul>
        <li class="right">
          <h3>02.11<span>2017</span></h3>
          <dl>
            <span>第二次发帖</span>
          </dl>
        </li>
        <li class="left">
          <dl>
            <span>首次接受联想服务</span>
          </dl>
          <h3>03.18<span>2017</span></h3>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');

    export default {
        name: 'userTrace',
        data() {
            return {
               chart:null, 
               labelPosition: 'right',
               activeNames: ['1']
            }
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        created () {
            //this.$store.dispatch('getHomeInfo')
        },
        methods: {
        },
        mounted() {
            $(".history").eq(0).animate({
                height: '900px'
            }, 1500);
        }
    }
</script>

<style scoped>
    .history {
        background: url(../../assets/images/timeline/line4.png) repeat-y 50% 0;
        overflow: hidden;
        position: relative;
        height: 100px;
    }
            
    .history-date {
        overflow: hidden;
        width: 100%;
    }

    .history-date .year {
        text-align: center;
        width: 100%;
        background: url(../../assets/images/timeline/icon9.png) no-repeat 50% 0;
        height: 87px;
        font-size: 25px;
        font-family: 微软雅黑;
    }

    .history-date .year div {
        display: inline-block;
        margin-left: -200px;
        margin-top: 25px;
    }

    .history-date ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
            
    .history-date ul li {
        padding: 0;
        margin: 0;
        padding-top: 50px;
        background: url(../../assets/images/timeline/icon7.png) no-repeat 50% 50px;
        +background: url(../../assets/images/timeline/icon7.png) no-repeat 50% 50px;
        padding-bottom: 50px;
        zoom: 1;
        height: 14px;
    }
            
    .history-date ul li.left h3 {
        float: right;
        width: 50%;
        text-align: left;
        margin-right: -30px;
        margin-top: -50px;
        color: #878787;
        font: normal 18px/16px Arial;
    }

    .history-date ul li.right h3 {
        width: 50%;
        text-align: right;
        margin-left: -30px;
        margin-top: 0px;
        color: #878787;
        font: normal 18px/16px Arial;
    }
            
    .history-date ul li h3 span {
        display: block;
        color: #ADADAD;
        font-size: 12px;
        padding-left:15px;
    }
            
    .history-date ul li dl {
        margin-top: -13px;
    }

    .history-date ul li.left dl {
        background: url(../../assets/images/timeline/right_arrow.png) no-repeat 100% 0;
        float: right;
        margin-right: 52%;
        margin-top: -10px;
        padding-right: 20px;
        font-family: 微软雅黑;
        display: block;
        background-color: #FFBB42;
        height: 40px;
        width: auto;
    }

    .history-date ul li.right dl {
        background: url(../../assets/images/timeline/left_arrow.png) no-repeat 0 0;
        float: left;
        margin-left: 52%;
        margin-top: -58px;
        font-family: 微软雅黑;
        display: block;
        background-color: #FFBB42;
        height: 40px;
        width: auto;
    }
            
    .history-date ul li dl dt {
        font-size: 30px;
        line-height: 28px;
    }
            
    .history-date ul li dl span{
        display: block;
        font-size:20px;
        padding: 9px 9px 9px 29px;
        color:#fff;
    }
            
    .history-date h2 a.right {
        margin: 15px 317px 0 0;
        +margin: 15px 600px 0 0;
        float:right;
    }
</style>
