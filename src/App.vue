<template>
  <div id="app-container">
    <div class="header-container">
      <nav-category></nav-category>
    </div>
    <div class="wrapper">
      <el-row :gutter="2" > 
        <!-- <el-col :md="4" >
            <menu-category></menu-category>
        </el-col> -->
        <el-col :md="24">
          <div class="wrapper-right">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/babel">
import Nav from '@/components/layout/Nav.vue'
import Menu from '@/components/layout/Menu.vue'

export default {
  name: 'App',
  components: {
    'navCategory': Nav,
    'menuCategory': Menu
  }
}
</script>

<style lang="less">
body {
  font-family: 微软雅黑, Arial;
}

.el-card__header {
  padding: 3px 10px;
}

.el-card__body {
  padding: 10px;

  .el-form-item {
    margin-bottom: 8px;

    .el-form-item__label {
      padding-top: 7px;
      color: black;
    }
  }
}
</style>
