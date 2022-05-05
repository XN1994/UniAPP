<template>
	<!-- 班级权益 -->
	<view class="show-contract">
		<view class="contract-header"><image src="http://fawnuat.xuexiluxian.cn/api/profile/wechat/bgimg/title.png" mode=""></image></view>

		<scroll-view scroll-y="true" :style="'height:' + clientHeight + 'px;'">
			<view class="constract" :style="'height:' + clientHeight + 'px;'">
				<view class="show-contract-content" v-if="classInfo">
					<!--  -->
					<view class="sign-item" v-for="item in classInfo" :key="item.id">
						<view class="sign-bg-title">
							<!-- <view class="item-title">{{item.className}}</view> -->
							<view class="item-title">{{ item.className }}</view>
						</view>
						<view class="item-content">
							<view class="item-text">
								<rich-text class="item-text" :nodes="item.classDesc"></rich-text>
							</view>
						</view>

						<view class="sign-bg-footer"></view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="know"><view class="contract-know" @tap="goBack">我知道了</view></view>
	</view>
</template>

<script>
import {
	  getClassList
	} from '@/servies/classes.js'
export default {
	data() {
		return {
			clientHeight: null,
			classInfo:null,
		};
	},
	components: {
		
	},
	computed: {
		
	},
	onReady() {
		// 获取系统信息
		uni.getSystemInfo({
			success: res => {
				this.clientHeight = res.windowHeight;
				// 获取节点信息=>获取头部高度
				let info = uni.createSelectorQuery().in(this).select('.contract-header')
				info.boundingClientRect(data => {
					//	data - 包含元素的高度等信息
					// console.log(data)  // 获取元素宽度
					this.clientHeight= res.windowHeight - data.height
				}).exec(function(res) {
					// 注意：exec方法必须执行，即便什么也不做，否则不会获取到任何数据
				}); 
				
				// 获取"我知道"的高 contract-know
				let know = uni.createSelectorQuery().in(this).select(".know");
				know.boundingClientRect((data) => {
					//	data - 包含元素的高度等信息
					// console.log(data)  // 获取元素宽度
					this.clientHeight = this.clientHeight - data.height
				}).exec(function(res) {
					// 注意：exec方法必须执行，即便什么也不做，否则不会获取到任何数据
				})
			}
		});
	},
	onLoad(){
		  this.__init()
		},
		methods: {
			async __init() {
			  const data = {
			    pageNum: this.pageNum,
			    pageSize: this.pageSize
			  }
			  const res = await getClassList(data)
			  
			  this.classInfo = res;
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style scoped>
scroll-view ::-webkit-scrollbar {
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
	color: transparent;
}
.show-contract {
	width: 100vw;
	height: 100vh;
	background: url('http://fawnuat.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg.png') no-repeat;
}

/* 班级权益 */
.contract-header {
	width: 100vw;
	height: 300rpx;
	position: relative;
}
.contract-header image {
	width: 622rpx;
	height: 93rpx;
	position: absolute;
	left: 50%;
	top: 150rpx;
	transform: translatex(-50%);
}

.constract {
	width: 702rpx;
	padding: 0 24rpx;
	padding-bottom: 60rpx;
}

.sign-item {
	width: 702rpx;
	margin-bottom: 60rpx;
	/* background: url('https://test.cloudapprod.com/api/profile/wechat/bgimg/-bg.png') no-repeat; */
}

.sign-bg-title {
	width: 702rpx;
	height: 100rpx;
	background: url('http://fawnuat.xuexiluxian.cn:80/api/profile/wechat/bgimg/sign-bg-title.png') no-repeat;
	background-size: 100% 100%;
	position: relative;
}

.item-title {
	position: absolute;
	left: 50%;
	top: 10rpx;
	transform: translateX(-50%);
	font-size: 48rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #5d6fe5;
	line-height: 60rpx;
}

.item-content {
	width: 702rpx;
	height: 100%;
	background: url('http://fawnuat.xuexiluxian.cn:80/api/profile/wechat/bgimg/item-bg.png') no-repeat;
	background-size: 100% 100%;
	position: relative;
}

.sign-bg-footer {
	width: 702rpx;
	height: 100rpx;
	background: url('http://fawnuat.xuexiluxian.cn:80/api/profile/wechat/bgimg/sign-bg-footer.png') no-repeat;
	background-size: 100% 100%;
	position: relative;
	bottom: 0;
}

.item-text {
	padding: 20rpx 40rpx;
	font-size: 30rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #7a8bff;
}

/* 我知道了 */
.know {
	width: 100vw;
	height: 200rpx;
	position: relative;
}

.contract-know {
	width: 520rpx;
	height: 80rpx;
	font-size: 30rpx;
	font-family: Adobe Heiti Std;
	font-weight: normal;
	color: #5d6fe5;
	text-align: center;
	line-height: 80rpx;
	background-color: #ffffff;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 20rpx;
}
</style>
