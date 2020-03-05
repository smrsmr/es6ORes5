'use strict';

var vm = new Vue({
	el: '#app',
	data: function data() {
		return {
			aboutInfo: {}
		};
	},
	mounted: function mounted() {
		this.findAdNewsAllList({
			typeCode: 4
		});
	},

	methods: {
		// 获取新闻列表
		findAdNewsAllList: function findAdNewsAllList() {
			var _this = this;

			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			$api.shop.findAdNewsAllList(params).then(function (res) {
				_this.aboutInfo = res.data[0];
				console.log(_this.aboutInfo);
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});