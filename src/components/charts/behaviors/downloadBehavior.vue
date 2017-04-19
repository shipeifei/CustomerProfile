
<template>
<div id="download-behavior-chart-container" class="chart-container"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    import {colorsFunc} from '../../../colors'
    export default {
          name: 'downloadBehavior',
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
            var myChart = echarts.init(document.getElementById('download-behavior-chart-container'));
           let option = {
                title: {
                    text: '应用',
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
                    data:['工作学习','新闻阅读','游戏','生活购物','其它']
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
                        data:[
                            {value:335, name:'工作学习'},
                            {value:233, name:'新闻阅读'},
                            {value:678, name:'游戏'},
                            {value:109, name:'生活购物'},  
                            {value:654, name:'其它'}

                        ]
                    }
                ]
            };

             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
