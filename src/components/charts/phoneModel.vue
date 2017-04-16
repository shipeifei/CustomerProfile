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
                chart:null, 
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
        methods: {
            drawGraph (id) {
            this.chart=echarts.init(document.getElementById(id));
            // 皮肤添加同一般使用方式  
            this.chart.showLoading();
            this.chart.setOption({
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
                    data: this.user_datas.phoneModel.legend
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
                        name:'手机型号接入',
                        type:'pie',
                      //   itemStyle: {  
                      //       normal: {  
                      //           label:{  
                      //               show: true,  
                      //               position:'outer',  
                      //               formatter: "{b} : {d}%"  
                      //           }   
                      //     }  
                      // },  
                        radius: ['40%', '70%'],
                        data: this.user_datas.phoneModel.series
                    }
                ]
            });
            this.chart.hideLoading();  
          }
        },
        mounted() {
            this.$nextTick(()=> {  
                this.drawGraph('phone-model-container');  
            }) 
        }
    }
</script>
