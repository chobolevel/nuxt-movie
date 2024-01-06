<template>
    <div class="content-list-area">
      <span class="prev-btn" @click="handlePrev">
        {{ '<' }}
      </span>
      <div class="content-list-area-inner">
        <content-list-item v-for="content in contentList" :key="content.id" :content="content" />
      </div>
      <span class="next-btn" @click="handleNext">
        {{ '>' }}
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