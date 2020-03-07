'use strict';

var vm = new Vue({
	el: '#app',
	data: function data() {
		return {
			// 新闻数据
			newList: [],
			// 分页对象
			pagination: {
				total: 1,
				pageSize: 4
			}
		};
	},
	mounted: function mounted() {
		this.findAdNewsListPage({
			start: 1,
			pageSize: this.pagination.pageSize,
			typeCode: 0,
			type: 1
		});
	},

	methods: {
		// 跳转链接
		pushHref: function pushHref(url, id) {
			window.location.href = "" + url + "?id=" + id;
		},
		// 获取新闻数据
		findAdNewsListPage: function findAdNewsListPage() {
			var _this = this;

			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			$api.shop.findAdNewsListPage(params).then(function (res) {
				_this.newList = res.data.list;
				_this.pagination.total = res.data.total;
			}).catch(function (err) {
				console.log(err);
			});
		},
		currentChange: function currentChange(val) {
			this.findAdNewsListPage({
				start: val,
				pageSize: this.pagination.pageSize,
				typeCode: 0
			});
		}
	}
});