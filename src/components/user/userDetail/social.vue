<template>
    <div>
        <table cellspacing="0" cellpadding="0">
            <thead>
                <th colspan="2">
                    社区社交图谱
                </th>
            </thead>
            <tbody>
                <tr v-for="s in user_datas.social">
                    <td>{{s[0]}}</td>
                    <td :title="s[1]">{{s[1]}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/babel">
    import { mapGetters } from 'vuex'

    export default {
        name: 'social',
        components: {
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        created() {
        }
    }
</script>

<style scoped>
    table thead th {
        padding-bottom: 10px;
        font-size: 20px;
        color: #6732be;
    }
    table tr {
        height: 30px;
    }
    table tr td {
        min-width: 80px;
        padding: 0 10px;
        text-align: center;
        border-bottom: 1px solid white;
    }
    table tr td:first-child {
        background-color: #8a49fd;
        color: #6732be;
    }
    table tr td:last-child {
        background-color: #ceb7ff;
        color: #6732be;
    }
</style>
