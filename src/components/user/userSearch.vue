<template>
    <section class="user-search" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命加载中">
        <div class="search-icon">
          <i class="icon tiezi"></i>
      用户轨迹跟踪
        </div>
        <div class="search-block">
            <el-form :model="userValidateForm" :inline="true" ref="userValidateForm">
               <!--  <el-form-item prop="userName" :rules="[
      { required: true, message: '用户不能为空'}
    ]">
                    <el-input icon="search" :on-icon-click="serchClick" v-model.trim="userValidateForm.userName" placeholder="查询用户" auto-complete="off"></el-input>
                </el-form-item> -->
                <el-form-item label="用户查询">
                    <el-autocomplete popper-class="my-autocomplete" v-model="userValidateForm.userName" :fetch-suggestions="querySearch" custom-item="my-item-zh" placeholder="Phone/LenovoID/Mail/IMEI/SN/ServiceUserID" @select="handleSelect" icon="search" :on-icon-click="serchClick"></el-autocomplete>
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
    import users from '@/vuex/modules/mockedUsers'

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
            return users.map(user => ({value: user.userBaseInfo.phone}));
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
  position: relative;
  .search-icon{
    position: absolute;
    top:0;
    left:10px;
    display: inline-block;
     .tiezi {
              background: url(./../../assets/images/tiezi_b.png) 0 0 no-repeat;
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
  .search-block {
        border-radius: 4px;
        transition: .2s;
        display: inline-block;
  }

  .el-form-item {
    margin-bottom: 0;    
    label.el-form-item__label {
      font-weight: bold !important;
      font-size: 16px !important;
    }
    .el-autocomplete {
      width: 400px;
    }
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
