<template>
	<div class="box">
		<img src="static/cat2.jpg">
		<p>{{msg}}</p>
		<div class="tool-box">
			<i>用户</i>
			<i>点赞</i>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				//message : "hyh"
			}
		},
		props:['msg']
	}
</script>
<style lang="less" scoped>
	.box{
		position: relative;
		
		margin: 10px 0px;
		padding: 10px;

		display: flex;

		background-color: #fff;

		border-width: 0.15rem;
		border-color: #ccc;
		border-radius: 5px;
		box-shadow: 0 3px 10px 0 rgba(91, 115, 146, 0.15);

		img{
			width: 2rem;
			height: 100%;
			margin-right: 0.4rem;

		}
		p{
			height: auto;
		}
	}
	.list-con{
		position: relative;
	}
	.tool-box{
		position: absolute;
		bottom: 10px;
		right: 15px;
	}
</style>