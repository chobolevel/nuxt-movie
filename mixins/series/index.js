import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getDetail: 'series/getDetail',
      getTopRatedList: 'series/getTopRatedList',
      getPopularList: 'series/getPopularList',
    }),
  },
}
