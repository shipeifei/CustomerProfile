<template>
    <div class="user-detail">
        <div class="left">
            <div class="consumer">
              <table cellpadding="0" cellspacing="0">
                <caption>{{product_datas.basic.business.title}}</caption>
                <thead>
                  <tr>
                    <th colspan="2">类型</th>
                    <th>简介</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="r in product_datas.basic.business.data">
                    <td class="td1">{{r.name}}</td>
                    <td class="td2">{{r.type}}</td>
                    <td class="td3">{{r.desc}}</td>
                  </tr>
                </tbody>
              </table>
              <table class="media" cellpadding="0" cellspacing="0">
                <caption>{{product_datas.basic.media.title}}</caption>
                <thead>
                  <tr>
                    <th colspan="2">类型</th>
                    <th>简介</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="r in product_datas.basic.media.data">
                    <td class="td1">{{r.name}}</td>
                    <td class="td2">{{r.type}}</td>
                    <td class="td3">{{r.desc}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        <div class="img middle">
            <img src="./../../../assets/images/wordArtBoy.png" alt="" width="200px" height="500px" style="margin-left: 50px;"></img>
        </div>
        <div class="basic-info-container">
          <table cellpadding="0" cellspacing="0">
            <caption>{{product_datas.basic.basic.title}}</caption>
            <thead>
              <tr>
                <th colspan="2">类型</th>
                <th>简介</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in product_datas.basic.basic.data">
                <td class="td1">{{r.name}}</td>
                <td class="td2">{{r.type}}</td>
                <td class="td3">{{r.desc}}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script type="text/babel">
    import { mapGetters } from 'vuex'

    export default {
        name: 'productBasic',
        components: {
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                product_datas: 'product_datas'
            })
        },
        created() {
        }
    }
</script>

<style lang="less" scoped>
    .left {
        float: left;
        width: 30%;
        margin-left: 50px;
        padding-bottom: 15px;
    }
    .middle {
        float: left;
        width: 30%;
        text-align: center;
    }
    .middle img {
        width: 65%;
    }
    .social {
        margin-top: 30px;
    }
    .basic-info-container {
        float: right;
        width: 30%;
    }

    table {
      caption {
        padding-bottom: 10px;
        font-size: 20px;
      }
      &.media {
        margin-top: 80px;
      }

        thead {
          tr {
            height: 40px;
            th {
              background-color: #595959;
              color: white;
              &:not(:last-child) {
                border-right: 1px solid white;
              }
            }
          }
        }
        td {
          font-size: 13px;
          padding: 10px 5px;
          text-align: center;

          &.td1 {
            width: 100px;
          }
          &.td2 {
            width: 40px;
          }
        }
    }
    .basic-info-container {
      table {
        width: 400px;
        thead {
          th {
            background-color: #c00000;
          }
        }
      }
    }
</style>
