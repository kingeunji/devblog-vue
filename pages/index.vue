<template>
  <div>
    <Header />

    <div class="main-wrapper">
	    <section class="blog-list px-3 py-5 p-md-5">
		    <div class="container">
			    
          <MainContent />
			    
			    <nav class="blog-nav nav nav-justified my-5">
				  <a class="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a class="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav>
				
		    </div>
	    </section>
	    
	    <footer class="footer text-center py-2 theme-bg-dark">
		   
	        <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
                <small class="copyright">Designed with <i class="fas fa-heart" style="color: #fb866a;"></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
		   
	    </footer>
    
    </div><!--//main-wrapper-->

  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MainContent from '../components/MainContent.vue'

export default {
  head: {
    link: [
      { rel: 'stylesheet' , href : 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
    ]
  },
  components: {
    Header, MainContent
  }
}
</script>

<style>
</style>
