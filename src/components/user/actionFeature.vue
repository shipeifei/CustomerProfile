<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="行为属性" name="1">
            <el-row>
                <el-col :md="16">
                    <pc-behavior></pc-behavior>
                </el-col>
                <el-col :md="8">
                    <mall-behavior></mall-behavior>
                </el-col>
            </el-row>
            <el-row style="padding-top: 50px;">
                <el-col :md="8">
                    <community-behavior></community-behavior>
                </el-col>
                <el-col :md="8">
                    <service-behavior></service-behavior>
                </el-col>
            </el-row>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import mallBehavior from '@/components/charts/behaviors/mallBehavior.vue'
    import serviceBehavior from '@/components/charts/behaviors/serviceBehavior.vue'
    import communityBehavior from '@/components/charts/behaviors/communityBehavior.vue'
    import phoneBehavior from '@/components/charts/behaviors/phoneBehavior.vue'
    import pcBehavior from '@/components/charts/behaviors/pcBehavior.vue'
    import downloadBehavior from '@/components/charts/behaviors/downloadBehavior.vue'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
          name: 'actionFeature',
          components: {
            'mallBehavior': mallBehavior,
            'serviceBehavior': serviceBehavior,
            'communityBehavior': communityBehavior,
            'phoneBehavior': phoneBehavior,
            'pcBehavior': pcBehavior,
            'downloadBehavior' :downloadBehavior
          },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        data() {
            return {
                activeNames: ['1']
            };
        },
        created () {
            //this.$store.dispatch('getHomeInfo')
        }
    }
</script>

