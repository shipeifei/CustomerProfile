<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="轨迹" name="1">
            <user-trace></user-trace>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import $ from 'jquery'
    import userTrace from '@/components/charts/userTraceHorizontal.vue'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
        name: 'personFeature',
        components: {
            'userTrace': userTrace
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
        }
    }
</script>
