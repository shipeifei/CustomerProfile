<template>
    <div>
        <table cellspacing="0" cellpadding="0">
            <thead>
                <th colspan="2">
                    消费购物服务
                </th>
            </thead>
            <tbody>
                <tr v-for="c in user_datas.consumer">
                    <td>{{c[0]}}</td>
                    <td :title="c[1]">{{c[1]}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/babel">
    import { mapGetters } from 'vuex'

    export default {
        name: 'consumer',
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
        color: #916917;
    }
    table tr {
        height: 30px;
    }
    table tr td {
        max-width: 120px;
        padding: 0 10px;
        text-align: center;
        border-bottom: 1px solid white;
        text-overflow: ellipsis;
        white-space: nowrap; 
        overflow: hidden; 
    }
    table tr td:first-child {
        background-color: #febf4d;
        color: #916917;
    }
    table tr td:last-child {
        background-color: #fedea6;
        color: #916917;
    }
</style>
