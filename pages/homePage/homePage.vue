<template>

	<view class="sun-index">
				<view class="sun-logo-box">			<view class="sun-logo">				<image class="sun-icon-img" src="@/static/imgs/logo4.png"/>			</view>
		</view>
		<!-- <view class="mainTitle">释结解绑 一别两宽</view> -->		<!-- <view class = "mainText">手机解换绑服务平台</view> -->
		<view class="mainText">"释结解绑, 一别两宽"— 手机解换绑服务平台 </view>
		
		<view class="sun-login-box">			<view class="sun-label">				<image style="width: 28rpx;height:39rpx;" src="@/static/imgs/mobile_icon.png"/>				<text class="label-text">手机</text>			</view>			<view class="sun-input-box">				<input v-model="mobile" type="text" placeholder="请输入手机号" maxlength="11" placeholder-class="placeholder-class"/>				<image @click="mobile=''" class="close-icon" src="@/static/imgs/close_icon.png"/>			</view>		</view>		<view class="sun-login-box">			<view class="sun-label">				<image style="width: 29rpx;height:29rpx;" src="@/static/imgs/code_icon.png"/>				<text class="label-text">验证码</text>			</view>			<view class="sun-input-box">				<input v-model="code" type="text" placeholder="请输入验证码" placeholder-class="placeholder-class"/>				<text class="code-text" :class="{gray:showTime}" @click="handleGetCodeClick">{{showTime ?currentCountTime+'s后重新获取':'获取验证码'}}</text>			</view>		</view>
		<view class = "psTitle">注意事项：</view>
		
		<view class = "psText">
			1.本平台为解换绑服务平台的实现模型，后续所展示的App绑定效果并非真实情况。
		</view>
		
		<view class = "psText">
			2.目前为测试版，输入11位手机号后，点击获取验证码并输入提交，即可跳转至查询页面。
		</view>
		
		<view class="login-btn-box">			<view class="login-btn" @click="handleSubmit">提交</view>		</view>	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				mobile:'',				password:'',				code:'',				countTime: 60, 				currentCountTime: 0,				showTime:false,				timeId:null,
				authCode:"1111",
			}
		},		created() {			this.currentCountTime = this.countTime		},
		onLoad() {
			
		},
		methods: {
			handleSubmit() {				if (!this.mobile) {
					return uni.showToast({title: '请输入手机号',icon:'none',duration: 1500})
				} else {
					var reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
					if (!reg.test(this.mobile)) {        //判断手机号格式时候正确
						this.mobile = ""
						uni.showToast({
							title: '请输入正确的手机号',
							icon: 'none'
						})
						return
					}
				}				if(!this.code) return uni.showToast({title: '请输入验证码',icon:'none',duration: 1500})
				
				if (this.code != this.authCode) {
					this.code = ""
					uni.showToast({
						title: "验证码错误",
						icon: "error",
						durationL: 1500,
					})
				} else {
					uni.showToast({title: '验证成功',duration: 1500})
					setTimeout(function() {
						uni.redirectTo({
							url: "/pagesA/requirePage/requirePage",
						})
					}, 1500)				}			},			handleGetCodeClick() {
				if (!this.mobile) {
					return uni.showToast({title: '请输入手机号',icon:'none',duration: 1500})
				} else {
					var reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
					if (!reg.test(this.mobile)) {        //判断手机号格式时候正确
						this.mobile = ""
						uni.showToast({
							title: '请输入正确的手机号',
							icon: 'none'
						})
						return
					}
				}
				this.createCode();
				uni.showModal({
					title: '您的验证码为',
					content: this.authCode,
					showCancel: false,
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} 
					}
				})							this.showTime = true				if(this.showTime && this.currentCountTime !== this.countTime) return				this.currentCountTime				this.timeId = setInterval(()=>{					if(this.currentCountTime <= 0) {						this.currentCountTime = this.countTime						this.showTime = false						clearInterval(this.timeId)					}					this.currentCountTime--				},1000)			},
			createCode () { 
			      var code = "";
			      var codeLength = 4;//验证码的长度
			      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);//随机数
			      for (var i = 0; i < codeLength; i++) {//循环操作
			        var index = Math.floor(Math.random() * 10);//取得随机数的				索引（0~35）
			        code += random[index];//根据索引取得随机数加到code上
			      }
			      this.authCode = code;
			    },
			// send() {
			//  uniCloud.callFunction({
			// 		name: 'SMS',
			// 		success: (e)=> {
			// 			console.log('这是发送验证码', e.result);
			// 		}
			// 	 })
			// }
		}
	}
</script>

<style scoped>
	/* .mainTitle {
		font-size: 32rpx;
		font-weight: bold;
		line-height: 5rpx;
		text-align: center;
		margin-bottom: 60rpx;
		margin-top: 30rpx;
		margin-right: 14rpx;
	} */
	.mainText {
		font-size: 32rpx;
		font-weight: bold;
		line-height: 10rpx;
		text-align: center;
		margin-bottom: 60rpx;
		margin-top: 30rpx;
	}	.sun-logo-box {
		display: flex;		justify-content: center;		align-items: center;		width: 750rpx;		height: 220rpx;	}	.sun-icon-img {
		margin-right: 12rpx;
		width: 250rpx;
		height: 150rpx;
	}
	.sun-logo {		display: flex;		justify-content: center;		align-items: center;		width: 290rpx;		height: 220rpx;		border-radius: 15rpx;		/* background-color: #12C8B9; */		/* box-shadow: 0rpx 0rpx 30rpx rgba(18,200,185,0.5); */	}	.close-icon {		width: 36rpx;		height: 34rpx;	}	.sun-login-box {		padding: 20rpx 60rpx;	}	.sun-label {		display: flex;		align-items: center;	}	.label-text {		margin-left: 16rpx;		font-weight: 600;		color: #272e2d;		font-size: 30rpx;	}	.sun-input-box {		display: flex;		align-items: center;		height: 100rpx;		border-bottom: 1rpx solid #eee;		padding: 0px 10rpx;	}	.sun-input-box input {		flex: 1;	}	.placeholder-class {		font-size: 30rpx;		color: #C0C0C0;	}	.sun-tip {		display: flex;		justify-content: space-between;		padding: 0rpx 68rpx;	}	.sun-tip-text {		color: #30C6B3;	}	.login-btn-box {		position: absolute;		bottom: 129rpx;		left: 0;		width: 750rpx;		padding: 50rpx 68rpx 0rpx;	}	.login-btn {		height: 82rpx;		border-radius: 41rpx;		background-color: #12C8B9;		box-shadow: -1px 12px 11px 0px rgba(16, 170, 157, 0.4);		text-align: center;		line-height: 82rpx;		font-size: 36rpx;		font-weight: 500;		color: #fff;	}	.code-text {		font-size: 28rpx;		color: #30C6B3;	}	.gray {		color: #C0C0C0;	}
	.psTitle {
		margin-top: 30rpx;
		margin-left: 70rpx;
		color: #272e2d;
		font-size: 25rpx;
	}
	.psText {
		margin-top:10rpx;
		margin-left: 70rpx;
		margin-right: 70rpx;
		font-weight: 500;
		color: #272e2d;
		font-size: 23rpx;
		line-height: 39rpx;
	}
</style>
