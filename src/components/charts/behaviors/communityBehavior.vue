<template>
<div id="community-behavior-chart-container" class="chart-container"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
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
                    data : ['转帖数量', '发帖数量','回帖数量'],
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
                            color: function(params) {
                                var colorList = ['#C1232B', '#26C0C0', '#FCCE10', '#E87C25', '#27727B'];
                                return colorList[params.dataIndex];
                            }
                        }
                    },
                    barWidth: '60%',
                    data:[76, 29, 40]
                }
            ]
        };
             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
