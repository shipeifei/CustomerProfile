<template>
<div id="mall-behavior-chart-container" class="chart-container"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
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
                    data : ['浏览次数', '加入购物车', '购买'],
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
                    name:'商城行为',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = ['#C1232B', '#26C0C0', '#FCCE10', '#E87C25', '#27727B'];
                                return colorList[params.dataIndex];
                            }
                        }
                    },
                    barWidth: '60%',
                    data:[522, 220, 47]
                }
            ]
        };

             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
