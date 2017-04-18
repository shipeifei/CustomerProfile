<template>
<ul class="user-info-list" v-if="user_datas&&user_datas.userBaseInfo">
  <li>
    <div>LenovoID：</div>
    <div>
      <!--<ul>
        <li v-for="item in user_datas.userBaseInfo.LenovoID">{{item}}</li>
      </ul>-->
      {{user_datas.userBaseInfo.LenovoID[0]}}
    </div>
  </li>
  <li>
    <div>手机：</div>
    <div>{{user_datas.userBaseInfo.phone}}</div>
  </li>
  <li>
    <div>邮箱：</div>
    <div>{{user_datas.userBaseInfo.email}}</div>
  </li>
  <li>
    <div>IMEI：</div>
    <div>{{user_datas.userBaseInfo.IMEI}}</div>
  </li>
  <!--<li>
    <div>MicroblogID：</div>
    <div>{{user_datas.userBaseInfo.MicroblogID}}</div>
  </li>
  <li>
    <div>WechatID：</div>
    <div>{{user_datas.userBaseInfo.WechatID}}</div>
  </li>
  <li>
    <div>serviceUsersID：</div>
    <div>{{user_datas.userBaseInfo.serviceUsersID}}</div>
  </li>-->
</ul>
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

<style lang="less" scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

ul.user-info-list {
  font-size: 14px;
  padding-left: 7px;
  li {
    padding: 2px 0;
    div:first-child {
      width: 96px;
      display: inline-block;
    }
    div:last-child {
      display: inline-block;
      color: #48576a;
    }
  }
}
</style>
