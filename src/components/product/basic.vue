<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="用户基本特征概览" name="1">
            <product-basic></product-basic>
        </el-collapse-item>
    </el-collapse>
</template>

<script type="text/babel">
    import productBasic from '@/components/charts/basic/productBasic.vue'
    export default {
        name: 'basic',
        components: {
          "productBasic": productBasic
        },
        data() {
            return {
                activeNames: ['1']
            };
        }
    }
</script>
