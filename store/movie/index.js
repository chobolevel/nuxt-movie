export const state = () => ({
  topRatedMovieList: [],
  popularMovieList: [],
})

export const mutations = {
  setTopRatedMovieList(state, topRatedMovieList) {
    state.topRatedMovieList = topRatedMovieList
  },
  setPopularMovieList(state, popularMovieList) {
    state.popularMovieList = popularMovieList
  },
}

export const actions = {
  async setTopRatedMovieListInfo({ commit }) {
    const {
      data: { results },
    } = await this.$axios.get(
      `tmdb/3/movie/top_rated?language=${process.env.TMDB_LANGUAGE}&page=1&region=${process.env.TMDB_REGION}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: process.env.TMDB_ACCESS_TOKEN,
        },
      }
    )
    commit('setTopRatedMovieList', results)
  },
  async setPopularMovieListInfo({ commit }) {
    const {
      data: { results },
    } = await this.$axios.get(
      `tmdb/3/movie/popular?language=${process.env.TMDB_LANGUAGE}&page=1&region=${process.env.TMDB_REGION}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: process.env.TMDB_ACCESS_TOKEN,
        },
      }
    )
    commit('setPopularMovieList', results)
  },
}

export const getters = {
  getTopRatedMovieList(state) {
    return state.topRatedMovieList
  },
  getPopularMovieList(state) {
    return state.popularMovieList
  },
}
