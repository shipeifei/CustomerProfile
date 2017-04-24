<template>
<div>
    <div id="pc-download-behavior-chart-container" class="chart-container"></div>
</div>
</template>
<script type="text/babel">
    import { mapGetters } from 'vuex'
    import PieChart from '../common/PieChart'

    export default {
        name: 'pcDownloadBehavior',
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        mounted() {
            new PieChart('pc-download-behavior-chart-container', '应用',
                this.user_datas.pcApps.legend,
                this.user_datas.pcApps.data, false, false, (option) => {
                    option.series[0].center = ['50%', '55%'];
                });
        }
    }
</script>
