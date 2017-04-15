<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">个人属性</span>
        </div>
        <div class="userProp">
            <el-row>
                <el-col :md="6">
                    <el-form label-width="80px" v-if="user_datas.userFeature">
                        <el-form-item label="注册源头">
                            <el-input :disabled="true" :value="user_datas.userFeature.origin"></el-input>
                        </el-form-item>
                        <el-form-item label="年龄">
                            <el-input :disabled="true" :value="user_datas.userFeature.age"></el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-input :disabled="true" :value="user_datas.userFeature.sex"></el-input>
                        </el-form-item>
                        <el-form-item label="学历">
                            <el-input :disabled="true" :value="user_datas.userFeature.education"></el-input>
                        </el-form-item>
                        <el-form-item label="收入">
                            <el-input :disabled="true" :value="user_datas.userFeature.salary"></el-input>
                        </el-form-item>
                        <el-form-item label="职业">
                            <el-input :disabled="true" :value="user_datas.userFeature.job"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :md="18">
                    <user-device></user-device>
                </el-col>
            </el-row>
            <el-row>
                <el-col :md="10">
                    <user-map></user-map>
                </el-col>
                <el-col :md="14">
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

