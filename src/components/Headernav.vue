<template>
	<header>
		<div class="logo" data-scroll-reveal="enter right over 1s">
			<a href="/">
				<img src="../assets/images/logo.png">
			</a>
		</div>
		<nav class="topnav" data-scroll-reveal="enter bottom over 1s after 1s">
			<router-link to="/home">
				<span>首页</span>
				<span class="en">Home</span>
			</router-link>

			<router-link to="/about">
				<span>关于我</span>
				<span class="en">About</span>
			</router-link>

			<router-link to="/life">
				<span>慢生活</span>
				<span class="en">Life</span>
			</router-link>

	<!-- 		<router-link to="/share">
				<span>模板分享</span>
				<span class="en">Share</span>
			</router-link> -->

			<router-link to="/learn">
				<span>碎言碎语</span>
				<span class="en">Doing</span>
			</router-link>

			<router-link to="/gbook">
				<span>留言</span>
				<span class="en">Saying</span>
			</router-link>
		</nav>
	</header>
</template>
<script>
import '../assets/css/index.css'
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style>
	.head{
		height: 200px;
	}

</style>