<template>
	<view>
		我的协议
		<my-tabbar :current='current'></my-tabbar>
	</view>
</template>

<script>
	import myTabbar from '../../common/tabbar/index.vue'
	export default {
		data() {
			return {
				current:3,
			}
		},
		components:{
			myTabbar
		},
		onShow() {
		  uni.hideTabBar()
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
