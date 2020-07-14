<template>
  <div id="feed">
    <div class="container">
      <Post
        v-for="video in tempVideoList"
        :key="video.id"
        :title="video.title"
        :author="video.author"
        :videoURL="video.videoURL"
        :tags="video.tags"
      />
    </div>
  </div>
</template>

<script>
import Post from "./Post";
export default {
  data() {
    return {
      tempVideoList: [
        {
          id: "3",
          title: "I'm the Real Omen",
          author: "Noxious",
          videoURL: "2.mp4",
          tags: ["3k", "Flawless", "Omen"]
        },
        {
          id: "2",
          title: "Scoob Clutch",
          author: "Scoob",
          videoURL: "3.mp4",
          tags: ["3k", "Sage"]
        },
        {
          id: "1",
          title: "Basically an Ace",
          author: "Noxious",
          videoURL: "1.mp4",
          tags: ["4k", "Flawless", "Breach"]
        }
      ]
    }
  },
  components: {
    Post
  }
}
</script>

<style scoped>
#feed {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}
.container {
  margin: auto;
  width: 70%;
}
</style>
