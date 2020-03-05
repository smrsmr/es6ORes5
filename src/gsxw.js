var vm = new Vue({
	el: '#app',
	data() {
		return {
			// 新闻数据
			newList: [],
			// 分页对象
			pagination: {
				total: 1,
				pageSize: 4
			}
		}
	},
	mounted() {
		this.findAdNewsListPage({
			start: 1,
			pageSize: this.pagination.pageSize,
			typeCode: 0
		});
	},
	methods: {
		// 获取新闻数据
		findAdNewsListPage(params = {}) {
			$api.shop
				.findAdNewsListPage(params)
				.then(res => {
					this.newList = res.data.list;
					this.pagination.total = res.data.total;
				})
				.catch(err => {
					console.log(err);
				});
		},
		currentChange(val) {
			this.findAdNewsListPage({
				start: val,
				pageSize: this.pagination.pageSize,
				typeCode: 0
			});
		}
	}
})