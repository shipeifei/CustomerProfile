<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="手机行为偏好" name="1">
            <el-row>
                <el-col :md="8">
                    <download-behavior></download-behavior>
                </el-col>
                <el-col :md="8">
                    <media-preference></media-preference>
                </el-col>
                <el-col :md="8">
                    <consume-preference></consume-preference>
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
    import mediaPreference from '@/components/charts/preferences/mediaPreference.vue'
    import consumePreference from '@/components/charts/preferences/consumePreference.vue'
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
            'downloadBehavior' :downloadBehavior,
            'mediaPreference' :mediaPreference,
            'consumePreference' :consumePreference
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

