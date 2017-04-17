<template>
<div id="user-map-chart-container" style="width:1000px;height:1000px;"></div>
</template>
<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    require('echarts/extension/bmap/bmap');
    export default {
          name: 'userMap',
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
            var myChart = echarts.init(document.getElementById('user-map-chart-container'));
            function randomData() {
                return Math.round(800,Math.random()*1000);
            }
            echarts.registerMap('china', require('./china.json'))
    
            let option = {
                title: {
                    text: '',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    //backgroundColor:"#ff7f50",//提示标签背景颜色
                    //textStyle:{color:"#fff"} //提示标签字体颜色
                },
                legend: {
                    show: false,
                    orient: 'vertical',
                    left: 'left',
                    data:['position']
                },
                visualMap: {
                    show:false,
                    min: 800,
                    max: 50000,
                    left: 'left',
                    top: 'bottom',
                    splitNumber: 5,
                    realtime: false,
                    text: ['高','低'],           // 文本，默认为数值文本
                    calculable: true,
                    inRange: {
                        color: ['#d94e5d','#eac736','#50a3ba'].reverse()
                    }
                },
                series: [
                    {
                        name: 'position',
                        type: 'map',
                        mapType: 'china',
                        showLegendSymbol: false,
                        roam: false,
                        label: {
                            normal: {
                                show: true,
                                //textStyle:{color:"#c71585"}//省份标签字体颜色
                            },
                        
                            emphasis: {//对应的鼠标悬浮效果
                              show: true
                                                        
                              } 
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: .5,//区域边框宽度
                                borderColor: '#009fe8',//区域边框颜色
                                areaColor:"#B0B0B0",//区域颜色
                            },
                            emphasis: {
                                borderWidth: .5,
                                borderColor: '#4b0082',
                                //areaColor:"#ffdead",
                            }
                        },
                        data:[
                            {name: '北京',value: 30000 },
                            {name: '天津',value: 10000 },
                            {name: '上海',value: 1000 },
                            {name: '重庆',value: 30227.92 },
                            {name: '河北',value: 20000.92 },
                            {name: '河南',value: 806.98 }
                        
                        ]
                    }
                ]
            };
             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
