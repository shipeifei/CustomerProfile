<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="LenovoID" name="1">
            <el-row>
                <el-col :md="12">
                    <whether-or-not></whether-or-not>
                </el-col>
                <el-col :md="12">
                    <new-old-user></new-old-user>
                </el-col>
            </el-row>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import whetherOrNot from '@/components/charts/lenovoID/whetherOrNot.vue'
    import newOldUser from '@/components/charts/lenovoID/newOldUser.vue'

    export default {
        name: 'lenovoID',
        components: {
            'whetherOrNot': whetherOrNot,
            'newOldUser': newOldUser
        },
        data() {
            return {
                activeNames: ['1']
            };
        }
    }
</script>
