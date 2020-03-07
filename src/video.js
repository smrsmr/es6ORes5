"use strict";

var vm = new Vue({
	el: "#app",
	data: function data() {
		return {
			videoList: [],
			videoType: []
		};
	},
	created: function mounted() {
		this.findAdNewsListPage({
			start: 1,
			pageSize: 20,
			type: 3
		});
	},
	mounted: function mounted() {},
	methods: {
		filterV: function (item) {
			this.findAdNewsListPage({
				start: 1,
				pageSize: 20,
				type: 3,
				typeCode: item.typeCode
			});
			// console.log(item);
		},
		// 跳转链接
		pushHref: function (url, id) {
			window.location.href = "" + url + "?id=" + id;
		},
		// 获取视频数据
		findAdNewsListPage: function (params) {
			var _this2 = this;
			$api.shop
				.findAdNewsListPage(params)
				.then(function (res) {
					var data = res.data.list
					_this2.videoList = data;
					if (_this2.videoType.length <= 0) {
						data.map(v => {
							if (_this2.videoType.filter(t => t.typeCode === v.typeCode).length === 0) {
								_this2.videoType.push(v)
							}
						})
					}
					$(function () {
						setTimeout(function () {
							var control = $("#smv_con_41_34");
							control.find("img").cutFill();
							con_41_34_init();
						}, 300);
					});
				})
				.catch(function (err) {
					console.log(err);
				});
		}
	}
});