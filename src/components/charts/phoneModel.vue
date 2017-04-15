<template>
<div id="phone-model-container" style="width:500px;height:400px"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
          name: 'phoneModel',
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
            var myChart = echarts.init(document.getElementById('phone-model-container'));
           let option = {
                title: {
                    text: '手机型号接入',
                    x:'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'right',
                    y : 'bottom',
                    data:['Iphone7','ZUK Z2 Pro','Vivo','XiaoMi']
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
                            {value:335, name:'Iphone7'},
                            {value:310, name:'ZUK Z2 Pro'},
                            {value:234, name:'Vivo'},
                            {value:1000, name:'XiaoMi'}
                        ]
                    }
                ]
            };

             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
