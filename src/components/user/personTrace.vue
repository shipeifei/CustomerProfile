<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 30px;">轨迹</span>
        </div>
        <div class="userProp">
            <user-trace></user-trace>
        </div>
    </el-card>
</template>

<script type="text/babel">
    import $ from 'jquery'
    import userTrace from '@/components/charts/userTrace.vue'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
        name: 'personFeature',
        components: {
            'userTrace': userTrace
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    ul li {
        display: inline-block;
        border: 1px solid black;
        border-right: 0;
        padding: 0 15px;
        margin: 0;
        float: left;
    }
    ul li.active {
        background-color: #20a0ff;
    }
    ul li:last-child {
        border-right: 1px solid black;
    }
    ul.salary li {
        padding-left: 5px;
        padding-right: 5px;
    }
</style>
