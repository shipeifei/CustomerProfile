<template>
<div id="area-chart-container" class="chart-container"></div>
</template>
<script type="text/babel">
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
                product_datas: 'product_datas'
            })
        },
        created () {
            //this.$store.dispatch('getHomeInfo')
        },
        mounted() {
           var myChart = echarts.init(document.getElementById('area-chart-container'));
           let option = {
            title:{
                text: '地域分布Top ' + this.product_datas.area.legend.length,
                x:'center'
            },
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                formatter:  "{b}: {c} %",
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '20%',
                right: '20%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.product_datas.area.legend,
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
                    type : 'value',
                    axisLabel: {
                        show: true,
                        interval: 'auto',
                        formatter: '{value} %'
                    }
                }
            ],
            series : [
                {
                    name:'地域分布Top ' + this.product_datas.area.legend.length,
                    type:'bar',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                formatter: "{c} %"  
                            },
                            color: colorsFunc
                        }
                    },
                    barWidth: '60%',
                    data: this.product_datas.area.data.slice(0, 5)
                }
            ]
        };

             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
