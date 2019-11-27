<template>
	
	<view class="content">
		<view class="vip-card ">
			<view class="item" >
				<!-- {{index}} -->
			</view>
		</view>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.top{
		height:200upx;
		width:690upx;
		backgroundColor:#FF6000;
	}
	.vip-card{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background: #FFF;
		.item{
			width: 690upx;
			height: 200upx;
			background:#FF6000;
			border-radius: 10upx;
			background: #FF6000;
		}
	}
</style>
