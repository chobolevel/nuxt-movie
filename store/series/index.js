export const state = () => ({
  detail: {},
  topRatedList: [],
  popularList: [],
})

export const mutations = {
  setDetail(state, detail) {
    state.detail = detail
  },
  setTopRatedList(state, topRatedList) {
    state.topRatedList = topRatedList
  },
  setPopularList(state, popularList) {
    state.popularList = popularList
  },
}

export const actions = {
  async setDetailInfo({ commit }, seriesId) {
    const { data } = await this.$axios.get(`tmdb/3/tv/${seriesId}`, {
      params: {
        language: process.env.TMDB_LANGUAGE,
      },
      headers: {
        langauge: process.env.TMDB_LANGUAGE,
        Authorization: process.env.TMDB_ACCESS_TOKEN,
      },
    })
    commit('setDetail', data)
  },
  async setTopRatedListInfo({ commit }) {
    const {
      data: { results },
    } = await this.$axios.get(
      `tmdb/3/tv/top_rated?language=${process.env.TMDB_LANGUAGE}&page=1`,
      {
        params: {
          language: process.env.TMDB_LANGUAGE,
          page: 1,
        },
        headers: {
          accept: 'application/json',
          Authorization: process.env.TMDB_ACCESS_TOKEN,
        },
      }
    )
    commit('setTopRatedList', results)
  },
  async setPopularListInfo({ commit }) {
    const {
      data: { results },
    } = await this.$axios.get(
      `tmdb/3/tv/popular?language=${process.env.TMDB_LANGUAGE}&page=1`,
      {
        params: {
          language: process.env.TMDB_LANGUAGE,
          page: 1,
        },
        headers: {
          accept: 'application/json',
          Authorization: process.env.TMDB_ACCESS_TOKEN,
        },
      }
    )
    commit('setPopularList', results)
  },
}

export const getters = {
  getDetail(state) {
    return state.detail
  },
  getTopRatedList(state) {
    return state.topRatedList
  },
  getPopularList(state) {
    return state.popularList
  },
}
