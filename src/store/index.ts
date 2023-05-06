import { getToken, setToken, removeToken } from '@/utils/auth';
import { createStore } from 'vuex'

import axios from 'axios';

export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
  avatar: string;
}

export interface UserToken {
  token: string;
  user: UserProps
}

export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
    user: { isLogin: false }

  },
  getters: {
  },
  mutations: {
    
    //获取用户登录信息
    fetchCurrentUser(state, rawData) {
      state.user = { isLogin: true, ...rawData.data }
    },
  },
  actions: {
    //登录操作
    //通过token获取用户信息
    async fetchCurrentUser({ commit }) {
      const token = localStorage.getItem('token');
      const { data } = await axios({
        url:'http://localhost:8080/user/getUserByLogin',
        method: "get",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      },

      )
      commit('fetchCurrentUser', data)
    },
    //组合actions
    loginAndFetch({ dispatch }, loginData) {
      return dispatch('login', loginData).then(() => {
        return dispatch('fetchCurrentUser')
      })
    },

  },
  modules: {
  }
})
