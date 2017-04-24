<template>
<div id="phone-model-container" class="chart-container"></div>
</template>
<script type="text/babel">
    import { mapGetters } from 'vuex'
    import PieChart from './common/PieChart'

    export default {
        name: 'phoneModel',
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        mounted() {
            new PieChart('phone-model-container', '手机型号接入',
                this.user_datas.phoneModel.legend,
                this.user_datas.phoneModel.data, true, true);
        }
    }
</script>
