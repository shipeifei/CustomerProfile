<template>
    <div>
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
                    <td>中国</td>
                </tr>
                <tr>
                    <td>省份</td>
                    <td>广西</td>
                </tr>
                <tr>
                    <td>城市</td>
                    <td>柳州</td>
                </tr>
                <tr>
                    <td>星座</td>
                    <td>白羊座</td>
                </tr>
                <tr>
                    <td>血型</td>
                    <td>A型</td>
                </tr>
                <tr>
                    <td>学校</td>
                    <td>北京大学</td>
                </tr>
                <tr>
                    <td>学历</td>
                    <td>{{user_datas.userFeature.education}}</td>
                </tr>
                <tr>
                    <td>工作</td>
                    <td>{{user_datas.userFeature.job}}</td>
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
