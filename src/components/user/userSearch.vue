<template>
    <section class="user-search" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命加载中">
        <!--<div class="search-icon">
          <i class="icon tiezi"></i>
          <el-button-group>
            <el-button :class="{'el-button--primary': current_page != 'product_datas'}" @click="changeCurrentPage('user_datas')" >用户轨迹</el-button>
            <el-button :class="{'el-button--primary': current_page === 'product_datas'}" @click="changeCurrentPage('product_datas')">产品画像</el-button>
          </el-button-group> 
        </div>-->
        <div class="search-block">
            <el-form v-if="current_page !== 'product_datas'" :model="userValidateForm" :inline="true" ref="userValidateForm">
                <el-form-item label="用户查询">
                    <el-autocomplete popper-class="my-autocomplete" v-model="userValidateForm.userName" :fetch-suggestions="querySearch" custom-item="my-item-zh" placeholder="Phone/LenovoID/Mail/IMEI/SN/ServiceUserID" @select="handleSelect" icon="search" :on-icon-click="serchClick"></el-autocomplete>
                </el-form-item>
            </el-form>
            <el-button-group v-else>
              <el-button v-for="p in productNames" :key="p" :class="{'el-button--primary': currentProductName === p}" @click="changeCurrentProduct(p)" >{{p}}</el-button>
            </el-button-group> 
        </div>
    </section>
</template>



<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import Vue from 'vue'
    import { mapGetters } from 'vuex'
    import users from '@/vuex/modules/mockedUsers'
    import products from '@/vuex/modules/mockedProducts'

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
                restaurants: [],
                productNames: [],
                currentProductName: ''
              }
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas',
                current_page: 'current_page',
                fullscreenLoading:'fullscreenLoading'
            })
        },
        created () {
          //this.$store.dispatch('getHomeInfo');
        },
        mounted() {
           this.restaurants = this.loadAll();
           this.productNames = this.loadAllProducts();
           this.currentProductName = this.productNames[0].value;
        },
        methods: {
          changeCurrentPage(current_page) {
            this.$store.dispatch('changeCurrentPage', current_page);
            if (current_page == 'product_datas') {
              if (!this.currentProductName) {
                this.changeCurrentProduct(this.productNames[0]);
              }
            }
          },
          changeCurrentProduct(productName) {
            if (this.currentProductName != productName) {
              this.currentProductName = productName;
              this.$store.dispatch('getProductInfo', productName);
            }
          },
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
          loadAllProducts() {
            return products.map(product => product.basic.name);
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
