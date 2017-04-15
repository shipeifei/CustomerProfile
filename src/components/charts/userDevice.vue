<template>
<div id="user-device-chart-container" style="width:500px;height:400px"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
          name: 'userDevice',
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
            var myChart = echarts.init(document.getElementById('user-device-chart-container'));
           let option = {
                title: {
                    text: '设备接入',
                    x:'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'right',
                    y : 'center',
                    data:['PC','Mobile','Tablet']
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
                        name:'设备接入',
                        type:'pie',
                        radius: ['40%', '70%'],
                        data:[
                            {value:335, name:'PC'},
                            {value:310, name:'Mobile'},
                            {value:234, name:'Tablet'}
                        ]
                    }
                ]
            };

             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
