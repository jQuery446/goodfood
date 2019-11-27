<template>
	<view>
		<view class="item"  @tap="handleMyCenter('/pages/login/login')"  >
			<image class="tab-icon img" src="../../static/image/my/5d521766d1254_03.png" mode="aspectFit"></image>
			<view>
				<text class="one">{{nickname}}</text>
				<text class="two">lv3</text>
				<view>ID:{{userid}}</view>
			</view>
		</view>
		<view class="cu-list menu margin-top-xs">
			<view class="cu-item arrow" @tap="handlePub('/pages/pub/pub')">
				<view class="content text-grey ">
					<image class="tab-icon" src="../../static/image/my/5d521766d1254_07.png" mode="aspectFit"></image>
					<text style="margin-left:20upx;" >我的发布</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content text-grey">
					<image class="tab-icon" src="../../static/image/my/5d521766d1254_10.png" mode="aspectFit"></image>
					<text style="margin-left:20upx;">我的收藏</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content text-grey">
					<image class="tab-icon" src="../../static/image/my/5d521766d1254_12.png" mode="aspectFit"></image>
					<text style="margin-left:20upx;">我的关注</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content text-grey">
					<image class="tab-icon" src="../../static/image/my/5d521766d1254_14.png" mode="aspectFit"></image>
					<text style="margin-left:20upx;">系统设置</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content text-grey">
					<image class="tab-icon" src="../../static/image/my/5d521766d1254_16.png" mode="aspectFit"></image>
					<text style="margin-left:20upx;">帮助中心</text>
				</view>
			</view>
			
		</view>
		<view class="padding">
			<button class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">退出登录</button>
		</view>
	</view>
</template>

<script>
	import general from '../../common/utils/general.js'
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
		methods:{
			handleMyCenter(target){//形参，实参传的路由，形参接的就是路由
				uni.navigateTo({
					url:target
				})
			},
			handlePub(target){//形参，实参传的路由，形参接的就是路由
				uni.navigateTo({
					url:target
				})
			}
		}
	}
</script>

<style lang="scss">
.item{
			width: 690upx;
			height: 200upx;
			background:linear-gradient(90deg,rgba(255,96,0,1),rgba(255,186,67,1));
			border-radius:20px;
			margin:0 auto;
			margin-top:30upx;
			margin-bottom:30upx;
			display:flex;
			align-items:center;
		}
		.text-grey{
			width:750upx;
			line-height:104upx;
			background:rgba(255,255,255,1);
			color:black;
			}
		.cu-btn{
			width:452upx;
			line-height:90upx;
			background:linear-gradient(90deg,rgba(255,96,0,1),rgba(255,186,67,1));
			margin:0 auto;
			margin-top:149upx;
			border-radius:45upx;
		}
		.tab-icon{
			margin-right:20upx;
			width:452upx;
			line-height:90upx;
		}
		.item>.img{
			width:98upx;
			height:98upx;
			margin-left:41upx;
		}
		.one{
			width:69upx;
			height:34upx;
			font-size:36upx;
			font-family:PingFang;
			font-weight:500;
			color:rgba(255,255,255,1);
			line-height:60upx;
		}
		.two{
			color:#FF6000;
			border-radius:5upx;
			background:white;
			padding:2upx 5upx;
			margin-left:12upx;
		}
</style>
