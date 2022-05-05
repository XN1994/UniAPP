<template>
	<view>
		面试题
		<my-tabbar :current='current'></my-tabbar>
	</view>
</template>

<script>
	import myTabbar from '../../common/tabbar/index.vue'
	export default {
		data() {
			return {
				current: 1,
			}
		},
		components: {
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
