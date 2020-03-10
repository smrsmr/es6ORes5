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
			type: 1,
			enable: 0
		});
	},

	methods: {
		// 转换时间戳
		timestampToTime: function timestampToTime(timestamp) {
			var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
			var Y = date.getFullYear() + '-';
			var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
			var D = date.getDate() + ' ' < 10 ? '0' + date.getDate() : date.getDate();
			var h = date.getHours() + ':';
			var m = date.getMinutes() + ':';
			var s = date.getSeconds();
			return Y + M + D;
		},
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