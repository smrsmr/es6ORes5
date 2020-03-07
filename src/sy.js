"use strict";

var vm = new Vue({
	el: "#app",
	data: function data() {
		return {
			// 商品列表
			dataList: [],
			// 新闻列表
			adList: [],
			// 公司信息
			aboutInfo: {},
			// 商品分类列表
			goodsList: []
		};
	},
	mounted: function mounted() {
		var params = {
			start: 1,
			pageSize: 10
		};
		this.findList(params);
		this.findAdNewsListPage({
			start: 1,
			pageSize: 4,
			type: 1,
			typeCode: 0
		});
		this.findAdNewsAllList({
			type: 1,
			typeCode: 4
		});
		$(function () {
			setTimeout(function () {
				var control = $("#smv_con_41_34");
				control.find("img").cutFill();
				con_41_34_init();
			}, 1000);
		});
		this.goodsCategoryList();
	},
	methods: {
		// 跳转链接
		pushHref: function (url, id) {
			window.location.href = '' + url + '?id=' + id;
		},
		// 获取商品分类
		goodsCategoryList: function goodsCategoryList() {
			var _this = this;

			var params = {
				start: 1,
				pageSize: 3
			};
			$api.shop.goodsCategoryList(params).then(function (res) {
				_this.goodsList = res.data.list;
			}).catch(function (err) {
				console.log(err);
			});
		},

		// 获取商品数据
		findList: function findList(params) {
			var _this2 = this;

			$api.shop.findList(params).then(function (res) {
				_this2.dataList = res.data.list;
				// console.log(this.dataList);
			}).catch(function (err) {
				console.log(err);
			});
		},

		// 获取新闻数据
		findAdNewsListPage: function findAdNewsListPage(params) {
			var _this3 = this;

			$api.shop.findAdNewsListPage(params).then(function (res) {
				_this3.adList = res.data.list;
			}).catch(function (err) {
				console.log(err);
			});
		},

		// 获取新闻列表
		findAdNewsAllList: function findAdNewsAllList(params) {
			var _this4 = this;
			$api.shop.findAdNewsAllList(params).then(function (res) {
				_this4.aboutInfo = res.data[0];
			}).catch(function (err) {
				console.log(err);
			});
		},

		// 转换对象
		parse: function parse(str) {
			if (JSON.parse(str)) {
				return JSON.parse(str);
			} else {
				return [];
			}
		}
	}
});