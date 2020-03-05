var vm = new Vue({
	el: '#app',
	data() {
		return {
			aboutInfo: {}
		}
	},
	mounted() {
		this.findAdNewsAllList({
			typeCode: 4
		});
	},
	methods: {
		// 获取新闻列表
		findAdNewsAllList(params = {}) {
			$api.shop
				.findAdNewsAllList(params)
				.then(res => {
					this.aboutInfo = res.data[0];
					console.log(this.aboutInfo);
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
})