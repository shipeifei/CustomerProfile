<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">用户详情</span>
        </div>
        <div class="userProp">
            <el-row>
                <el-col :md="12">
                    <media-preference></media-preference>
                </el-col>
                <el-col :md="12">
                    <consume-preference></consume-preference>
                </el-col>
            </el-row>
        </div>
    </el-card>
</template>


<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import mediaPreference from '@/components/charts/preferences/mediaPreference.vue'
    import consumePreference from '@/components/charts/preferences/consumePreference.vue'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
          name: 'personPrefecence',
          components: {
            'mediaPreference': mediaPreference,
            'consumePreference':consumePreference
          },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        created () {
            //this.$store.dispatch('getHomeInfo')
        }
    }
</script>

