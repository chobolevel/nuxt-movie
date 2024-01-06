<template>
  <section>
    <div class="main-content">
      <div class="main-content-inner">
        <div class="main-content-title">
          <img :src="mainImgTitle" alt="" />
        </div>
        <div class="main-content-desc">
          <p>어느 조직 보스의 아들이 존 윅의 차를 훔치고 그의 반려견도 죽인다.<br>
            그러자 세상 무서울 것 없는 전직 킬러 존 윅은 조직 전체를 상대로 피비린내 나는 복수를 시작한다.</p>
        </div>
        <div class="main-content-btn-area">
          <button>재생</button>
          <button>상세정보</button>
        </div>
      </div>
    </div>
    <div class="content-container">
      <content-list :contentList="getUpComingMovieList" />
      <content-list :contentList="getNowPlayingMovieList" />
      <content-list :contentList="getTopRatedMovieList" />
      <content-list :contentList="getPopularMovieList" />
    </div>
  </section>
</template>

<script>
import ContentList from '../components/content/ContentList'
import ContentListItem from '../components/content/ContentListItem'
import { MovieMixins } from '../mixins/index'

export default {
  head: {
    title: '홈 - 넷플릭스'
  },
  components: { ContentListItem, ContentList },
  mixins: [MovieMixins],
  async asyncData({ store }) {
    await store.dispatch('movie/setUpComingListInfo')
    await store.dispatch('movie/setNowPlayingListInfo')
    await store.dispatch('movie/setTopRatedListInfo')
    await store.dispatch('movie/setPopularListInfo')
  },
  computed: {
    mainImgTitle() {
      return 'https://occ-0-1360-1361.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdc5aIBDakJ6uA1OJJxUW_F3wABP6VxJQtSUC1PLAOPhL9ndRo7P7mTqn9np_87Tdre0b3FYcj-YXvX2fah6LJNkrZWr7BL9sWef-54pC2GW.webp?r=6f3'
    }
  }
}
</script>
