<template>
	<view class="home">
		<!-- 首页布局 -->
		<view class="home-container">
			<view class="home-header">
				<view class="header-title">小鹿线前端学院</view>
				<view class="header-subtitle">入学信息入口</view>
				<view class="header-show" @tap='goShowContract'>
					<view class="home-class"><text class="show-text">查看班级权益</text></view>
					<!-- 放大镜 -->
					<image class="home-img" src="../../static/imgs/shape.png" mode="" lazy-load="true"></image>
				</view>
			</view>
			<scroll-view scroll-y="true" class="home-content">
				<!-- 班级列表开始 -->
				<home-list :dataList='dataList' />
				<!-- 班级列表结束 -->
			</scroll-view>
		</view>
		<!-- tabbar -->
		<my-tabbar :current="current"></my-tabbar>
	</view>
</template>

<script>
import myTabbar from '../../common/tabbar/index.vue'
import homeList from '../../components/home/homeList.vue'
import { getClassList } from '../../servies/classes.js'
export default {
	components:{
		myTabbar,
		homeList
	},
	data() {
		return {
			selected:0,
			query:{
				pageSize:5,
				pageNum:1
			},
			dataList:[], //班级列表
		}
	},
	methods: {
		getInfo(){
			getClassList(this.query).then(res=>{
				console.log(res);
				this.dataList = res
			})
		},
		goShowContract(){
			uni.navigateTo({
				url:'../show-contract/show-contract'
			})
		}
	},
	//生命周期
	onLoad(){
		this.getInfo()
	},
    onShow() {
      // 隐藏官方的tabbar
      uni.hideTabBar()
    },
}
</script>

<style scoped lang="scss">
scroll-view ::-webkit-scrollbar {
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
	color: transparent;
}
.home {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
}

.home-container {
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	margin-right: -7rpx;
	width: 100vw;
	background-color: #ffffff;
	/* background: url('http://fawnuat.xuexiluxian.cn/api/profile/wechat/bgimg/bg.png') no-repeat; */
	background-size: cover;
	/*  68 * 2 */
	/* padding-bottom: 120rpx; */
	box-sizing: border-box;
}

/* 头部 */
.home-header {
	padding: 131rpx 0 20rpx 37rpx;
}
.header-title {
	font-size: 60rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #000cff;
	line-height: 80rpx;
}
.header-subtitle {
	margin: 25rpx 0;
	font-size: 40rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #344356;
	line-height: 56rpx;
	opacity: 0.8;
}
.header-show {
	width: 290rpx;
	height: 59rpx;
	display: flex;
	/* justify-content: space-around; */
	align-items: center;
	background-color: #5468ff;
	border-radius: 10rpx;
	padding: 0 20rpx;
	box-sizing: border-box;
}
.home-class {
	height: 27rpx;
	line-height: 27rpx;
	font-size: 28rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #ffffff;
}
/* 伪类 去显示那根线 */
.home-class::after {
	content: '';
	width: 1rpx;
	height: 31rpx;
	margin: 0 20rpx;
	border-left: 4rpx solid #ffffff;
}
.home-img {
	width: 28rpx;
	height: 28rpx;
}
/* 头部完成 */

/* 主题开始 */
.home-content {
	flex: 1;
	overflow: hidden;
	padding: 40rpx 37rpx;
}
</style>
