<template>
	<view>
		<view>
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view>{{nickname}}</view>
						<view class="text-gray text-sm flex justify-between">
							14分钟前
						</view>
					</view>
				</view>
			</view>
			<view class="two">		
				秋季滋补从每一餐开始，秋季滋补从每一餐开始，秋季滋补从每一餐开始，秋季滋补从每一餐开始。
			</view>
			<view class="max">
				<image class="tab-icon" src="../../static/image/my/5d521766d1437_03.png" ></image>
				<image class="tab-icon" src="../../static/image/my/5d521766d1437_03.png" ></image>
				<image class="tab-icon" src="../../static/image/my/5d521766d1437_03.png" ></image>
			</view>
		</view>
		<view>
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view class="fold">{{nickname}}</view>
						<view class="text-gray text-sm flex justify-between">
							14分钟前
						</view>
					</view>
				</view>
			</view>
			<view class="two">		
				秋季滋补从每一餐开始，秋季滋补从每一餐开始，秋季滋补从每一餐开始，秋季滋补从每一餐开始。
			</view>
			<view class="max">
				<image class="tab-icon" :style="'background-image:url('+photo+');'" ></image>
				<image class="tab-icon" :style="'background-image:url('+photo+');'" ></image>
				<image class="tab-icon" :style="'background-image:url('+photo+');'"></image>
			</view>
		</view>
		<view>
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view>莉莉</view>
						<view class="text-gray text-sm flex justify-between">
							14分钟前
						</view>
					</view>
				</view>
			</view>
			<view class="two">		
				秋季滋补从每一餐开始，秋季滋补从每一餐开始，秋季滋补从每一餐开始，秋季滋补从每一餐开始。
			</view>
			<view class="max">
				<image class="tab-icon" src="../../static/image/my/123.png" ></image>
				<image class="tab-icon" src="../../static/image/my/123.png" ></image>
				<image class="tab-icon" src="../../static/image/my/123.png" ></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				nickname:'莉莉',
				userid:'123456'
			};
		},
		onShow() {
			// 方法1:
			// let userinfo = this.userInfo;
			// console.log(userinfo)
			// if(userinfo){
			// 	this.photo = userinfo.photo;
			// 	this.nickname = userinfo.username;
			// 	this.userid = userinfo.userid;
			// }
			
			// 方法2:
			let userinfo = getApp().globalData.userInfo;
			console.log(userinfo)
			if(userinfo){
				this.photo = userinfo.data[0].photo;
				this.nickname = userinfo.data[0].username;
				this.userid = userinfo.data[0].userid;
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.max{
	display:flex;
	background:white;
	justify-content:center;
}
.text{
	width:670upx;
	height:71upx;
	font-size:28upx;
	font-family:PingFang;
	font-weight:500;
	color:rgba(50,50,50,1);
}
.tab-icon{
	width:224upx;
	height:204upx;
	border-radius:10upx;
	margin:18upx 0;
}
.two{
	background:white;
	padding:5upx;
}
.uni-page-wrapper {
    display: block;
    height: 100%;
    position: relative;
	background:white;
}
</style>
