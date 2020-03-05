var vm = new Vue({
	el: "#app",
	data: function () {
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
	mounted: function () {
		let params = {
			start: 1,
			pageSize: 10
		};
		this.findList(params);
		this.findAdNewsListPage({
			start: 1,
			pageSize: 4,
			typeCode: 0
		});
		this.findAdNewsAllList({
			typeCode: 4
		});
		$(function () {
			setTimeout(function () {
				var control = $("#smv_con_41_34");
				control.find("img").cutFill();
				con_41_34_init();
			}, 1000);
		})
		this.goodsCategoryList()
	},
	methods: {
		// 获取商品分类
		goodsCategoryList() {
			let params = {
				start: 1,
				pageSize: 3
			}
			$api.shop
				.goodsCategoryList(params)
				.then(res => {
					this.goodsList = res.data.list;
				})
				.catch(err => {
					console.log(err);
				});
		},
		// 获取商品数据
		findList(params) {
			$api.shop
				.findList(params)
				.then(res => {
					this.dataList = res.data.list;
					// console.log(this.dataList);
				})
				.catch(err => {
					console.log(err);
				});
		},
		// 获取新闻数据
		findAdNewsListPage(params) {
			$api.shop
				.findAdNewsListPage(params)
				.then(res => {
					this.adList = res.data.list;
				})
				.catch(err => {
					console.log(err);
				});
		},
		// 获取新闻列表
		findAdNewsAllList(params) {
			$api.shop
				.findAdNewsAllList(params)
				.then(res => {
					this.aboutInfo = res.data[0];
					console.log(this.aboutInfo);
				})
				.catch(err => {
					console.log(err);
				});
		},
		// 转换对象
		parse(str) {
			if (JSON.parse(str)) {
				return JSON.parse(str);
			} else {
				return []
			}
		}
	}
});