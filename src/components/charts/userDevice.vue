<template>
<div id="user-device-chart-container" class="chart-container"></div>
</template>
<script type="text/babel">
    import { mapGetters } from 'vuex'
    import PieChart from './common/PieChart'

    export default {
        name: 'userDevice',
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        mounted() {
            new PieChart('user-device-chart-container', '设备接入',
                this.user_datas.userDevice.legend,
                this.user_datas.userDevice.data, true, true);
        }
    }
</script>
