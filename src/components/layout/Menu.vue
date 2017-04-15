<style lang="less" scoped>
  .menu-container{
   
  
    .el-menu{
          background: #daeaef !important;
          
    }
  }
</style>
<template>
    <div class="menu-container">
      
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group >
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
       <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>导航四</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group >
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
       
      </el-submenu>
    </el-menu>
        </div>

</template>
<script type='text/babel'>
  export default {
    name: 'Menu',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>