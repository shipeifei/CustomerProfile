<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="手机行为偏好" name="1">
            <el-row>
                <el-col :md="8">
                    <download-behavior></download-behavior>
                </el-col>
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
    import downloadBehavior from '@/components/charts/behaviors/mobileDownloadBehavior.vue'
    import mediaPreference from '@/components/charts/preferences/mediaPreference.vue'
    import consumePreference from '@/components/charts/preferences/consumePreference.vue'

    export default {
        name: 'mobileActionFeature',
        components: {
            'downloadBehavior' :downloadBehavior,
            'mediaPreference' :mediaPreference,
            'consumePreference' :consumePreference
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

