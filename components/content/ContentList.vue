<template>
    <div class="slide-list-area">
      <span class="prev-btn" @click="handlePrev">
        <i class="fa-solid fa-chevron-left"></i>
      </span>
      <div class="slide-list-area-inner">
        <content-list-item v-for="content in contentList" :key="content.id" :content="content" />
      </div>
      <span class="next-btn" @click="handleNext">
        <i class="fa-solid fa-chevron-right"></i>
      </span>
    </div>
</template>

<script>
import ContentListItem from './ContentListItem'

export default {
  comments: [ContentListItem],
  props: {
    contentList: Array
  },
  data() {
    return {
      x: 0
    }
  },
  methods: {
    handlePrev(e) {
      this.x += 1100
    },
    handleNext() {
      this.x -= 1100
    }
  }
}
</script>