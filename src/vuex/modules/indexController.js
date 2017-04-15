import Constant from './../service/httpUrl.js'
import http from './../service/httpService.js'
import $ from 'jquery'
import * as types from './../mutation-types'
import Mock from 'mockjs'
Mock.setup({
    timeout: 400
})
Mock.mock('http://www.baidu.com/user', {
    'userBaseInfo': {
        "LenovoID": Mock.Random.range(1, 10, 2),
        "phone": /1[3｜5|8]\d{5,10}/,
        "email": Mock.Random.first() + "@163.com",
        "IMEI": "暂无",
        "MicroblogID": "暂无",
        "WechatID": "暂无",
        "serviceUsersID": "暂无"
    },
    "userFeature": {
        "origin": "商城",
        'age|1-100': 100,
        "sex": "男",
        "education": /['本科'|'专科'|'研究生'|'博士']/,
        "salary": Mock.Random.integer(10000, 19999) + "-" + Mock.Random.integer(20000, 30000),
        "job": "IT工程师"
    },
    "userDevice": {
        "legend": ["PC", "Mobile", "Tablet"],
        "series": [
            { "value": Mock.Random.integer(100, 200), "name": "PC" },
            { "value": Mock.Random.integer(300, 400), "name": "Mobile" },
            { "value": Mock.Random.integer(200, 300), "name": "Tablet" }
        ]
    },
    "phoneModel": {
        "legend": ['Iphone7', 'ZUK Z2 Pro', 'Vivo', 'XiaoMi'],
        "series": [
            { value: Mock.Random.integer(1000, 2000), name: 'Iphone7' },
            { value: Mock.Random.integer(300, 6000), name: 'ZUK Z2 Pro' },
            { value: Mock.Random.integer(130, 200), name: 'Vivo' },
            { value: Mock.Random.integer(110, 200), name: 'XiaoMi' }
        ]
    }
});
const state = {
    user_datas: null,
    home_datas: {},
    fullscreenLoading: false
}

// getters
const getters = {
    user_datas: state => state.user_datas,
    home_datas: state => state.home_datas,
    fullscreenLoading: state => state.fullscreenLoading
}

// actions
const actions = {
    getUserInfo({ commit }) {
        commit(types.HTTP_STATUS_BEFORE);
        // http.get(Constant.API.getUserInfo, null,
        //     (datas) => commit(types.USER_INFO, datas),
        //     (datas) => commit(types.HTTP_STATUS_ERROR, datas)
        // );
        $.ajax({
            url: Constant.API.getUserInfo,
        }).done(function(data, status, xhr) {
            commit(types.USER_INFO, JSON.parse(data));
            //console.log(
            //  JSON.stringify(data, null, 4)
            //)
        })
    }
}

const mutations = {
    [types.HTTP_STATUS_ERROR](state, datas) {
        state.fullscreenLoading = false;
    },
    [types.USER_INFO](state, datas) {
        state.user_datas = datas;
        state.fullscreenLoading = false;
    },
    [types.HTTP_STATUS_BEFORE](state) {
        state.fullscreenLoading = true;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
