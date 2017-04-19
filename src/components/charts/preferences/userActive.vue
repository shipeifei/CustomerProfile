<template>
    <div>
        <el-row>
            <el-col :md="12">
                <div class="block">
                    <span class="demonstration">按月统计:</span>
                    <el-date-picker v-model="beginMonth" type="month" placeholder="选择开始月">
                    </el-date-picker>-
                    <el-date-picker v-model="endMonth" type="month" placeholder="选择结束月">
                    </el-date-picker>
                    <el-button type="primary" icon="search" @click="monthSearch">搜索</el-button>
                </div>
                <div class=" user-active-chart-wrapper">
                    <div id="user-active-chart-container1" class="chart-container" style="
        min-height: 150px;
        max-height: 150px"></div>
                    <div id="user-active-chart-container2" class="chart-container" style="
        min-height: 150px;
        
        max-height: 150px"></div>
                    <div id="user-active-chart-container3" class="chart-container" style="
        min-height: 150px;
        
        max-height: 150px"></div>
                    <div id="user-active-chart-container4" class="chart-container" style="
        min-height: 150px;
        
        max-height: 150px"></div>
                </div>
            </el-col>
            <el-col :md="12">
            <div class="block">
                    <span class="demonstration">按天统计:</span>
                    <el-date-picker v-model="beginDay" type="date" placeholder="选择开始月">
                    </el-date-picker>-
                    <el-date-picker v-model="endDay" type="date" placeholder="选择结束月">
                    </el-date-picker>
                    <el-button type="primary" icon="search" @click="daySearch">搜索</el-button>
                </div>
                <div class=" user-active-chart-wrapper">
                    <div id="user-active-chart-container5" class="chart-container" style="
        min-height: 150px;
        
        max-height: 150px"></div>
                    <div id="user-active-chart-container6" class="chart-container" style="
        min-height: 150px;
        
        max-height: 150px"></div>
                    <div id="user-active-chart-container7" class="chart-container" style="
        min-height: 150px;
        
        max-height: 150px"></div>
                    <div id="user-active-chart-container8" class="chart-container" style="
        min-height: 150px;
        
        max-height: 150px"></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>





