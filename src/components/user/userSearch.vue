<template>
    <section class="user-search" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命加载中">
        <h2>用户查询</h2>
        <p>支持手机号/LenovoID/Mail/IMEI/SN/ServiceUserID</p>
        <div class="search-block">
            <el-form :model="userValidateForm" :inline="true" ref="userValidateForm">
               <!--  <el-form-item prop="userName" :rules="[
      { required: true, message: '用户不能为空'}
    ]">
                    <el-input icon="search" :on-icon-click="serchClick" v-model.trim="userValidateForm.userName" placeholder="查询用户" auto-complete="off"></el-input>
                </el-form-item> -->
                <el-form-item>
                    <el-autocomplete popper-class="my-autocomplete" v-model="userValidateForm.userName" :fetch-suggestions="querySearch" custom-item="my-item-zh" placeholder="请输入内容" @select="handleSelect" icon="search" :on-icon-click="serchClick"></el-autocomplete>
                </el-form-item>
            </el-form>
        </div>
    </section>
</template>



<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import Vue from 'vue'
    import { mapGetters } from 'vuex'

    Vue.component('my-item-zh', {
      functional: true,
      render: function (h, ctx) {
        var item = ctx.props.item;
        return h('li', ctx.data, [
          h('div', { attrs: { class: 'name' } }, [item.value])
        ]);
      },
      props: {
        item: { type: Object, required: true }
      }
  });
    export default {
        name: 'userSearch',
        data() {
            return {
               userValidateForm: {
                  userName: localStorage.getItem('customer-profile-username')?localStorage.getItem('customer-profile-username'):''
               },
                restaurants: []
              }
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas',
                fullscreenLoading:'fullscreenLoading'
            })
        },
        created () {
          //this.$store.dispatch('getHomeInfo');
        },
        mounted() {
           this.restaurants = this.loadAll();
        },
        methods: {
          serchClick(){
              const userName = this.userValidateForm.userName.trim();
                if ( userName.length > 0 ) {
                      //this.fullscreenLoading = true;
                      //setTimeout(() => {
                        //this.fullscreenLoading = false;
                        this.$store.dispatch('getUserInfo', userName);
                      //}, 3000);
                }
                 else {
                          this.$message({
                          showClose: true,
                          message: '用户名不能为空',
                          type: 'error'
                        });
                        }
              },
          
             querySearch(queryString, cb) {
              var restaurants = this.restaurants;
              var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
              // 调用 callback 返回建议列表的数据
              cb(results);
          },
          createFilter(queryString) {
            return (restaurant) => {
              return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
            };
          },
          loadAll() {
            return [
              { "value": "testLenovoID2" },
              { "value": "testLenovoID" },
              { "value": "18911004567" },
              { "value": "test@163.com" },
              { "value": "13916053476" },
              { "value": "admin@lenovo.com"}
            ];
          },
          handleSelect(item) {
             this.serchClick();             
          },
          handleIconClick(ev) {
            console.log(ev);
          }
        }
    }
</script>

<style lang="less" scoped>
.user-search {
  h2 {
        font-weight: 400;
        color: #1f2f3d;
        margin: 0;
  }
  p {
        font-size: 14px;
        color:#5e6d82;
        line-height: 1.5em;
        margin: 5px 0;
  }
  .search-block {
        border-radius: 4px;
        transition: .2s;
  }

  .el-form-item {
    margin-bottom: 0;
  }
}
    .my-autocomplete {
            li {
              line-height: normal;
              padding: 7px;
              &:hover{
                background-color: #eaeefb;
              }
              .name {
                text-overflow: ellipsis;
                overflow: hidden;
              }
              .addr {
                font-size: 12px;
                color: #b4b4b4;
              }

              .highlighted .addr {
                color: #ddd;
              }
            }
          }
     
</style>
