<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="家庭状况" name="1">
            <el-row>
                <el-col :md="8">
                    <sex></sex>
                </el-col>
                <el-col :md="8">
                    <married></married>
                </el-col>
                <el-col :md="8">
                    <baby></baby>
                </el-col>
            </el-row>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import sex from '@/components/charts/familyStatus/sex.vue'
    import married from '@/components/charts/familyStatus/married.vue'
    import baby from '@/components/charts/familyStatus/baby.vue'

    export default {
        name: 'familyStatus',
        components: {
            'sex': sex,
            'married': married,
            'baby': baby
        },
        data() {
            return {
                activeNames: ['1']
            };
        }
    }
</script>
