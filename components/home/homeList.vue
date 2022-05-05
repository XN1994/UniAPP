<template>
	<view class="home-list">
		<!-- 每一个子盒子 -->
		<view v-for="item in dataList" :key='item.id'>
			<home-item :info='item'></home-item>
		</view>
	</view>
</template>

<script>
import HomeItem from './homeItem.vue'
export default {
	props:{
		dataList:{
			type:Array,
			default:[]
		}
	},
	components:{
		HomeItem
	},
	data() {
		return {
		}
	},
}
</script>

<style>
.home-list {
	width: 676rpx;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 80rpx;
}
</style>