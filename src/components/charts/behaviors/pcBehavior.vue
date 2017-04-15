<template>
<div id="pc-behavior-chart-container" style="width:500px;height:400px"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
          name: 'pcBehavior',
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
           var myChart = echarts.init(document.getElementById('pc-behavior-chart-container'));
           let option = {
            title:{
                text: 'PC应用使用情况',
                subtext: '(一个月内)',
                x:'center'
            },
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
                    data : ['联想账号','联想电脑管家','腾讯QQ','360安全卫士','联想一键修复'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel:{
                        interval:0
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
                    name:'PC应用使用情况',
                    type:'bar',
                    itemStyle: {
                        normal: {
    　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                  '#C1232B','#26C0C0','#FCCE10','#E87C25','#27727B'
                                ];
                                return colorList[params.dataIndex]
                            },
    　　　　　　　　　　　　　　//以下为是否显示，显示位置和显示格式的设置了
    //                         label: {
    //                             show: true,
    //                             position: 'top',
    // //                             formatter: '{c}'
    //                             formatter: '{b}\n{c}'
    //                         }
                        }
                    },
                    barWidth: '60%',
                    data:[12,129,23,123,154]
                }
            ]
        };

             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
