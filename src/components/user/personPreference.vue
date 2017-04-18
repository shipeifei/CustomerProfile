<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="APP行为" name="1">
            <el-row>
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
          data() {
            return {
                activeNames: ['1']
            };
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

