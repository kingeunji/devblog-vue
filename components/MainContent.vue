<template>
  <div>
    <div v-for="item in postList" v-bind:key="item.postId" class="item mb-5">
      <div class="media">
        <img class="mr-3 img-fluid post-thumb d-none d-md-flex" src="../assets/images/blog/blog-post-thumb-1.jpg" alt="image"/>
        <div class="media-body">
          <h3 class="title mb-1">
            <el-tag type="success" size="mini" effect="dark">{{ item.category.name }}</el-tag>

            <nuxt-link :to="'/post/' + item.postId"> {{ item.title }} </nuxt-link>
          </h3>
          <div class="meta mb-1">
            <span class="date">작성시간</span>
            <span class="time">조회수</span>
            <span class="comment">
              <a href="#">댓글수 comments</a>
            </span>
          </div>
          <div class="intro">
          </div>
          <a class="more-link" href="#">Read more &rarr;</a>
        </div>
        <!--//media-body-->
      </div>
      <!--//media-->
    </div>
  </div>
</template>

<script>
import {post} from '../api/index'

export default {
  data() {
    return {
      loading : true,
      postList : []
    }
  },
  created() {
    this.fetchData()
  },
  methods : {
    fetchData() {

      post.fetch()
          .then((data) => {
            this.postList = data.content
            this.loading = false
          })

    }
  }
};
</script>

<style>
</style>