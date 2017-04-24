<template>
<div>
    <div style="font-size: 18px; font-weight: bold; text-align: center;">
        LenovoID有无
    </div>
    <div id="whether-or-not-chart-container" class="chart-container" style="margin-top: -62px;"></div>
</div>
</template>
<script type="text/babel">
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    import {colorsFunc} from '../../../colors'

    export default {
          name: 'downloadBehavior',
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                product_datas: 'product_datas'
            })
        },
        mounted() {
            var myChart = echarts.init(document.getElementById('whether-or-not-chart-container'));
           let option = {
                title: {
                    text: '',
                    x:'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {d}%"
                },
                legend: {
                	show:false,
                    orient : 'vertical',
                    x : 'right',
                    y : 'center',
                    data: this.product_datas.lenovoID.whetherOrNot.legend
                },
                calculable : true,
                series : [
                    {
                        name:'LenovoID有无',
                        type:'pie',
            			radius : '55%',
            			center: ['50%', '60%'],
            			itemStyle: {
			                normal: {
			                 	label:{
			                        show: true,
			                        position:'outer',
			                        formatter: "{b} : {d}%"
			                    },
                                color:colorsFunc
			              }
			          },
                        data: this.product_datas.lenovoID.whetherOrNot.data
                    }
                ]
            };

             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
