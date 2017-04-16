<template>
<div id="user-map-chart-container" style="width:500px;height:400px"></div>
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
                return Math.round(Math.random()*1000);
            }
            echarts.registerMap('china', require('./china.json'))
    
            let option = {
                title: {
                    text: '地域',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    show: false,
                    orient: 'vertical',
                    left: 'left',
                    data:['position']
                },
                visualMap: {
                    show:false,
                    min: 0,
                    max: 2500,
                    left: 'left',
                    top: 'bottom',
                    text: ['高','低'],           // 文本，默认为数值文本
                    calculable: true
                },
                toolbox: {
                    show: false,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
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
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data:[
                            {name: '北京',value: randomData() },
                            {name: '天津',value: randomData() },
                            {name: '上海',value: randomData() },
                            {name: '重庆',value: randomData() },
                            {name: '河北',value: randomData() },
                            {name: '河南',value: randomData() },
                            {name: '云南',value: randomData() },
                            {name: '辽宁',value: randomData() },
                            {name: '黑龙江',value: randomData() },
                            {name: '湖南',value: randomData() },
                            {name: '安徽',value: randomData() },
                            {name: '山东',value: randomData() },
                            {name: '新疆',value: randomData() },
                            {name: '江苏',value: randomData() },
                            {name: '浙江',value: randomData() },
                            {name: '江西',value: randomData() },
                            {name: '湖北',value: randomData() },
                            {name: '广西',value: randomData() },
                            {name: '甘肃',value: randomData() },
                            {name: '山西',value: randomData() },
                            {name: '内蒙古',value: randomData() },
                            {name: '陕西',value: randomData() },
                            {name: '吉林',value: randomData() },
                            {name: '福建',value: randomData() },
                            {name: '贵州',value: randomData() },
                            {name: '广东',value: randomData() },
                            {name: '青海',value: randomData() },
                            {name: '西藏',value: randomData() },
                            {name: '四川',value: randomData() },
                            {name: '宁夏',value: randomData() },
                            {name: '海南',value: randomData() },
                            {name: '台湾',value: randomData() },
                            {name: '香港',value: randomData() },
                            {name: '澳门',value: randomData() }
                        ]
                    }
                ]
            };
             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
