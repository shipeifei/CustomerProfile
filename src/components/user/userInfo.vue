<template>
    <div class="user-info-container" >
        <div slot="header" class="user-info-container-header">
            <span >用户信息</span>
          <ul v-if="user_datas&&user_datas.userBaseInfo">
          <li class="item">
            <a href="javascript:void(0)">LenovoID：</a>
            <ul>
              <li class="item" v-for="item in user_datas.userBaseInfo.LenovoID">
                <a href="javascript:void(0)">{{item}}</a>
              </li>
             
            </ul>
          </li>
          <li class="item">
            <a href="javascript:void(0)">手机</a>
            <ul>
              <li class="item">
                <a href="javascript:void(0)">{{user_datas.userBaseInfo.phone}}</a>
              </li>
            </ul>
          </li>
          <li class="item">
            <a href="javascript:void(0)">邮箱：</a>
            <ul>
              <li class="item">
                <a href="javascript:void(0)">{{user_datas.userBaseInfo.email}}</a>
              </li>
            </ul>
          </li>
          <li class="item">
            <a href="javascript:void(0)">IMEI：</a>
            <ul>
              <li class="item">
                <a href="javascript:void(0)">{{user_datas.userBaseInfo.IMEI}}</a>
              </li>
            </ul>
          </li>
          <li class="item">
            <a href="javascript:void(0)">MicroblogID：</a>
            <ul>
              <li class="item">
                <a href="javascript:void(0)">{{user_datas.userBaseInfo.MicroblogID}}</a>
              </li>
            </ul>
          </li>
          <li class="item">
            <a href="javascript:void(0)">WechatID：</a>
            <ul>
              <li class="item">
                <a href="javascript:void(0)">{{user_datas.userBaseInfo.WechatID}}</a>
              </li>
            </ul>
          </li>
          <li class="item">
            <a href="javascript:void(0)">serviceUsersID：</a>
            <ul>
              <li class="item">
                <a href="javascript:void(0)">{{user_datas.userBaseInfo.serviceUsersID}}</a>
              </li>
            </ul>
          </li>
        </ul>
        <p v-else>暂无相关用户信息</p>
        </div>
    </div>
</template>


<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import { mapGetters } from 'vuex'
    export default {
        name: 'userInfo',
        data() {
            return {
               labelPosition: 'right',
            }
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        created () {
          //this.$store.dispatch('getHomeInfo');
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style lang="less" scoped >
.user-info-container {
    background: #ffffff !important;
    width: 100%;
    box-sizing: border-box;
    padding-right: 30px;
    padding-left: 30px;
    .user-info-container-header{
      width: 100%;
      box-sizing: border-box;
      padding-right: 30px;
        span{
            display: block;
            width: 100%;
            font-size: 16px;
            color: #5e6d82;
            line-height: 40px;
            transition: .2s;
            padding-bottom: 6px;
            border-bottom: 1px solid #20a0ff;
        }
      ul{
          padding: 0;
          margin: 0;
          overflow: hidden;
          list-style: none;
          li{
              &.item
              {
                      a {
                        font-size: 16px;
                        color: #20a0ff;
                        line-height: 40px;
                        height: 40px;
                        margin: 0;
                        padding: 0;
                        text-decoration: none;
                        display: block;
                        position: relative;
                        transition: all .3s;

                      }
                      li{
                          a{
                                display: block;
                                height: 40px;
                                line-height: 40px;
                                font-size: 13px;
                                padding-left: 24px;
                                color: #121212;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                          }
                      }
              }
            }
        }
     
   }
}
</style>
