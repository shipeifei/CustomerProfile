import Constant from './../service/httpUrl.js'
import http from './../service/httpService.js'
import localforage from 'localforage'
import $ from 'jquery'
import * as types from './../mutation-types'
import Mock from 'mockjs'
import mockedUsers from './mockedUsers'
import mockedProducts from './mockedProducts'

Mock.setup({
    timeout: 500
})
Mock.mock(Constant.API.getUserInfo, mockedUsers);
Mock.mock(Constant.API.getProductInfo, mockedProducts);

const state = {
    user_datas: null,
    product_datas: null,
    current_page: 'user_datas',
    home_datas: {},
    fullscreenLoading: false
}

// getters
const getters = {
    user_datas: state => state.user_datas,
    product_datas: state => state.product_datas,
    current_page: state => state.current_page,
    home_datas: state => state.home_datas,
    fullscreenLoading: state => state.fullscreenLoading
}

// actions
const actions = {
    getUserInfo({ commit }, identity) {
        commit(types.HTTP_STATUS_BEFORE);
        $.ajax({
            url: Constant.API.getUserInfo,
        }).done(function(data, status, xhr) {
            localStorage.setItem('customer-profile-username', identity);
            commit(types.USER_INFO, mockedUsers.find(user => {
                const baseInfo = user.userBaseInfo;

                return (String(baseInfo.LenovoID) === identity ||
                    baseInfo.phone === identity ||
                    baseInfo.email === identity
                );
            }));
        })
    },
    getProductInfo({ commit }, identity) {
        commit(types.HTTP_STATUS_BEFORE);
        $.ajax({
            url: Constant.API.getUserInfo,
        }).done(function(data, status, xhr) {
            localStorage.setItem('customer-profile-productname', identity);
            commit(types.PRODUCT_INFO, mockedProducts.find(product => {
                return (product.basic.name === identity);
            }));
        })
    },
    changeCurrentPage({ commit }, current_page) {
        commit(types.CURRENT_PAGE, current_page);
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
    [types.PRODUCT_INFO](state, datas) {
        state.product_datas = datas;
        state.fullscreenLoading = false;
    },
    [types.HTTP_STATUS_BEFORE](state) {
        state.fullscreenLoading = true;
    },
    [types.CURRENT_PAGE](state, current_page) {
        state.current_page = current_page;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
