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
					<ul class="social-list list-inline py-3 mx-auto">
			            <li class="list-inline-item"><a href="#"><i class="el-icon-user-solid"></i></a></li>
			            <li class="list-inline-item"><a href="#"><i class="el-icon-user-solid"></i></a></li>
			            <li class="list-inline-item"><a href="#"><i class="el-icon-user-solid"></i></a></li>
			        </ul><!--//social-list-->
			        <hr> 
				</div><!--//profile-section-->
				
				<ul class="navbar-nav flex-column text-left">
					<li class="nav-item">
					    <a class="nav-link" href="index.html"><i class="el-icon-user-solid"></i>Blog Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item active">
					    <a class="nav-link" href="blog-post.html"><i class="fas fa-bookmark fa-fw mr-2"></i>Blog Post</a>
					</li>
					<li class="nav-item">
					    <a class="nav-link" href="about.html"><i class="fas fa-user fa-fw mr-2"></i>About Me</a>
					</li>
				</ul>
				
				<div class="my-2 my-md-3">
					
				    <a class="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank">Get in Touch</a>
				    
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