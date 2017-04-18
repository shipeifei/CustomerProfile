<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 30px;">基本信息</span>
        </div>
        <div class="userProp">
            <el-row>
                <el-col :md="18">
                    <user-info></user-info>
                    <div class="basic_info">
                        <el-form label-width="60px" v-if="user_datas.userFeature">
                            <el-form-item label="年龄：">
                                <ul>
                                    <li :class="[user_datas.userFeature.age <= 18 ? 'active': '']">
                                        18岁以下
                                    </li>
                                    <li :class="[(user_datas.userFeature.age >= 19 && user_datas.userFeature.age <= 24) ? 'active': '']">
                                        19-24
                                    </li>
                                    <li :class="[(user_datas.userFeature.age >= 25 && user_datas.userFeature.age <= 34) ? 'active' : '']">
                                        25-34
                                    </li>
                                    <li :class="[(user_datas.userFeature.age >= 35 && user_datas.userFeature.age <= 49) ? 'active' : '']">
                                        35-49
                                    </li>
                                    <li :class="[user_datas.userFeature.age >= 50 ? 'active' : '']">
                                        50以上
                                    </li>
                                </ul>
                            </el-form-item>
                            <el-form-item label="性别：">
                                <ul>
                                    <li :class="[user_datas.userFeature.sex == '男' ? 'active': '']">
                                        男
                                    </li>
                                    <li :class="[user_datas.userFeature.sex == '女' ? 'active' : '']">
                                        女
                                    </li>
                                </ul>
                            </el-form-item>
                            <el-form-item label="学历：">
                                <ul>
                                    <li :class="[user_datas.userFeature.education === '高中、中专及以下' ? 'active': '']">
                                        高中、中专及以下
                                    </li>
                                    <li :class="[user_datas.userFeature.education === '大专、本科' ? 'active': '']">
                                        大专、本科
                                    </li>
                                    <li :class="[user_datas.userFeature.education === '硕士' ? 'active' : '']">
                                        硕士
                                    </li>
                                    <li :class="[user_datas.userFeature.education === '硕士以上' ? 'active' : '']">
                                        硕士以上
                                    </li>
                                </ul>
                            </el-form-item>
                            <el-form-item label="收入：">
                                <ul class="salary">
                                    <li :class="[user_datas.userFeature.salary < 3500 ? 'active': '']">
                                        3500以下
                                    </li>
                                    <li :class="[(user_datas.userFeature.salary >= 3500 && user_datas.userFeature.salary < 8000) ? 'active': '']">
                                        3500-8000
                                    </li>
                                    <li :class="[(user_datas.userFeature.salary >= 8000 && user_datas.userFeature.salary < 10000) ? 'active' : '']">
                                    8000-10000
                                    </li>
                                    <li :class="[(user_datas.userFeature.salary >= 10000 && user_datas.userFeature.salary < 15000) ? 'active' : '']">
                                        10000-15000
                                    </li>
                                    <li :class="[user_datas.userFeature.salary >= 15000 ? 'active' : '']">
                                        15000以上
                                    </li>
                                </ul>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
                <el-col :md="6">
                    <img v-if="user_datas.userFeature.sex === '男'" src="../../assets/images/wordArtBoy.png" alt=""></img>
                    <img v-else src="../../assets/images/wordArtGirl.png" alt=""></img>
                </el-col>
            </el-row>
            <el-row style="margin-top: 50px;">
                <el-col :md="6">
                    <user-device></user-device>
                </el-col>
                <el-col :md="8">
                    <phone-model></phone-model>
                </el-col>
                <el-col :md="8">
                    <user-map></user-map>
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
    import userInfo from '@/components/user/userInfo.vue'
    import { mapGetters } from 'vuex'
    var echarts = require('echarts');
    export default {
          name: 'personFeature',
          components: {
            'userDevice': userDevice,
            'userMap': userMap,
            'phoneModel': phoneModel,
            'userInfo': userInfo
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
    .basic_info {
        margin-top: 8px;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    ul li {
        display: inline-block;
        padding: 0 15px;
        margin: 0;
        float: left;
        border-radius: 2px;
        font-size: 13px;
        height: 30px;
        line-height: 30px;
        width: 120px;
        text-align: center;
        color: #48576a;
    }
    ul li.active {
        border-color: #20a0ff;
        background-color: #20a0ff;
        color: #fff;
        cursor: default;
    }
    img {
        width: 180px;
        height: 300px;
    }
</style>
