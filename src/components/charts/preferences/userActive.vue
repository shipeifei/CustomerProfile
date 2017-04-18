<template>
    <div class="user-active-chart-wrapper">
        <div id="user-active-chart-container1" style="width:100%;height:150px"></div>
        <div id="user-active-chart-container2" style="width:100%;height:150px"></div>
        <div id="user-active-chart-container3" style="width:100%;height:150px"></div>
        <div id="user-active-chart-container4" style="width:100%;height:150px"></div>
    </div>
</template>

<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
     var xAxisData = [];
            var data1 = [];
            var data2 = [];
            var data3 = [];
            var data4 = [];

            for (var i = 0; i < 9; i++) {
                xAxisData.push('2017-02-0' + (i+1));
                data1.push((Math.random() * 100).toFixed(0));
                data2.push((Math.random() * 50).toFixed(0));
                data3.push((Math.random() * 200).toFixed(0));
                data4.push((Math.random() * 300).toFixed(0));
            }

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
                user_datas: 'user_datas'
            })
        },
        created () {
            //this.$store.dispatch('getHomeInfo')
        },
        methods: {
            drawGraph (id,legend,seriesData,xAxisShow,lineColor) {
            this.chart=echarts.init(document.getElementById(id));
            // 皮肤添加同一般使用方式  
            this.chart.showLoading();
            let legendData=[];
            legendData.push(legend);
           
            var itemStyle = {
                normal: {
                }
            };

            let option = {
                title: {
                    text: legend,
                    textStyle:{
                        color:'#333',
                        fontSize:'12'
                    },
                    bottom:'20%'
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
                    show:false,
                    data:legendData
                    //['App','论坛','商城','设备']
                },
            
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        show:xAxisShow,
                        type : 'category',
                        boundaryGap : true,
                        data : xAxisData,
                         axisLabel:{
                         show:true,
                         interval:0
                        }
                    }
                ],
                yAxis : [
                    {
                        show:false,
                        type : 'value',
                        boundaryGap:true,
                        axisTick: {
                          show:false,  
                          alignWithLabel:true,
                          inside:false
                        },
                        axisLine:{
                            show:true
                        },
                    }
                ],
                series : [
                    {
                        name:legend,
                        type:'line',
                        stack: '总量',
                         itemStyle: {
                        normal: {
                            color: lineColor,
                            lineStyle: {        // 系列级个性化折线样式
                                width: 2,
                            },
                        label: {
                        show: true,
                        formatter: "{c}",
                        textStyle: {
                            color: '#000'
                            }
                    },
                        }
                    },
                    data:seriesData
                    }
                ]
            };
            this.chart.setOption(option);
            this.chart.hideLoading();  
          }
        },
        mounted() {
           this.$nextTick(()=> {  
                this.drawGraph('user-active-chart-container1','App',data1,false,'#9ACD32');  
                this.drawGraph('user-active-chart-container2','论坛',data2,false,'#9370DB');
                this.drawGraph('user-active-chart-container3','商城',data3,false,'#8E388E');  
                this.drawGraph('user-active-chart-container4','设备',data4,true,'#98FB98');  
            }) 
        }
    }
</script>
<style lang="less" scoped>
    .user-active-chart-wrapper{
        > div{
            &:before{
                    content: '';
    border-left: 1px solid #121212;
    height: 150px;
    padding-left: 20px;
    position: absolute;
    left: 59px;
    /* margin-left: 50px; */
            }
        }
    }
</style>
