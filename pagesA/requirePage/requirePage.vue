<template>
	<view>
		<uni-list>
			<uni-list-item title="该手机号已绑定B站账户" thumb="/static/imgs/Bilibili.png" thumb-size="lg"> </uni-list-item>
			<uni-list-item link to="/pagesB/web/Bilibili/Bilibili" @click="onClick($event,1)" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'contact'}" title="点击前往B站官网进行修改" clickable >
				</uni-list-item>
		</uni-list>
		<uni-list>
			<uni-list-item title="该手机号已绑定腾讯账户" thumb="/static/imgs/QQ.png" thumb-size="lg"> </uni-list-item>
			<uni-list-item link to="/pagesB/web/QQ/QQ" @click="onClick($event,1)" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'contact'}" title="点击前往QQ安全中心进行修改" clickable >
				</uni-list-item>
		</uni-list>
		<uni-list>
			<uni-list-item title="该手机号已绑定爱奇艺账户" thumb="/static/imgs/aiQiYi.png" thumb-size="lg"> </uni-list-item>
			<uni-list-item link to="/pagesB/web/aQiYi/aQiYi" @click="onClick($event,1)" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'contact'}" title="点击前往爱奇艺安全中心进行修改" clickable >
				</uni-list-item>
		</uni-list>
		<uni-list>
			<uni-list-item title="该手机号已绑定网易邮箱" thumb="/static/imgs/wangYi.png" thumb-size="lg"> </uni-list-item>
			<uni-list-item link to="/pagesB/web/wangYi/wangYi" @click="onClick($event,1)" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'contact'}" title="点击前往网易邮箱安全中心进行修改" clickable >
				</uni-list-item>
		</uni-list>
		<view class = "ps">此界面仅为模型，并非真实情况！</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {	
			
		},
		
	}
</script>

<style>
	.ps {
		margin-left : 30rpx;
		margin-top : 20rpx;
		color : red;
		font-weight: bold;
	}
</style>
