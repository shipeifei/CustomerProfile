<template>
   <div class="user-container">
    <div class="toggle-menu" v-if="user_datas">
        <el-button-group>
            <el-button @click="changeMenu" :class="{'active':menuStatus===false}"><i class="el-icon-date"></i>概况</el-button>
            <el-button @click="changeMenu" :class="{'active':menuStatus===true}"><i class="el-icon-menu"></i>详情
            </el-button>
        </el-button-group>
    </div>
    <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户轨迹跟踪</el-breadcrumb-item>
        </el-breadcrumb> -->
    <el-row>
        <el-col :md="6">
            <user-info ></user-info>
        </el-col>
        <el-col :md="18" >
            <section class="user-container-wrapper">
                <user-search></user-search>
                <!--个人属性-->
                <div class="user-search-result" v-if="user_datas">
                    <h2>查询结果</h2>
                    <div class="person-feature" v-if="menuStatus===false">
                        <person-feature></person-feature>
                    </div>
                    <div class="person-detail" v-if="menuStatus===true">
                        <div class="person-preference">
                          <person-preference></person-preference>
                        </div>
                       <div class="action-feature" >
                        <action-feature></action-feature>
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
    import userInfo from '@/components/user/userInfo.vue'
    import userSearch from '@/components/user/userSearch.vue'
    import personFeature from '@/components/user/personFeature.vue'
    import actionFeature from '@/components/user/actionFeature.vue'
    import personPreference from '@/components/user/personPreference.vue'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
          name: 'index',
          components: {
            'userInfo': userInfo,
            'personFeature' :personFeature,
            'actionFeature' :actionFeature,
            'userSearch': userSearch,
            'personPreference':personPreference
          },
        data() {
            return {
               labelPosition: 'right',
               menuStatus:false
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
            changeMenu () {
              this.menuStatus=!this.menuStatus;
            }
        }
    }
</script>

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
    margin-top: 5px;
    background-color: #ffffff;
    padding: 40px;
    min-height: 800px;
    .toggle-menu{
      position: absolute;
      top: 10px;
      right: 5px;
      .active{
      
    color: #fff;
    background-color: #13ce66;
    border-color: #13ce66;
      
      }
    }
    .box-card{
      margin-top: 30px;
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
  .userProp {
      // ul {
      //   li{
      //     list-style: none;
      //     text-align: center;
      //     margin-right: 20px;
      //     label{
      //       font-size: 16px;
      //     }
      //     span{
      //       display: inline-block;
      //       text-align: center;
      //       padding: 5px;
      //       width: 100px;
      //       border:1px solid #121212;
      //     }
      //   }
      // }
    }
</style>
