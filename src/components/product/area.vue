<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="地域" name="1">
            <el-row>
                <el-col :md="12">
                    <product-user-map></product-user-map>
                </el-col>
                <el-col :md="12">
                    <user-area></user-area>
                </el-col>
            </el-row>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import productUserMap from '@/components/charts/productUserMap.vue'
    import userArea from '@/components/charts/area/userArea.vue'

    export default {
        name: 'area',
        components: {
            'productUserMap': productUserMap,
            'userArea': userArea
        },
        data() {
            return {
                activeNames: ['1']
            };
        }
    }
</script>
