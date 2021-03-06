"use strict";

var vm = new Vue({
	el: "#app",
	data: function data() {
		return {
			videoList: [],
			videoTitle: [],
			vIndex: null,
			// 分页对象
			pagination: {
				total: 1,
				pageSize: 6
			}
		};
	},
	created: function mounted() {
		this.findAdNewsListPage({
			start: 1,
			pageSize: this.pagination.pageSize,
			type: 3,
			enable: 0
		});
		this.findAdNewsAllList({
			type: 3,
			enable: 0
		})
	},
	mounted: function mounted() {},
	methods: {
		currentChange: function currentChange(val) {
			this.findAdNewsListPage({
				start: val,
				pageSize: this.pagination.pageSize,
				type: 3,
				enable: 0
			});
		},
		filterV: function filterV(item) {
			this.vIndex = item.id;
			this.findAdNewsListPage({
				start: 1,
				pageSize: this.pagination.pageSize,
				type: 3,
				typeName: item.typeName,
				enable: 0
			});
		},
		// 跳转链接
		pushHref: function pushHref(url, id) {
			window.location.href = "" + url + "?id=" + id;
		},
		// 获取视频列表数据
		findAdNewsAllList: function findAdNewsAllList(params) {
			var _this3 = this;
			$api.shop.findAdNewsAllList(params).then(function (res) {
				var data = res.data;
				if (_this3.videoTitle.length <= 0) {
					data.map(function (v) {
						if (_this3.videoTitle.filter(function (t) {
								return t.typeName === v.typeName;
							}).length === 0) {
							_this3.videoTitle.push(v);
						}
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		// 分页获取视频数据
		findAdNewsListPage: function findAdNewsListPage(params) {
			var _this2 = this;
			$api.shop.findAdNewsListPage(params).then(function (res) {
				var data = res.data.list;
				_this2.videoList = data;
				_this2.pagination.total = res.data.total;
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});