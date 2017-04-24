<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="行为偏好" name="1">
            <el-row>
                <el-col :md="12">
                    <mobile-behavior></mobile-behavior>
                </el-col>
                <el-col :md="12">
                    <pc-behavior></pc-behavior>
                </el-col>
            </el-row>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import pcBehavior from '@/components/charts/behaviors/productPcDownloadBehavior.vue'
    import mobileBehavior from '@/components/charts/behaviors/productMobileDownloadBehavior.vue'

    export default {
        name: 'actionFeature',
        components: {
            'pcBehavior': pcBehavior,
            'mobileBehavior': mobileBehavior
        },
        data() {
            return {
                activeNames: ['1']
            };
        }
    }
</script>