<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    import moment from 'moment';
            var echarts = require('echarts');
            var xAxisData = [];
            var data1 = [];
            var data2 = [];
            var data3 = [];
            var data4 = [];
            var data5 = [];
            var data6 = [];
            var data7 = [];
            var data8 = [];
            var diffMonths = function(date1, date2) {
                var a = moment(date1);
                var b = moment(date2);
                var diff = b.format('YYYYMM') - a.format('YYYYMM');
                diff = b.format('YYYY') !== a.format('YYYY') ? diff + 2 : diff;
                return Array.apply([], new Array(diff + 1)).map(function(item, index) {
                    return a.clone().add(index, 'months').format('YYYY-MM');
                });
            };
            var diffDays = function(date1, date2) {
                var a = moment(date1);
                var b = moment(date2);
                var diff = b.format('YYYYMMDD') - a.format('YYYYMMDD');
                diff = b.format('YYYY') !== a.format('YYYY') ? diff + 2 : diff;
                return Array.apply([], new Array(diff + 1)).map(function(item, index) {
                    return a.clone().add(index, 'days').format('YYYY-MM-DD');
                });
            };
            var generateMonth=function(user_datas, date1,date2){
                var result = diffMonths(date1,date2);
                var size = Math.min(user_datas.activity.byMonth.app.length, result.length);
                 xAxisData = [];
                 data1 = [...user_datas.activity.byMonth.app.slice(0, size)];
                 data2 = [...user_datas.activity.byMonth.forum.slice(0, size)];
                 data3 = [...user_datas.activity.byMonth.mall.slice(0, size)];
                 data4 = [...user_datas.activity.byMonth.device.slice(0, size)];
                for (var i = 0; i < size; i++) {
                    xAxisData.push(result[i]);
                }
            }
            var generateDay=function(user_datas, date1,date2){
                var result = diffDays(date1,date2);
                var size = Math.min(user_datas.activity.byDay.app.length, result.length);
                 xAxisData = [];
                 data5 = [...user_datas.activity.byDay.app.slice(0, size)];
                 data6 = [...user_datas.activity.byDay.forum.slice(0, size)];
                 data7 = [...user_datas.activity.byDay.mall.slice(0, size)];
                 data8 = [...user_datas.activity.byDay.device.slice(0, size)];
                for (var i = 0; i < size; i++) {
                    xAxisData.push(result[i]);
                }
            }
        
    export default {
          name: 'userActive',
        data() {
            return {
               chart:null, 
               labelPosition: 'right',
               activeNames: ['1'],
               beginMonth:'2016-01',
               endMonth:'2016-09',
               beginDay:'2016-01-01',
               endDay:'2016-01-09'
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
            monthSearch:function(){
                if ( this.beginMonth.length<=0 )
                {
                     this.beginMonth.length<=0&&this.$message({
                          showClose: true,
                          message: '开始日期不能为空',
                          type: 'error'
                        });
                     return false;
                } 
                if ( this.endMonth.length<=0 )
                {
                     this.$message({
                          showClose: true,
                          message: '结束日期不能为空',
                          type: 'error'
                        });
                     return false;
                }
                if (!moment(this.beginMonth).isBefore(this.endMonth)){
                         this.$message({
                          showClose: true,
                          message: '结束日期不能小于开始日期',
                          type: 'error'
                        });
                }
                 generateMonth(this.user_datas, this.beginMonth,this.endMonth);
                this.drawGraph('user-active-chart-container1','App\n\n下载次数',data1,false,'#9ACD32','dashed');  
                this.drawGraph('user-active-chart-container2','论坛\n\n浏览次数',data2,false,'#9370DB','dashed');
                this.drawGraph('user-active-chart-container3','商城\n\n登录次数',data3,false,'#8E388E','dashed');  
                this.drawGraph('user-active-chart-container4','设备\n\n使用时长',data4,true,'#EE3B3B','solid');  
            },
            daySearch:function(){
                if ( this.beginDay.length<=0 )
                {
                     this.beginDay.length<=0&&this.$message({
                          showClose: true,
                          message: '开始日期不能为空',
                          type: 'error'
                        });
                     return false;
                } 
                if ( this.endDay.length<=0 )
                {
                     this.$message({
                          showClose: true,
                          message: '结束日期不能为空',
                          type: 'error'
                        });
                     return false;
                }
                if (!moment(this.beginDay).isBefore(this.endDay)){
                         this.$message({
                          showClose: true,
                          message: '结束日期不能小于开始日期',
                          type: 'error'
                        });
                }
                 generateDay(this.user_datas, this.beginDay,this.endDay);
                this.drawGraph('user-active-chart-container5','App\n\n下载次数',data5,false,'#9ACD32','dashed');  
                this.drawGraph('user-active-chart-container6','论坛\n\n浏览次数',data6,false,'#9370DB','dashed');
                this.drawGraph('user-active-chart-container7','商城\n\n登录次数',data7,false,'#8E388E','dashed');  
                this.drawGraph('user-active-chart-container8','设备\n\n使用时长',data8,true,'#EE3B3B','solid');  
            },
            drawGraph (id,legend,seriesData,xAxisShow,lineColor,lineStyle) {
            this.chart=echarts.init(document.getElementById(id));
            // 皮肤添加同一般使用方式  
            this.chart.showLoading();
            let legendData=[];
            legendData.push(legend);
           
            let option = {
                title: {
                    text: legend,
                    textStyle:{
                        color:'#333',
                        fontSize:'12'
                    },
                    bottom:'20%',
                },
                grid: {
                    left:'30',
                    bottom:'100'
                }
                ,
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
                    left: '15%',
                },
                xAxis : [
                    {
                        show:true,
                        position:'60',
                        type : 'category',
                        boundaryGap : true,
                         data : xAxisData,
                         axisLabel:{
                         show:xAxisShow,
                         interval:0,
                        rotate: -30
                        },
                        axisTick:{
                            show:xAxisShow
                        },
                        axisLine:{
                            lineStyle:{
                              type:lineStyle
                            }
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
                generateMonth(this.user_datas, this.beginMonth,this.endMonth);
                this.drawGraph('user-active-chart-container1','App\n\n下载次数',data1,false,'#9ACD32','dashed');  
                this.drawGraph('user-active-chart-container2','论坛\n\n浏览次数',data2,false,'#9370DB','dashed');
                this.drawGraph('user-active-chart-container3','商城\n\n登录次数',data3,false,'#8E388E','dashed');  
                this.drawGraph('user-active-chart-container4','设备\n\n使用时长',data4,true,'#EE3B3B','solid'); 

                generateDay(this.user_datas, this.beginDay,this.endDay);
                this.drawGraph('user-active-chart-container5','App\n\n下载次数',data5,false,'#9ACD32','dashed');  
                this.drawGraph('user-active-chart-container6','论坛\n\n浏览次数',data6,false,'#9370DB','dashed');
                this.drawGraph('user-active-chart-container7','商城\n\n登录次数',data7,false,'#8E388E','dashed');  
                this.drawGraph('user-active-chart-container8','设备\n\n使用时长',data8,true,'#EE3B3B','solid');   
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
    left: 69px;
    /* margin-left: 50px; */
            }
        }
       
    }
     .block{
            margin-bottom: 20px;
        }
</style>
