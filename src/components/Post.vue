<template>
  <article class="post" ref="postInstance">
    <section class="postHeader">
      <div class="postTitleSection">
        <h2 class="postTitle">{{ title }}</h2>
        <div class="postTags">
          <span class="postTagItem" v-for="tag in tags" :key="tag">
            #{{ tag }}
          </span>
        </div>
      </div>
      <span class="postAuthor">{{ author }}</span>
    </section>
    <section class="videoContainer">
      <video
        ref="videoInstance"
        :src="'videos/' + videoURL"
        width="100%"
        height="auto"
        preload="metadata"
        muted
        controls
        loop
      ></video>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    author: String,
    videoURL: String,
    tags: Array
  },
  mounted: function() {
    const feed = document.getElementById("feed");
    feed.addEventListener("scroll", () => {
      const postInstance = this.$refs.postInstance;
      const videoInstance = this.$refs.videoInstance;
      //Bounds of post
      const bounds = postInstance.getBoundingClientRect();
      //1/3 of the feed
      const threshold = feed.scrollTop / 3;
      //1/3 of the post
      const thirdOfPost = bounds.height / 3;

      //If video is not playing, and elements scrolls into top 1/3 of view, start playing
      if (
        bounds.top > 0 &&
        bounds.top < threshold &&
        thirdOfPost &&
        videoInstance.paused
      ) {
        videoInstance.play();
      }

      //If video is playing
      if (!videoInstance.paused) {
        //and the video is no longer in the top 1/3 of view, stop playing
        //When scrolling out of the screen, let video play until 1/3 of post is no longer in view
        if (bounds.top < thirdOfPost * -1 || bounds.top > threshold) {
          videoInstance.pause();
        }
      }
    });
  }
};
</script>

<style scoped>
.post {
  border: solid black 3px;
  border-radius: 5px;
  overflow: hidden;
  margin: 25px 0px;
}

.postAuthor {
  font-style: italic;
  font-weight: bold;
}

.postHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: solid #ccff66 1px;
  background-color: #444;
}

.videoContainer {
  font-size: 0px;
}

.postTitleSection {
  text-align: left;
  margin-bottom: 15px;
}

.postTitle {
  margin-bottom: 0px;
}

.postTags {
  color: #fff;
  font-style: italic;
}
</style>
