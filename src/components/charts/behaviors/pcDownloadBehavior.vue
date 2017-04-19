<template>
<div>
    <div style="font-size: 18px; font-weight: bold; text-align: center;">
        应用
    </div>
    <div id="pc-download-behavior-chart-container" class="chart-container" style="margin-top: -62px;"></div>
</div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    import {colorsFunc} from '../../../colors'
    export default {
        name: 'pcDownloadBehavior',
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
            var myChart = echarts.init(document.getElementById('pc-download-behavior-chart-container'));
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
                    data: this.user_datas.pcApps.legend
                },
                // toolbox: {
                //     show: true,
                //     feature: {
                //         mark : {show: true},
                //         dataView : {show: true, readOnly: false},
                //         magicType : {
                //             show: true, 
                //             type: ['pie', 'funnel'],
                //             option: {
                //                 funnel: {
                //                     x: '25%',
                //                     width: '50%',
                //                     funnelAlign: 'left',
                //                     max: 1548
                //                 }
                //             }
                //         },
                //         //restore : {show: true},
                //         //saveAsImage : {show: true}
                //     }
                // },
                calculable : true,
                series : [
                    {
                        name:'手机应用下载',
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
                        data: this.user_datas.pcApps.data
                    }
                ]
            };

             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
