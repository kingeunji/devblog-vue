<template>
  <div>
    <Header />

    <div class="main-wrapper">
	    <section class="blog-list px-3 py-5 p-md-5">
		    <div class="container">

          <h3 class="title mb-1">
            카테고리 관리
          </h3>
          <hr>

          <div style="margin-top: 20px; margin-bottom: 20px;">
            
            <el-tag
              v-for="tag in categoryList"
              :key="tag.name"
              type="success"
              effect="dark"
              closable>
              {{tag.name}}
            </el-tag>
            
          </div>

          <el-row :gutter="20">
            <el-col :span="6">
              <el-input placeholder="카테고리 추가" v-model="name"></el-input>
            </el-col>
            <el-col :span="4">
              <el-button @click.prevent="addCategory">추가</el-button>
            </el-col>
          </el-row>

          


		    </div>
	    </section>
	    
	    <footer class="footer text-center py-2 theme-bg-dark">
	        <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
                <small class="copyright">지니 블로그 관리자 페이지</small>
	    </footer>
    
    </div><!--//main-wrapper-->

  </div>
</template>

<script>
import Header from '../../../components/admin/Header.vue'
import {category} from '../../../api/index'

export default {
  head: {
    link: [
      { rel: 'stylesheet' , href : 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
    ]
  },
  components: {
    Header
  },
  data() {
    return {
      name : '',
      categoryList : []
    }
  },
  created() {
    this.fetchCategory()
  },
  methods : {
    fetchCategory() {
      category.fetch() 
              .then((data) => {
                this.categoryList = data.content
                console.log(this.categoryList)
              })
              .catch((error) => {

              })
    },
    addCategory() {
      if(!this.name) {
        this.$message.error("추가할 카테고리를 입력해주세요")
        return false
      }
      let form = { name : this.name }
      category.create(form)
              .then((data) => {

                this.$notify({
                  title: 'Success',
                  message: '카테고리 업데이트 성공!',
                  type: 'success'
                });

                this.fetchCategory()
                this.name = ''

              })
              .catch((error) => {

              })
    }
  }
  
}
</script>

<style scoped>

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .el-col-4 {
    padding-left: 0px !important; 
  }


</style>
