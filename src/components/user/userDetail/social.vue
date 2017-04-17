<template>
    <div>
        <table cellspacing="0" cellpadding="0">
            <thead>
                <th colspan="2">
                    交际圈
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>交际偏好领域</td>
                    <td></td>
                </tr>
                <tr>
                    <td>微博粉丝数</td>
                    <td>246</td>
                </tr>
                <tr>
                    <td>微博关注数</td>
                    <td>270</td>
                </tr>
                <tr>
                    <td>微博互粉数</td>
                    <td>85</td>
                </tr>
                <tr>
                    <td>微博认证类型</td>
                    <td>无认证</td>
                </tr>
                <tr>
                    <td>微博认证原因</td>
                    <td></td>
                </tr>
                <tr>
                    <td>微博个人标签</td>
                    <td></td>
                </tr>
                <tr>
                    <td>qq群偏好特征</td>
                    <td></td>
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
