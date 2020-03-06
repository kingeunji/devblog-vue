<template>
    <div>
        <Header />

        <div class="main-wrapper">
	    
	    <article class="blog-post px-3 py-5 p-md-5">
		    <div class="container">
			    <header class="blog-post-header">
				    <h2 class="title mb-2"> {{detailInfo.title}}</h2>
				    <div class="meta mb-3"><span class="date"> {{detailInfo.createdDate}} </span><span class="time"> {{detailInfo.viewCnt}} min read</span><span class="comment"><a href="#">0 comments</a></span></div>
			    </header>
			    
			    <div class="blog-post-body">

					<div v-html="detailInfo.content" style="margin-top: 30px;">
					
					</div>
			    </div>

			    <nav class="blog-nav nav nav-justified my-5">
				  <a class="nav-link-prev nav-item nav-link rounded-left" href="index.html">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a class="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav>
				
				<div class="blog-comments-section">
					<div id="disqus_thread"></div>
					<script>
					    /**
					     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT 
					     *  THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR 
					     *  PLATFORM OR CMS.
					     *  
					     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: 
					     *  https://disqus.com/admin/universalcode/#configuration-variables
					     */
					    /*
					    var disqus_config = function () {
					        // Replace PAGE_URL with your page's canonical URL variable
					        this.page.url = PAGE_URL;  
					        
					        // Replace PAGE_IDENTIFIER with your page's unique identifier variable
					        this.page.identifier = PAGE_IDENTIFIER; 
					    };
					    */
					    
					    (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
					        var d = document, s = d.createElement('script');
					        
					        // IMPORTANT: Replace 3wmthemes with your forum shortname!
					        s.src = 'https://3wmthemes.disqus.com/embed.js';
					        
					        s.setAttribute('data-timestamp', +new Date());
					        (d.head || d.body).appendChild(s);
					    })();
					</script>
					<noscript>
					    Please enable JavaScript to view the 
					    <a href="https://disqus.com/?ref_noscript" rel="nofollow">
					        comments powered by Disqus.
					    </a>
					</noscript>
				</div><!--//blog-comments-section-->
				
		    </div><!--//container-->
	    </article>
	    
	    
	    <footer class="footer text-center py-2 theme-bg-dark">
		   
	        <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
                <small class="copyright">Designed with <i class="fas fa-heart" style="color: #fb866a;"></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
		   
	    </footer>
    
    </div><!--//main-wrapper-->
      
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import {post} from '../../api/index'

export default {
    components : { Header }, 
    asyncData() {
        return {
			postId : '',
        }
	},
	data() {
		return {
			detailInfo : '',
			loading : true
		}
	},
    created() {
		this.postId = this.$route.params.id
		this.fetchData()
	},
	methods : {
		fetchData() {
			post.detail(this.postId)
				.then((data) => {
					this.detailInfo = data
					this.loading = false
					console.log(this.detailInfo)
				})
		}
	}
}
</script>

<style>

@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

.blog-post .blog-post-body p, .blog-post .blog-post-body li {
    font-size: 0.9rem !important;
    line-height: 0 !important;
}

* { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; }

pre {
	background-color: #292929 !important;
    border-radius: 6px !important;
    padding: 15px !important;
    color: #fff !important;
    font-size: 13px !important;
}

blockquote {
	border-left: 4px solid #ccc !important;
    margin-bottom: 5px !important;
    margin-top: 5px !important;
    padding-left: 16px !important;
}



</style>