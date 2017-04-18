<template>
    <div class="user-map-container">
    <div id="user-map-chart-container" style="width: 100%; height: 100%; min-width: 500px; min-height: 500px;"></div>
    <div class="top-city">
        <ul>
            <li>
                <span>北京</span>
                <el-button type="primary"></el-button>
            </li>
            <li><span>重庆</span>
                <el-button type="success"></el-button>
            </li>
            <li><span>河南</span>
                <el-button type="warning"></el-button>
            </li>
        </ul>
    </div>
    </div>
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
                    left: 'right',
                    top:'middle'
                },
                tooltip: {
                    trigger: 'item',
                    //backgroundColor:"#ff7f50",//提示标签背景颜色
                    //textStyle:{color:"#fff"} //提示标签字体颜色
                },
                legend: {
                    show: true,
                    orient: 'vertical',
                    left: 'top',
                    data:['重庆','北京','河北']
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
                        color: ['#20a0ff','#13ce66','#f9c855'].reverse()
                    }
                },
                series: [
                    {
                        name: 'position',
                        type: 'map',
                        mapType: 'china',
                        showLegendSymbol: true,
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
                            {name: '重庆',value: 25000.92 },
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

<style lang="less" scoped >
    .user-map-container{
        position: relative;
        width: 100%;
        height: 100%;
        .top-city{
            position: absolute;
            right: 15%;
            top:40%;
            ul{
                list-style: none;
                li{
                    height: 20px;
                    line-height: 20px;
                    margin-bottom: 5px;
                    span{
                        display: inline-block;
                        margin-right: 5px;                   
                         font-size: 12px;
                         line-height: 15px;
                    }
                    .el-button{
                        padding: 5px 10px !important;
                    }

                }
            }
        }
    }
</style>
