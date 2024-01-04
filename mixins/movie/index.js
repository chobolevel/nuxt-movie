import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getDetail: 'movie/getDetail',
      getTopRatedList: 'movie/getTopRatedList',
      getPopularList: 'movie/getPopularList',
      getNowPlayingList: 'movie/getNowPlayingList',
      getUpComingList: 'movie/getUpComingList',
    }),
  },
}
