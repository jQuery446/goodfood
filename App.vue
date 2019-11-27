<script>
	import Vue from 'vue'
	export default {
		globalData:{ //定义globalData
			userInfo:{}
		},
		onLaunch: function() {
			try {
			    const userinfo = uni.getStorageSync('userInfo');
			    if (userinfo) {
			        console.log(userinfo);
					// 如果要判断token的过期时间，可以在此处拿userinfo中的token请求服务器去验证
					// 如果服务器返回的是token 过期的状态，就可以清除本地缓存中的userInfo信息
					// 并不执行下面的 Vue.prototype.userInfo
					// Vue.prototype.userInfo = userinfo
					
					this.$options.globalData.userInfo = userinfo //设置globalData
			    }
			} catch (e) {
			    // error
				console.log('获取本地存储用户信息失败')
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
</style>
