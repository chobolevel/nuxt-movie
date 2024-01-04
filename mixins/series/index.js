import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getSeriesDetail: 'series/getDetail',
      getTopRatedSeriesList: 'series/getTopRatedList',
      getPopularSeriesList: 'series/getPopularList',
    }),
  },
}
