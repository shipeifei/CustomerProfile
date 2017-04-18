import Constant from './../service/httpUrl.js'
import http from './../service/httpService.js'
import localforage from 'localforage'
import $ from 'jquery'
import * as types from './../mutation-types'
import Mock from 'mockjs'
import mockedUsers from './mockedUsers'

Mock.setup({
    timeout: 500
})
Mock.mock('http://www.baidu.com/user', mockedUsers);
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
    getUserInfo({ commit }, identity) {
        commit(types.HTTP_STATUS_BEFORE);
        // http.get(Constant.API.getUserInfo, null,
        //     (datas) => commit(types.USER_INFO, datas),
        //     (datas) => commit(types.HTTP_STATUS_ERROR, datas)
        // );
        
        $.ajax({
            url: Constant.API.getUserInfo,
        }).done(function(data, status, xhr) {
            localStorage.setItem('customer-profile-username',identity);
            // commit(types.USER_INFO, JSON.parse(data));
            commit(types.USER_INFO, mockedUsers.find(user => {
                const baseInfo = user.userBaseInfo;

                return (String(baseInfo.LenovoID) === identity ||
                    baseInfo.phone === identity ||
                    baseInfo.email === identity
                );
            }));
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
