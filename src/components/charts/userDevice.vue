<template>
<div id="user-device-chart-container" class="chart-container"></div>
</template>
<script type="text/babel">
    import { mapGetters } from 'vuex'
    import {colorsFunc} from '../../colors'
    var echarts = require('echarts');
    export default {
        name: 'userDevice',
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
                    text: '设备接入',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    y: 'center',
                    data: this.user_datas.userDevice.legend
                },
                calculable: true,
                series: [
                    {
                        name:'设备接入',
                        type:'pie',
                        itemStyle: {  
                            normal: {  
                                label:{  
                                    show: true,  
                                    position:'outer',  
                                    formatter: "{b}"  
                                },
                                color: colorsFunc
                          }  
                        },  
                        radius: ['40%', '60%'],
                        data:this.user_datas.userDevice.series
                    }
                ]
            });
            this.chart.hideLoading();  
          }
        },
        mounted() {
           this.$nextTick(()=> {  
                this.drawGraph('user-device-chart-container');  
            }) 
        }
    }
</script>
