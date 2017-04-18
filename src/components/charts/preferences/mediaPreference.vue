<template>
<div id="media-preference-chart-container" class="chart-container"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
          name: 'mediaPreference',
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
           var myChart = echarts.init(document.getElementById('media-preference-chart-container'));
           let option = {
                title: {
                    text: '社交偏好',
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
                       { text: '搜索引擎', max: 6500},
                       { text: '贴吧', max: 16000},
                       { text: '微博', max: 30000},
                       { text: '微信', max: 38000},
                       { text: '邮箱', max: 52000},
                       { text: '其他', max: 25000}
                    ],
                    radius: 100,      
                    startAngle: 120,   // 改变雷达图的旋转度数
                },
                axisLabel: {
                  show: true
                },
                series: [{
                    name: '社交偏好',
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
                            name: '社交偏好',
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
