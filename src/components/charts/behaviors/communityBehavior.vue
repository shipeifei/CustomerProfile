<template>
<div id="community-behavior-chart-container" class="chart-container"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    import {colorsFunc} from '../../../colors'
    var echarts = require('echarts');
    export default {
          name: 'communityBehavior',
        data() {
            return {
               labelPosition: 'right'
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
           var myChart = echarts.init(document.getElementById('community-behavior-chart-container'));
           let option = {
            title:{
                text: '社区行为',
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
                    data : this.user_datas.communityBahavior.legend,
                    axisTick: {
                        alignWithLabel: true
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
                    name:'社区行为',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            color: colorsFunc
                        }
                    },
                    barWidth: '60%',
                    data: this.user_datas.communityBahavior.data
                }
            ]
        };
             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
