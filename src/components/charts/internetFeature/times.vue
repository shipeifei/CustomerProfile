<template>
<div>
    <div style="font-size: 18px; font-weight: bold; text-align: center;">
        上网时段曲线
    </div>
    <div id="times-chart-container" class="chart-container" style="margin-top: -62px;"></div>
</div>
</template>
<script type="text/babel">
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');

    export default {
          name: 'userActive',
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
                product_datas: 'product_datas'
            })
        },
        created () {
            //this.$store.dispatch('getHomeInfo')
        },
        methods: {
            drawGraph (id) {
            this.chart=echarts.init(document.getElementById(id));
            // 皮肤添加同一般使用方式
            this.chart.showLoading();
            var data1 = [];
            var data2 = [];
            var data3 = [];
            var data4 = [];

            for (var i = 0; i < 10; i++) {
                data1.push((Math.random() * 100).toFixed(2));
                data2.push((Math.random() * 50).toFixed(2));
                data3.push((Math.random() * 200).toFixed(2));
                data4.push((Math.random() + 300).toFixed(2));
            }

            var itemStyle = {
                normal: {
                }
            };

            let option = {
                title: {
                    text: ''
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                  show: false,
                    data:['电脑上网时段', '手机上网时段']
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
                        boundaryGap : false,
                        axisTick: {
                          show:true
                        },
                        data : this.product_datas.internetFeature.times.legend
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        boundaryGap:true,
                        axisTick: {
                          show:true,
                          alignWithLabel:true,
                          inside:false
                        }
                    }
                ],
                series : this.product_datas.internetFeature.times.data
            };
            this.chart.setOption(option);
            this.chart.hideLoading();
          }
        },
        mounted() {
           this.$nextTick(()=> {
                this.drawGraph('times-chart-container');
            })
        }
    }
</script>
