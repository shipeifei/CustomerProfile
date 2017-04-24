<template>
    <div class="user-map-container">
      <div id="product-user-map-chart-container" class="chart-container"></div>
    </div>
</template>

<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    import colors, {colorsFunc} from '../../colors'
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
                product_datas: 'product_datas'
            })
        },
        created () {
            //this.$store.dispatch('getHomeInfo')
        },
        mounted() {
            var myChart = echarts.init(document.getElementById('product-user-map-chart-container'));
            echarts.registerMap('china', require('./china.json'))

            let option = {
                title: {
                    text: '',
                    left: 'right',
                    top:'middle'
                },
                tooltip: {
                    trigger: 'item',
                    //backgroundColor:"#FFFFFF",//提示标签背景颜色
                    //textStyle:{color:"#fff"} //提示标签字体颜色
                },
                legend: {
                    show: true,
                    orient: 'vertical',
                    left: 'top',
                    data: this.product_datas.area.data.map(item => item.name)
                },
                visualMap: {
                    show: false,
                    min: 1,
                    max: 30,
                    left: 'left',
                    top: 'bottom',
                    splitNumber: 5,
                    realtime: false,
                    text: ['高','低'],           // 文本，默认为数值文本
                    calculable: true,
                    inRange: {
                        // 少到多
                        color: ['lightskyblue','yellow', 'orangered']
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
                                show: false,
                                //textStyle:{color:"#c71585"}//省份标签字体颜色,
                                color: colorsFunc
                            },

                            emphasis: {//对应的鼠标悬浮效果
                              show: true

                              }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: .5, //区域边框宽度
                                borderColor: '#009fe8', //区域边框颜色
                                areaColor: '#FFFFFF', // 区域颜色
                            },
                            emphasis: {
                                borderWidth: .5,
                                borderColor: '#4b0082',
                                //areaColor:"#ffdead",
                            }
                        },
                        data: this.product_datas.area.data
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
            right: 8%;
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
                    .top1{
                        background-color: #00d970 !important;
                        border-color: #00d970 !important;
                    }
                    .top2{
                        background-color: #b3ffa7 !important;
                        border-color: #b3ffa7 !important;
                    }
                    .top3{
                        background-color: #9ae1ff !important;
                        border-color: #9ae1ff !important;
                    }

                }
            }
        }
    }
</style>
