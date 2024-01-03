export const state = () => ({
  detail: {},
  topRatedMovieList: [],
  popularMovieList: [],
})

export const mutations = {
  setDetail(state, detail) {
    state.detail = detail
  },
  setTopRatedList(state, topRatedMovieList) {
    state.topRatedMovieList = topRatedMovieList
  },
  setPopularList(state, popularMovieList) {
    state.popularMovieList = popularMovieList
  },
}

export const actions = {
  async setDetailInfo({ commit }, movieId) {
    const { data } = await this.$axios.get(`tmdb/3/movie/${movieId}`, {
      params: {
        language: process.env.TMDB_LANGUAGE,
      },
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_ACCESS_TOKEN,
      },
    })
    commit('setDetail', data)
  },
  async setTopRatedListInfo({ commit }) {
    const {
      data: { results },
    } = await this.$axios.get(
      `tmdb/3/movie/top_rated?language=${process.env.TMDB_LANGUAGE}&page=1&region=${process.env.TMDB_REGION}`,
      {
        params: {
          language: process.env.TMDB_LANGUAGE,
          page: 1,
          region: process.env.TMDB_REGION,
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
      `tmdb/3/movie/popular?language=${process.env.TMDB_LANGUAGE}&page=1&region=${process.env.TMDB_REGION}`,
      {
        params: {
          language: process.env.TMDB_LANGUAGE,
          page: 1,
          region: process.env.TMDB_REGION,
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
    return state.topRatedMovieList
  },
  getPopularList(state) {
    return state.popularMovieList
  },
}
