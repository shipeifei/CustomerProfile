<template>
    <div class="user-container">
    <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户轨迹跟踪</el-breadcrumb-item>
        </el-breadcrumb> -->
    <el-row>
        <el-col :md="24" >
            <section class="user-container-wrapper">
                <div class="user-search-container">
                    <user-search></user-search>
                </div>
                <!--个人属性-->
                <div class="user-search-result" v-if="user_datas">
                    <div class="person-basic">
                        <div class="person-feature">
                            <person-feature></person-feature>
                        </div>
                        <div class="person-trace">
                            <person-trace></person-trace>
                        </div>
                        <div class="word-art">
                            <word-art></word-art>
                        </div>
                        <div class="person-active">
                            <person-active></person-active>
                        </div>
                        <div class="mobile-action-feature">
                            <mobile-action-feature></mobile-action-feature>
                        </div>
                        <div class="pc-action-feature">
                            <pc-action-feature></pc-action-feature>
                        </div>
                    </div>
                </div>
            </section>
        </el-col>
    </el-row>
</div>
</template>

<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import userSearch from '@/components/user/userSearch.vue'
    import personFeature from '@/components/user/personFeature.vue'
    import personTrace from '@/components/user/personTrace.vue'
    import personActive from '@/components/user/personActive.vue'
    import mobileActionFeature from '@/components/user/mobileActionFeature.vue'
    import pcActionFeature from '@/components/user/pcActionFeature.vue'
    import personPreference from '@/components/user/personPreference.vue'
    import wordArt from '@/components/user/wordArt.vue'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
          name: 'index',
          components: {
            'personFeature': personFeature,
            'personTrace': personTrace,
            'mobileActionFeature': mobileActionFeature,
            'pcActionFeature': pcActionFeature,
            'userSearch': userSearch,
            'personPreference': personPreference,
            'personActive': personActive,
            'wordArt': wordArt
          },
        data() {
            return {
               labelPosition: 'right'
            }
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        created () {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
<style lang="less">
    .chart-container {
        width: 100%;
        height: 100%;
        // min-width: 300px;
        min-height: 300px;
        // max-width: 330px;
        // max-height: 330px;
    }
</style>
<style lang="less">
  .el-collapse {
    margin-top: 20px;
    .el-collapse-item__wrap {
        background-color: white;
    }
  }
</style>
<style lang="less" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .user-container{
    position: relative;
    background-color: #ffffff;
    padding: 10px 40px;
    min-height: 800px;
    .toggle-menu{
      position: absolute;
      z-index: 100000;
      top: 10px;
      right: 5px;
      .active{
      
    color: #fff;
    background-color: #13ce66;
    border-color: #13ce66;
      
      }
    }
    .box-card{
      margin-top: 20px;
    }
    .user-container-wrapper{
      .user-search-result{
        > h2{
          font-weight: 400;
          color: #1f2f3d;
        }
      }
    }
  }

  .user-search-container {
      text-align: center;
  }
</style>
