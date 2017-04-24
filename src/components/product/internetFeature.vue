<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="上网特征" name="1">
            <el-row>
                <el-col :md="12">
                    <times></times>
                </el-col>
                <el-col :md="12">
                    <browser></browser>
                </el-col>
            </el-row>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import times from '@/components/charts/internetFeature/times.vue'
    import browser from '@/components/charts/internetFeature/browser.vue'

    export default {
        name: 'internetFeature',
        components: {
            'times': times,
            'browser': browser
        },
        data() {
            return {
                activeNames: ['1']
            };
        }
    }
</script>
