<template>
<div id="user-active-chart-container" style="width:100%;height:400px"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
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
            var xAxisData = [];
            var data1 = [];
            var data2 = [];
            var data3 = [];
            var data4 = [];

            for (var i = 0; i < 10; i++) {
                xAxisData.push('2017-09-0' + (i+1));
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
                    data:['App','论坛','商城','设备']
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
                        data : xAxisData
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        boundaryGap:true,
                        axisTick: {
                          show:false,
                          alignWithLabel:true,
                          inside:false
                        }
                    }
                ],
                series : [
                    {
                        name:'App',
                        type:'line',
                        stack: '总量',
                       
                        data:data1
                    },
                    {
                        name:'论坛',
                        type:'line',
                        stack: '总量',
                        data:data2
                    },
                    {
                        name:'商城',
                        type:'line',
                        stack: '总量',
                        data:data3
                    },
                    {
                        name:'设备',
                        type:'line',
                        stack: '总量',
                        data:data4
                    }
                ]
            };
            this.chart.setOption(option);
            this.chart.hideLoading();  
          }
        },
        mounted() {
           this.$nextTick(()=> {  
                this.drawGraph('user-active-chart-container');  
            }) 
        }
    }
</script>
