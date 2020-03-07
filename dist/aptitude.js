"use strict";

var vm = new Vue({
	el: "#app",
	data: function data() {
		return {
			aptitudeList: [],
			aptitudeType: [],
			Index: null
		};
	},
	mounted: function mounted() {
		this.findAdNewsListPage({
			start: 1,
			pageSize: 30,
			type: 4
		});
	},
	methods: {
		// 选择资质列表
		aptitudeTypeC: function aptitudeTypeC(item) {
			this.Index = item.id;
			this.findAdNewsListPage({
				start: 1,
				pageSize: 30,
				type: 4,
				typeCode: item.typeCode
			});
		},
		// 跳转链接
		pushHref: function pushHref(url) {
			window.location.href = "" + url;
		},
		// 获取资质数据
		findAdNewsListPage: function findAdNewsListPage(params) {
			var _this2 = this;
			$api.shop.findAdNewsListPage(params).then(function (res) {
				var data = res.data.list;
				_this2.aptitudeList = data;
				if (_this2.aptitudeType.length <= 0) {
					data.map(function (v) {
						if (_this2.aptitudeType.filter(function (t) {
							return t.typeCode === v.typeCode;
						}).length === 0) {
							_this2.aptitudeType.push(v);
						}
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});