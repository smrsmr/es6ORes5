var vm = new Vue({
	el: '#app',
	data() {
		return {
			// 商品分类列表
			goodsList: [],
			// 商品列表
			CategoryList: []
		}
	},
	mounted() {
		this.goodsCategoryList();
		let categoryId = this.getQueryString('id');
		this.findGoodsByCategoryId({
			categoryId
		});
	},
	methods: {
		// 获取url id
		getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			//window.location.search 用以获取请求的参数，即 url 中 "?" 后面的部分
			var r = window.location.search.substr(1).match(reg);
			if (r != null)
				return unescape(r[2]);
			return null;
		},
		//切换商品分类
		goodsClick(id) {
			this.findGoodsByCategoryId({
				"categoryId": id
			})
		},
		// 获取分类下的商品
		findGoodsByCategoryId(params = {}) {
			$api.shop
				.findGoodsByCategoryId(params)
				.then(res => {
					this.CategoryList = res.data;
					console.log(this.CategoryList);
				})
				.catch(err => {
					console.log(err);
				});
		},
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
		// 转换对象
		parse(str) {
			if (JSON.parse(str)) {
				return JSON.parse(str);
			} else {
				return []
			}
		}
	},
})