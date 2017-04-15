<template>
    <section class="user-search" v-loading.fullscreen.lock="fullscreenLoading"
    element-loading-text="拼命加载中">
                      <h2>用户查询</h2>
                      <p>支持手机号/LenovoID/Mail/IMEI/SN/ServiceUserID</p>
                      <div class="search-block">
                      <el-form :model="userValidateForm" :inline="true" ref="userValidateForm"  >
                        <el-form-item  prop="userName" :rules="[
      { required: true, message: '用户不能为空'}
    ]">
                            <el-input   icon="search" :on-icon-click="handleIconClick"  v-model.trim="userValidateForm.userName" placeholder="查询用户" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    </div>
                    </section>
</template>


<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    export default {
        name: 'userSearch',
        data() {
            return {
               userValidateForm: {
                  userName: ''
               }
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
        },
        methods: {
          handleIconClick(){
                if ( this.userValidateForm.userName.length > 0 ) {
                      //this.fullscreenLoading = true;
                      //setTimeout(() => {
                        //this.fullscreenLoading = false;
                        this.$store.dispatch('getUserInfo');
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
            changeDatas () {
            }
        }
    }
</script>

<style lang="less" scoped >
.user-search{
      h2 {
        font-weight: 400;
        color: #1f2f3d;
      }
      p{
        font-size: 14px;
        color:#5e6d82;
        line-height: 1.5em;
      }
      .search-block{
        border-radius: 4px;
        transition: .2s;
      }
    }
</style>
