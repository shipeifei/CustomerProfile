<style lang="less" scoped>
  .nav-container{
    width: 100%;
    height: 60px;
    padding: 0;
    line-height: 60px;
    background: #f8f8f8;
    .left{
      height: 60px;
      line-height: 60px;
      padding: 10px 0 0 20px;
    }
    .el-menu{
          background: #f8f8f8 !important;
          li{
            margin: 0 4% !important;
          .user {
              background: url(./../../assets/images/user_b.png) 0 0 no-repeat;
          }
          .tiezi {
              background: url(./../../assets/images/tiezi_b.png) 0 0 no-repeat;
          }
          .shengcheng {
              background: url(./../../assets/images/shengcheng_b.png) 0 0 no-repeat;
          }
          .citiao {
            background: url(./../../assets/images/citiao_b.png) 0 0 no-repeat;
          }
           .icon {
                width: 22px;
                height: 22px;
                margin: 0 4px 0 0;
                display: inline-block;
                  position: relative;
                top: 5px;
            }
          }
    }
  }
</style>
<template>
<div class="nav-container">
<el-row >
  <el-col :md="10" class="left">
    <div class="log">
                  <router-link to="/" exact>
                     <img src="./../../assets/logo.png" alt="">
                  </router-link>
    </div>
  </el-col>
  <el-col :md="14" >
    <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <!-- <el-menu-item index="1">
      <i class="icon tiezi"></i>
      用户轨迹跟踪
      </el-menu-item> -->
      <!-- <el-menu-item index="2">
        <i class="icon shengcheng"></i>
        生成报告
      </el-menu-item>
      <el-menu-item index="3"><i class="icon citiao"></i>词条管理</el-menu-item>
       <el-submenu index="4">
        <template slot="title"><i class="icon user"></i>用户</template>
        <el-menu-item index="4-1">个人中心</el-menu-item>
        <el-menu-item index="4-2">退出登录</el-menu-item>
      </el-submenu> -->
    </el-menu>
  </el-col>
  
</el-row>
</div>
</template>
<script type="text/babel">
  export default {
  	name: 'Nav',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
