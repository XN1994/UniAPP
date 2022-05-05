<template>
	<view>
		<headers></headers>
		<!-- 班级详情 -->
	</view>
</template>

<script>
	import headers from '@/components/lerojon-header_nav/header_nav.vue'
	export default {
		data() {
			return {
				classId:null,
				title:null
			}
		},
		components: {
			headers,
		},
		onLoad(options){
			this.classId=options.id
			this.title=options.title
			console.log(options);
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
