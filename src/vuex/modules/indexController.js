import Constant from './../service/httpUrl.js'
import http from './../service/httpService.js'
import * as types from './../mutation-types'

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
        http.get(Constant.API.getUserInfo, null,
            (datas) => commit(types.USER_INFO, datas),
            (datas) => commit(types.HTTP_STATUS_ERROR, datas)
        );
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
