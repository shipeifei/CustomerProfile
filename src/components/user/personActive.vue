<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 30px;">用户活跃度</span>
        </div>
        <div class="userProp">
            <user-active></user-active>
        </div>
    </el-card>
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
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        }
    }
</script>
