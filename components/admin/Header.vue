<template>
    <header class="header text-center">	    
	    <h1 class="blog-name pt-lg-4 mb-0"><a href="#">DevLog Admin</a></h1>
        
	    <nav class="navbar navbar-expand-lg navbar-dark" >
           
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>

			<div id="navigation" class="collapse navbar-collapse flex-column" >
				<div class="profile-section pt-3 pt-lg-0">
				    <img class="profile-image mb-3 rounded-circle mx-auto" src="../../assets/images/profile.jpeg" alt="image" >			
					
					<div class="bio mb-3">지니블로그 관리자 페이지<br>@1일1포스트</div><!--//bio-->
			        <hr> 
				</div><!--//profile-section-->
				
				<ul class="navbar-nav flex-column text-left">
					<li class="nav-item">
					    <nuxt-link class="nav-link" to="/admin/post">블로그 글쓰기</nuxt-link>
					</li>
					<li class="nav-item active">
					    <a class="nav-link" href="blog-post.html">카테고리 관리</a>
					</li>
				</ul>
				
				<div class="my-2 my-md-3">
					
				    <a class="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank">블로그 통계</a>
				    
				</div>
			</div>
		</nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>