<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="PC行为偏好" name="1">
            <el-row>
                <el-col :md="8">
                    <download-behavior></download-behavior>
                </el-col>
                <el-col :md="8">
                    <mall-behavior></mall-behavior>
                </el-col>
                <el-col :md="8">
                    <community-behavior></community-behavior>
                </el-col>
            </el-row>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import downloadBehavior from '@/components/charts/behaviors/pcDownloadBehavior.vue'
    import mallBehavior from '@/components/charts/behaviors/mallBehavior.vue'
    import communityBehavior from '@/components/charts/behaviors/communityBehavior.vue'

    export default {
        name: 'pcActionFeature',
        components: {
            'downloadBehavior': downloadBehavior,
            'mallBehavior': mallBehavior,
            'communityBehavior': communityBehavior
        },
        computed: {
        },
        data() {
            return {
                activeNames: ['1']
            };
        },
        created() {
        }
    }
</script>

