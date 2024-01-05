<template>
  <div class="slide-list-item">
    <img class="movie-img" :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${content.posterPath}`">
  </div>    
</template>

<script>
import { Content } from '../../classes/Content'

export default {
  props: {
    content: Content
  }
}
</script>