<template>
  <div>
    <Header />

    <div class="main-wrapper">
	    <section class="blog-list px-3 py-5 p-md-5">
		    <div class="container">
			    
          <section class="container" style="height: 500px; margin-bottom: 80px;">

            <el-row :gutter="24" style="margin-bottom : 10px;">
              <el-col :span="6">
                <el-select v-model="category" placeholder="카테고리">
                  <el-option
                    v-for="item in categorys"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="18">
                <el-input placeholder="제목" v-model="title"></el-input>
              </el-col>
            </el-row>
            

            <div class="quill-editor" style="height: 450px;"
                :content="content"
                @change="onEditorChange($event)"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                v-quill:myQuillEditor="editorOption">
            </div>

            <div style="text-align: right; margin-top: 10px;">
                <el-button>미리보기</el-button>
                <el-button type="success" @click="uploadPost">글 올리기</el-button>
            </div>
          </section>
				
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
import {post} from '../../../api/index'

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
      categorys: [{
          value: 2,
          label: '개발'
      }, {
          value: 3,
          label: '백엔드'
      }, {
          value: 10,
          label: 'daily'
      }],
      category : '',
      title : '',
      content: '',
      editorOption: {
          // some quill options
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
          }
      }
    }
  },
  mounted() {
    
  },
  methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        this.content = html
      },
      uploadPost() {
        if(!this.validCheck()) {
          return false
        }
        let form = {
          content : this.content,
          title : this.title,
          category : {
            categoryId : this.category
          }
        }
        post.create(form)
            .then((data) => {
              this.$notify({
                title: 'Success',
                message: '게시글 올리기 성공!',
                type: 'success'
              });
            })
            .catch((error) => {

            })
        console.log(form)
      },
      validCheck() {
        if(!this.title) {
          this.$message.error("제목을 입력해주세요!")
          return false
        } else if(!this.category) {
          this.$message.error("카테고리를 선택해주세요!")
          return false
        } else if(!this.content) {
          this.$message.error("내용을 입력해주세요!")
          return false
        }
        return true
      }
  }
  
}
</script>

<style scoped>

.el-col-18 {
  padding-left: 0px !important; 
}

.quill-editor {
      min-height: 200px;
      max-height: 700px;
      overflow-y: auto;
}

</style>
