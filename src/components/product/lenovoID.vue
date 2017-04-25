<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="LenovoID" name="1">
            <el-row style="margin-bottom: 20px;">
                <el-col :md="24">
                    <el-tooltip effect="light" content="新老用户区分方式：注册LenovoID是在设备激活之后，标记为新用户，否则为老用户">
                        <div class="tooltip">?</div>
                    </el-tooltip> 
                </el-col>
            </el-row>
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
<style>
    .tooltip {
        border: 1px solid gray; 
        padding: 5px; 
        width: 20px; 
        text-align: center; 
        display: inline-block; 
        border-radius: 3px;
    }
</style>
