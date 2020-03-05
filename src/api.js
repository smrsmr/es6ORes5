let base_url = "http://192.168.100.46:8086";
// let base_url = "http://192.168.100.222:8081";

let userInfo = {
	account: "admin",
}

function $request(url, data, params) {
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: base_url + url,
			type: params && params.type || 'POST',
			dataType: params && params.dataType || 'JSON',
			data: JSON.stringify(data),
			async: true,
			success: function (res) {
				resolve(res)
			},
			error: function (res) {
				reject(res)
			},
			beforeSend: function (xhr) {
				xhr.setRequestHeader("user-info", encodeURI(JSON.stringify(userInfo)));
				xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			}
		});
	})
}
const $api = {
	shop: {
		// 商品信息 — 商品列表查询
		findList(data = {}) {
			return $request('/goodsInfo/findList', data)
		},
		// 【广告新闻资讯管理】-【分页查询】
		findAdNewsListPage(data = {}) {
			return $request('/rest/seed/adNews/findAdNewsListPage', data)
		},
		// 【广告新闻资讯管理】-【列表查询】
		findAdNewsAllList(data = {}) {
			return $request('/rest/seed/adNews/findAdNewsAllList', data)
		},
		// 【广告新闻资讯管理】-【通过ID获取详情】
		findAdNewsById(data = {}) {
			return $request('/rest/seed/adNews/findAdNewsById', data)
		},
		// 商品分类 — 列表查询
		goodsCategoryList(data = {}) {
			return $request('/goodsCategory/findList', data)
		},
		// 商品分类 — 获分类下所有商品
		findGoodsByCategoryId(data = {}) {
			return $request('/goodsInfo/findGoodsByCategoryId', data)
		},
		// 商品信息 — 查询详情
		findGoodsById(data = {}) {
			return $request('/goodsInfo/findGoodsById', data)
		},
		// 订单管理-下单
		insertOrder(data = {}) {
			return $request('/rest/seed/order/info/insertOrder', data)
		},
		// 【会员管理】-【会员注册】
		insertOutletUser(data = {}) {
			return $request('/rest/seed/outlet/user/insertOutletUser', data)
		},
	}
}