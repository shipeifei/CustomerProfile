<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="活跃度" name="1">
            <user-active></user-active>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import $ from 'jquery'
    import userActive from '@/components/charts/preferences/userActive.vue'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
        name: 'personFeature',
        components: {
            'userActive': userActive
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
