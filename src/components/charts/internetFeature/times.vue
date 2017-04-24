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

            let option = {
                title: {
                    text: ''
                },
                tooltip : {
                    trigger: 'axis',
                    formatter:  "{b0}:<br/>&nbsp;&nbsp;&nbsp;&nbsp;{a0}: {c0} %<br/>&nbsp;&nbsp;&nbsp;&nbsp;{a1}: {c1} %",
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['电脑上网时段', '手机上网时段']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type : 'category',
                        boundaryGap : false,
                        axisTick: {
                          show: true
                        },
                        data: this.product_datas.internetFeature.times.legend
                    }
                ],
                yAxis: [
                    {
                        type : 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value} %'
                        }
                    }
                ],
                series: this.product_datas.internetFeature.times.data.map(item => {
                    const total = item.data.reduce((acc, val) => acc + val, 0);
                    console.log(item.data.map(d => Number((d * 100 / total).toFixed(2))))
                    return {
                        ...item,
                        data: item.data.map(d => Number((d * 100 / total).toFixed(2)))
                    }
                })
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
