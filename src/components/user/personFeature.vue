<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">基本信息</span>
        </div>
        <div class="userProp">
            <el-row>
                <el-col :md="12">
                    <el-form label-width="80px" v-if="user_datas.userFeature">
                        <el-form-item label="年龄">
                            <ul>
                                <li :class="[user_datas.userFeature.age < 18 ? 'active': '']">
                                    18以下
                                </li>
                                <li :class="[(user_datas.userFeature.age >= 18 && user_datas.userFeature.age <= 25) ? 'active': '']">
                                    18-25
                                </li>
                                <li :class="[(user_datas.userFeature.age >= 26 && user_datas.userFeature.age <= 45) ? 'active' : '']">
                                    26-35
                                </li>
                                <li :class="[(user_datas.userFeature.age >= 36 && user_datas.userFeature.age <= 60) ? 'active' : '']">
                                    36-60
                                </li>
                                <li :class="[user_datas.userFeature.age > 60 ? 'active' : '']">
                                    60以上
                                </li>
                            </ul>
                        </el-form-item>
                        <el-form-item label="性别">
                            <ul>
                                <li :class="[user_datas.userFeature.sex == '男' ? 'active': '']">
                                    男
                                </li>
                                <li :class="[user_datas.userFeature.sex == '女' ? 'active' : '']">
                                    女
                                </li>
                            </ul>
                        </el-form-item>
                        <el-form-item label="学历">
                            <ul>
                                <li :class="[user_datas.userFeature.education === '专科' ? 'active': '']">
                                    专科
                                </li>
                                <li :class="[user_datas.userFeature.education === '本科' ? 'active': '']">
                                    本科
                                </li>
                                <li :class="[user_datas.userFeature.education === '硕士' ? 'active' : '']">
                                    硕士
                                </li>
                                <li :class="[user_datas.userFeature.education === '博士' ? 'active' : '']">
                                    博士
                                </li>
                                <li :class="[(user_datas.userFeature.education != '专科' && user_datas.userFeature.education != '本科' && user_datas.userFeature.education != '硕士' && user_datas.userFeature.education != '博士') ? 'active' : '']">
                                    其它
                                </li>
                            </ul>
                        </el-form-item>
                        <el-form-item label="收入">
                            <ul class="salary">
                                <li :class="[user_datas.userFeature.salary < 3000 ? 'active': '']">
                                    3000以下
                                </li>
                                <li :class="[(user_datas.userFeature.salary >= 3000 && user_datas.userFeature.salary <= 6000) ? 'active': '']">
                                    3000-6000
                                </li>
                                <li :class="[(user_datas.userFeature.salary > 6000 && user_datas.userFeature.salary <= 10000) ? 'active' : '']">
                                    6001-10000
                                </li>
                                <li :class="[(user_datas.userFeature.salary > 10000 && user_datas.userFeature.salary <= 15000) ? 'active' : '']">
                                    10001-15000
                                </li>
                                <li :class="[user_datas.userFeature.salary > 15000 ? 'active' : '']">
                                    15000以上
                                </li>
                            </ul>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :md="18" :push="2">
                    <user-device></user-device>
                </el-col>
            </el-row>
            <el-row>
                <el-col :md="12">
                    <user-map></user-map>
                </el-col>
                <el-col :md="12">
                    <phone-model></phone-model>
                </el-col>
            </el-row>
        </div>
    </el-card>
</template>


<script type="text/babel">
    import $ from 'jquery'
    import localforage from 'localforage'
    import userDevice from '@/components/charts/userDevice.vue'
    import userMap from '@/components/charts/userMap.vue'
    import phoneModel from '@/components/charts/phoneModel.vue'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
          name: 'personFeature',
          components: {
            'userDevice': userDevice,
            'userMap': userMap,
            'phoneModel': phoneModel
          },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        created () {
            //this.$store.dispatch('getHomeInfo')
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    ul li {
        display: inline-block;
        border: 1px solid black;
        border-right: 0;
        padding: 0 15px;
        margin: 0;
        float: left;
    }
    ul li.active {
        background-color: #20a0ff;
    }
    ul li:last-child {
        border-right: 1px solid black;
    }
    ul.salary li {
        padding-left: 5px;
        padding-right: 5px;
    }
</style>
