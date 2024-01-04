import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getMovieDetail: 'movie/getDetail',
      getTopRatedMovieList: 'movie/getTopRatedList',
      getPopularMovieList: 'movie/getPopularList',
      getNowPlayingMovieList: 'movie/getNowPlayingList',
      getUpComingMovieList: 'movie/getUpComingList',
    }),
  },
}
