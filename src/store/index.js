import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        users: []
    },
    getters: {
      getNews: (state) => state.users
    },
    actions: {
      async fetchUsers({ commit }) {
          try {
            const data = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=edc080fe41074cae8494fe955ad8089a')
              commit('SET_USERS', data.data.articles)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
    mutations: {
        SET_USERS(state, users) {
          state.users = users
      }
    }
})