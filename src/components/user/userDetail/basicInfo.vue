<template>
    <div class="basic-info">
        <table cellspacing="0" cellpadding="0">
            <thead>
                <th colspan="2">
                    基本属性
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>年龄</td>
                    <td>{{user_datas.userFeature.age}}</td>
                </tr>
                <tr>
                    <td>性别</td>
                    <td>{{user_datas.userFeature.sex}}</td>
                </tr>
                <tr>
                    <td>收入</td>
                    <td>{{user_datas.userFeature.salary}}</td>
                </tr>
                <tr>
                    <td>国家</td>
                    <td>{{user_datas.userFeature.country}}</td>
                </tr>
                <tr>
                    <td>省份</td>
                    <td>{{user_datas.userFeature.province}}</td>
                </tr>
                <tr>
                    <td>城市</td>
                    <td>{{user_datas.userFeature.city}}</td>
                </tr>
                <tr>
                    <td>教育程度</td>
                    <td>{{user_datas.userFeature.education}}</td>
                </tr>
                <tr>
                    <td>职业</td>
                    <td>{{user_datas.userFeature.career}}</td>
                </tr>
                <tr>
                    <td>婚否</td>
                    <td>{{user_datas.userFeature.married}}</td>
                </tr>
                <tr>
                    <td>是否有小孩</td>
                    <td>{{user_datas.userFeature.hasChildren}}</td>
                </tr>
                <tr>
                    <td>是否有车</td>
                    <td>{{user_datas.userFeature.hasCar}}</td>
                </tr>
                <tr>
                    <td>是否学生</td>
                    <td>{{user_datas.userFeature.isStudent}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/babel">
    import { mapGetters } from 'vuex'

    export default {
        name: 'basicInfo',
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
    table {
        float: right;
        margin-right: 60px;
    }
    table thead th {
        padding-bottom: 10px;
        font-size: 20px;
        color: #2578ac;
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
        background-color: #4bc2fe;
        color: #2578ac;
    }
    table tr td:last-child {
        background-color: #cbeafe;
        color: #2578ac;
    }
</style>
