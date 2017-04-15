<template>
<div id="consume-preference-chart-container" style="width:500px;height:400px"></div>
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
                    indicator: [
                       { text: 'IT数码', max: 6500},
                       { text: '旅游', max: 16000},
                       { text: '家居', max: 30000},
                       { text: '时尚', max: 38000},
                       { text: '服装', max: 52000},
                       { text: '医疗', max: 25000}
                    ],
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
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                    // areaStyle: {normal: {}},
                    data: [
                        {
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
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
