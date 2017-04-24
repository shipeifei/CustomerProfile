<template>
<div class="nav-container">
    <div class="logo">
        <router-link to="/" exact>
            <img src="./../../assets/logo.png" alt="">
        </router-link>
    </div>
    <div class="menu">
      <ul>
        <li :class="{active: current_page != 'product_datas'}" @click="changeCurrentPage('user_datas')">
            用户轨迹
        </li>
        <li :class="{active: current_page == 'product_datas'}" @click="changeCurrentPage('product_datas')">
            产品画像 
        </li>
      </ul>
    </div>
    <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
      <!--<el-menu-item index="1">
        <i class="icon tiezi"></i>
        用户轨迹
      </el-menu-item> 
      <el-menu-item index="2">
        <i class="icon shengcheng"></i>
        生成报告
      </el-menu-item>-->
      <!-- <el-menu-item index="3"><i class="icon citiao"></i>词条管理</el-menu-item>
       <el-submenu index="4">
        <template slot="title"><i class="icon user"></i>用户</template>
        <el-menu-item index="4-1">个人中心</el-menu-item>
        <el-menu-item index="4-2">退出登录</el-menu-item>
      </el-submenu> -->
    <!--</el-menu>-->
</div>
</template>
<script type="text/babel">
  import { mapGetters } from 'vuex'

  export default {
  	name: 'Nav',
    computed: {
        ...mapGetters({
            home_datas: 'home_datas',
            user_datas: 'user_datas',
            product_datas: 'product_datas',
            current_page: 'current_page'
        })
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      changeCurrentPage(current_page) {
        this.$store.dispatch('changeCurrentPage', current_page);
        if (current_page == 'product_datas') {
          if (!this.currentProductName) {
            this.changeCurrentProduct(this.productNames[0]);
          }
        }
      }  
    }
  }
</script>
<style lang="less" scoped>
  .nav-container{
    width: 100%;
    height: 60px;
    padding-left: 20px;
    // line-height: 60px;
    background: #f8f8f8;
    .logo {
      float: left;
      margin-top: 12px;
    }
  }

  .menu {
    float: left;
    height: 100%;
    margin-left: 50px;
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      height: 100%;

      li {
        cursor: pointer;
        height: 100%;
        float: left;
        padding: 0 20px;
        text-align: center;
        padding-top: 18px;
        &.active {
          background-color: #20a0ff;
          color: white;
        }
      }
    }
  }
</style>
