<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="用户标签" name="1">
            <user-detail></user-detail>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import userDetail from '@/components/user/userDetail/index.vue'
    import { mapGetters } from 'vuex'

    export default {
        name: 'wordArt',
        components: {
            'userDetail': userDetail
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
