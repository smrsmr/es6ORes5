'use strict';

var vm = new Vue({
	el: '#app',
	data: function data() {
		return {
			// 商品分类列表
			goodsList: [],
			// 商品列表
			CategoryList: []
		};
	},
	mounted: function mounted() {
		this.goodsCategoryList();
		var categoryId = this.getQueryString('id');
		this.findGoodsByCategoryId({
			categoryId: categoryId
		});
	},

	methods: {
		// 获取url id
		getQueryString: function getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			//window.location.search 用以获取请求的参数，即 url 中 "?" 后面的部分
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		},

		//切换商品分类
		goodsClick: function goodsClick(id) {
			this.findGoodsByCategoryId({
				"categoryId": id
			});
		},

		// 获取分类下的商品
		findGoodsByCategoryId: function findGoodsByCategoryId() {
			var _this = this;

			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			$api.shop.findGoodsByCategoryId(params).then(function (res) {
				_this.CategoryList = res.data;
				console.log(_this.CategoryList);
			}).catch(function (err) {
				console.log(err);
			});
		},

		// 获取商品分类
		goodsCategoryList: function goodsCategoryList() {
			var _this2 = this;

			var params = {
				start: 1,
				pageSize: 3
			};
			$api.shop.goodsCategoryList(params).then(function (res) {
				_this2.goodsList = res.data.list;
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