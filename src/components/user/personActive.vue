<template>
<<<<<<< e6844dfc3c69b183716dafedc1f541b2e7976dd7
    <el-collapse v-model="activeNames">
        <el-collapse-item title="用户活跃度" name="1">
=======
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">活跃度</span>
        </div>
        <div class="userProp">
>>>>>>> fixed user active
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
