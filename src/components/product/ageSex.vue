<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="用户性别年龄分布" name="1">
            <el-row>
                <el-col :md="12">
                    <sex></sex>
                </el-col>
                <el-col :md="12">
                    <age></age>
                </el-col>
            </el-row>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import sex from '@/components/charts/ageSex/sex.vue'
    import age from '@/components/charts/ageSex/age.vue'

    export default {
        name: 'actionFeature',
        components: {
            'sex': sex,
            'age': age
        },
        data() {
            return {
                activeNames: ['1']
            };
        }
    }
</script>
