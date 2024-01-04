import { Content } from '../../classes/Content'

export const state = () => ({
  detail: {},
  topRatedList: [],
  popularList: [],
  nowPlayingList: [],
  upComingList: [],
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
  setNowPlayingList(state, nowPlayingList) {
    state.nowPlayingList = nowPlayingList
  },
  setUpComingList(state, upComingList) {
    state.upComingList = upComingList
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
    } = await this.$axios.get(`tmdb/3/movie/top_rated`, {
      params: {
        language: process.env.TMDB_LANGUAGE,
        page: 1,
        region: process.env.TMDB_REGION,
      },
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_ACCESS_TOKEN,
      },
    })
    commit('setTopRatedList', results)
  },
  async setPopularListInfo({ commit }) {
    const {
      data: { results },
    } = await this.$axios.get(`tmdb/3/movie/popular`, {
      params: {
        language: process.env.TMDB_LANGUAGE,
        page: 1,
        region: process.env.TMDB_REGION,
      },
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_ACCESS_TOKEN,
      },
    })
    commit('setPopularList', results)
  },
  async setNowPlayingListInfo({ commit }) {
    const {
      data: { results },
    } = await this.$axios.get(`tmdb/3/movie/now_playing`, {
      params: {
        language: process.env.TMDB_LANGUAGE,
        page: 1,
        region: process.env.TMDB_REGION,
      },
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_ACCESS_TOKEN,
      },
    })
    commit('setNowPlayingList', results)
  },
  async setUpComingListInfo({ commit }) {
    const {
      data: { results },
    } = await this.$axios.get('tmdb/3/movie/upcoming', {
      params: {
        language: process.env.TMDB_LANGUAGE,
        page: 1,
        region: process.env.TMDB_REGION,
      },
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_ACCESS_TOKEN,
      },
    })
    commit('setUpComingList', results)
  },
}

export const getters = {
  getDetail(state) {
    return new Content(state.detail)
  },
  getTopRatedList(state) {
    return state.topRatedList.map((movie) => new Content(movie))
  },
  getPopularList(state) {
    return state.popularList.map((movie) => new Content(movie))
  },
  getNowPlayingList(state) {
    return state.nowPlayingList.map((movie) => new Content(movie))
  },
  getUpComingList(state) {
    return state.upComingList.map((movie) => new Content(movie))
  },
}
