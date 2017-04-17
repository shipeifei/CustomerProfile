<template>
    <div>
        <table cellspacing="0" cellpadding="0">
            <thead>
                <th colspan="2">
                    消费购物
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>消费偏好领域</td>
                    <td>住宅家具：1、化妆品：2</td>
                </tr>
                <tr>
                    <td>偏好品类</td>
                    <td>传统糕点：1、简易衣服：2</td>
                </tr>
                <tr>
                    <td>偏好价格区间</td>
                    <td>0-100：2、500以上：1</td>
                </tr>
                <tr>
                    <td>消费频率</td>
                    <td>3.0</td>
                </tr>
                <tr>
                    <td>近期消费次数</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>近期消费总额</td>
                    <td>725.0</td>
                </tr>
                <tr>
                    <td>使用手机类型</td>
                    <td>Moto Z</td>
                </tr>
                <tr>
                    <td>信用等级</td>
                    <td></td>
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
