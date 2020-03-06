<template>
    <header class="header text-center">	    
	    <h1 class="blog-name pt-lg-4 mb-0"><a href="#">DevLog</a></h1>
        
	    <nav class="navbar navbar-expand-lg navbar-dark" >
           
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>

			<div id="navigation" class="collapse navbar-collapse flex-column" >
				<div class="profile-section pt-3 pt-lg-0">
				    <img class="profile-image mb-3 rounded-circle mx-auto" src="../assets/images/profile.jpeg" alt="image" >			
					
					<div class="bio mb-3">초보개발자 지니 블로그입니다<br>@kokopink12@gmail.com</div><!--//bio-->
					
			        <hr> 
				</div><!--//profile-section-->
				
				<ul class="navbar-nav flex-column text-left">
					<li class="nav-item">
					    <nuxt-link class="nav-link" to="/"><i class="el-icon-s-home"></i> &nbsp; 전체글 <span class="sr-only">(current)</span></nuxt-link>
					</li>
					<li class="nav-item active" style="height: 30px;">
					    <nuxt-link class="nav-link" to="/category"><i class="el-icon-menu"></i>  &nbsp; 카테고리별</nuxt-link>
					</li>
					<li class="nav-item" style="height: 30px;">
					    <nuxt-link class="nav-link" to="/spring">- Spring</nuxt-link>
					</li>
					<li class="nav-item" style="height: 30px;">
					    <nuxt-link class="nav-link" to="/vuejs">- Vue.js</nuxt-link>
					</li>
					<li class="nav-item" style="height: 30px;">
					    <nuxt-link class="nav-link" to="/js">- Javascript</nuxt-link>
					</li>
					<li class="nav-item" style="height: 30px;">
					    <nuxt-link class="nav-link" to="/daily">- Daily</nuxt-link>
					</li>
					
				</ul>
				
				<div class="my-2 my-md-5">
					
				    <a class="btn btn-primary" href="https://github.com/kingeunji" target="_blank">GitHub Link</a>
				    
				</div>
			</div>
		</nav>
    </header>
</template>

<script> 
</script>

<style>

</style>