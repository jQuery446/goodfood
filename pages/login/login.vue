<template>
	<view class="max">
		<view class="tit">
			账号密码登录
		</view>
		<view class="cu-form-group">
			<view class="title">手机号码</view>
			<input placeholder="请输入手机号码" name="input"  v-model="phoneNumber" ></input>
			<view class="cu-capsule radius">
				<view class='cu-tag bg-blue '>
					+86
				</view>
				<view class="cu-tag line-blue">
					中国大陆
				</view>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">验证码</view>
			<view class="cu-form-group">
				<input placeholder="请输入图形验证码" v-model="code"/>
				<view class="cu-capsule radius">
					<view @tap="changeCode" class="cu-tag color-green code">
						{{rCode}}
					</view>
				</view>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">密码</view>
			<input placeholder="请输入密码" name="input" v-model="passwd" ></input>
		</view>
		<view class="cu-bar btn-group" style="margin-top:40upx;">
			<button class="cu-btn bg- shadow-blur round" @tap="doLogin">登录</button>
		</view>
		<view class="cu-bar btn-group">
			<button class="cu-btn bg-white shadow-blur round">立即注册</button>
			<button class="cu-btn bg-white shadow-blur round">忘记密码</button>
		</view>
	</view>
</template>

<script>
	import {generalGET} from "@/common/utils/general.js"
	import Vue from 'vue'
	export default {
		data() {
			return {
				phoneNumber: '18095101270', 
				passwd:'',
				code:'', //输入的图形验证码
				rCode:'', //生成的图形验证码
				isShowOauth:true,
				showProvider:{
					weixin:false,
					qq:false,
					sinaweibo:false,
					xiaomi:false
				}
			}
		},
		onLoad() {
			
			this.rCode = this.randomCode()
		}, 
		methods: {
			randomCode(){ //生成图片验证码
				// 大写字母code码 65~90
				let n1 = Math.floor(Math.random()*25)+65;
				let n2 = Math.floor(Math.random()*25)+65;
				let n3 = Math.floor(Math.random()*25)+65;
				let n4 = Math.floor(Math.random()*25)+65;
				var codeStr= this.cToL(n1)+this.cToL(n2)+this.cToL(n3)+this.cToL(n4)
				console.log(n1,n2,n3,n4)
				return codeStr;
			},
			cToL(n){
				return String.fromCharCode(n)+''
			},
			changeCode(){ //点击切换图片验证码
				this.rCode = this.randomCode()
			},
			async doLogin(){ //登录按钮逻辑
				uni.hideKeyboard();
				//验证手机号码
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				}
				if(this.code.toLowerCase()!=this.rCode.toLowerCase()){
					uni.showToast({title: '验证码错误',icon:"none"});
					return false; 
				}
				if(this.passwd==''){
					uni.showToast({title: '密码不能为空',icon:"none"});
					return false; 
				}
				uni.showLoading({
					title: '登录中...'
				})
				let loginData = await generalGET(
					'/shop/login',
					{
						phone:this.phoneNumber,
						pwd:this.passwd
					}
				)
				if(loginData.data.data[0].code==1){
					let userinfo = loginData.data.data[0];
					uni.setStorage({ //长期存储用户登录状态
						'key':'userInfo',
						'data':userinfo
					})
					// 方法1:
					// Vue.prototype.userInfo = userinfo //方便后期组件中获取并使用
					
					// 方法2:
					getApp().globalData.userInfo = userinfo 
					
					uni.navigateBack({
						delta:1,
						animationType:'pop-out'
					})
				}
				 console.log(loginData)
				
				 uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss">
.cu-form-group{
	line-height:128upx;
}
.tit{
		font-size: 40upx;
		text-align:center;
		line-height:175upx;
	}
.max{
	background:white;
	height:1206upx;
}
.page-max{
	background:white;
}
</style>
