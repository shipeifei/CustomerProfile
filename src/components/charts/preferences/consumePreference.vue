<template>
<div id="consume-preference-chart-container" class="chart-container"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
          name: 'consumePreference',
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
           var myChart = echarts.init(document.getElementById('consume-preference-chart-container'));
           let option = {
                title: {
                    text: '消费偏好',
                    x:'center'
                },
                tooltip: {},
                legend: {
                    //data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                },
                center: ['50%', '50%'],
                radar: {
                    // shape: 'circle',
                    indicator: this.user_datas.consumePreference.legend,
                    radius: 100,      
                    startAngle: 120,   // 改变雷达图的旋转度数
                },
                axisLabel: {
                  show: true
                },
                series: [{
                    name: '消费偏好',
                    type: 'radar',
                    itemStyle: {//图形样式，可设置图表内图形的默认样式和强调样式（悬浮时样式）：
                     normal: {
                         areaStyle:{type: 'default'}  //设置地图背景色的颜色设置  
                        ,color:'#72ACD1' //刚才说的图例颜色设置 
                    }
                },
                    // areaStyle: {normal: {}},
                    data: [
                        {
                            value: this.user_datas.consumePreference.data,
                            name: '消费偏好',
                            label: {
                                normal: {
                                    show: true,
                                    formatter:function(params) {
                                        return params.value;
                                    }
                                }
                            }
                        }
                    ]
                }]
            };
             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
