<template>
<div id="mall-behavior-chart-container" class="chart-container"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    import {colorsFunc} from '../../../colors'
    var echarts = require('echarts');
    export default {
          name: 'mallBehavior',
        data() {
            return {
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
        mounted() {
           var myChart = echarts.init(document.getElementById('mall-behavior-chart-container'));
           let option = {
            title:{
                text: '商城行为',
                x:'center'
            },
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.user_datas.mallBahavior.legend,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        interval: 0,

                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'商城行为',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            color: colorsFunc
                        }
                    },
                    barWidth: '60%',
                    data: this.user_datas.mallBahavior.data
                }
            ]
        };

             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
