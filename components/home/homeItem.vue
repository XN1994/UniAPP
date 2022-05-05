<template>
	<view class="home-item" @tap='goDetail(info)'>
		<view class="home-main" :style="{backgroundImage: 'url(' + info.classImgLink + ')'}">
			
			<view class="item-content" >
				<image class="left-arrow" src="../../static/imgs/right-arrow.png" mode="">
				</image><!-- 左箭头 -->
				<view class="item-text">{{info.className}}</view>
				<image src="../../static/imgs/right-arrow.png" mode="">
				</image><!-- 右箭头 -->
			</view>
		</view>
	</view>
</template>

<script>

export default {
	props:{
		info:Object
	},
	data() {
		return {
		}
	},

	methods:{
		goDetail(info){
			// 跳转并传参
			uni.navigateTo({
				url:`../../pages/classes/classes?classId=${info.id}&title=${info.className}`
			})
		}
	},
	components:{	
	},
}
</script>

<style scoped>
.home-item {
	width: 320rpx;
	height: 404rpx;
	background: #ffff;
	box-shadow: 0rpx 24rpx 38rpx 0rpx rgba(60, 128, 209, 0.09);
	border-radius: 30rpx;
	position: relative;
	margin-bottom: 40rpx;
}
.home-main{
	width: 294rpx;
	height: 371rpx;
	/* background: url('https://test.cloudapprod.com/api/profile/wechat/bgimg/p4.png') no-repeat; */
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	top: 15rpx;
	left: 10rpx;
}
.item-content{
	width: 400rpx;
	position: absolute;
	bottom: 38rpx;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
}
.item-content image {
	width: 30rpx;
	height: 20rpx;
}
.left-arrow {
	 transform: rotate(180deg);
}
.item-text {
	padding: 0 20rpx;
	font-size: 36rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #FFFFFF;	
}
</style>