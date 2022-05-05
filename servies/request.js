export default {
	common: {
		// 基地址
		// baseUrl: 'http://fawnuat.xuexiluxian.cn',
		baseUrl: 'https://fawnuat.xuexiluxian.cn',
		//  请求参数
		data: {},
		// 请求头
		header: {
			"Content-Type": "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		// 请求的方式
		method: 'GET',
		// json
		dataType: "json"
	},
	request(options = {}) {

		options.url = this.common.baseUrl + options.url;
		// console.log(options.url)
		options.data = options.data || this.common.data;
		options.header = options.header || this.common.header;
		options.dataType = options.dataType || this.common.dataType;

		return new Promise((res, rej) => {
			uni.showLoading({
				title: '加载中'
			})
			uni.request({
				...options,
				success: (result) => {
					if (result.data.resultCode != 200) {
						setTimeout(function() {
							uni.hideLoading();
						}, 300)
						return rej(result.data);
					}
					setTimeout(function() {
						uni.hideLoading();
					}, 300)
					let data = result.data.data;
					if (data) {
						res(data)
					} else {
						res(result.data)
					}

				}
			})
		})

	}
}
