"use strict";

var base_url = "http://192.168.100.46:8086";
// let base_url = "http://192.168.100.222:8081";

var userInfo = {
	account: "admin"
};

function $request(url, data, params) {
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: base_url + url,
			type: params && params.type || 'POST',
			dataType: params && params.dataType || 'JSON',
			data: JSON.stringify(data),
			async: true,
			success: function success(res) {
				resolve(res);
			},
			error: function error(res) {
				reject(res);
			},
			beforeSend: function beforeSend(xhr) {
				xhr.setRequestHeader("user-info", encodeURI(JSON.stringify(userInfo)));
				xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			}
		});
	});
}
var $api = {
	shop: {
		// 商品信息 — 商品列表查询
		findList: function findList() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return $request('/goodsInfo/findList', data);
		},

		// 【广告新闻资讯管理】-【分页查询】
		findAdNewsListPage: function findAdNewsListPage() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return $request('/rest/seed/adNews/findAdNewsListPage', data);
		},

		// 【广告新闻资讯管理】-【列表查询】
		findAdNewsAllList: function findAdNewsAllList() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return $request('/rest/seed/adNews/findAdNewsAllList', data);
		},

		// 【广告新闻资讯管理】-【通过ID获取详情】
		findAdNewsById: function findAdNewsById() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return $request('/rest/seed/adNews/findAdNewsById', data);
		},

		// 商品分类 — 列表查询
		goodsCategoryList: function goodsCategoryList() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return $request('/goodsCategory/findList', data);
		},

		// 商品分类 — 获分类下所有商品
		findGoodsByCategoryId: function findGoodsByCategoryId() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return $request('/goodsInfo/findGoodsByCategoryId', data);
		},

		// 商品信息 — 查询详情
		findGoodsById: function findGoodsById() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return $request('/goodsInfo/findGoodsById', data);
		},

		// 订单管理-下单
		insertOrder: function insertOrder() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return $request('/rest/seed/order/info/insertOrder', data);
		},

		// 【会员管理】-【会员注册】
		insertOutletUser: function insertOutletUser() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return $request('/rest/seed/outlet/user/insertOutletUser', data);
		}
	}
};