'use strict';

var vm = new Vue({
	el: "#app",
	data: function data() {
		return {
			// 新闻数据对象
			newObj: {}
		};
	},
	mounted: function mounted() {
		console.log(this.getQueryString('id'));
		var newId = this.getQueryString('id');
		this.findAdNewsById({
			id: newId
		});
	},

	methods: {
		// 获取新闻数据
		findAdNewsById: function findAdNewsById() {
			var _this = this;

			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			$api.shop.findAdNewsById(params).then(function (res) {
				_this.newObj = res.data;
				document.getElementsByTagName("title")[0].innerText = _this.newObj.title;
				console.log(_this.newObj);
			}).catch(function (err) {
				console.log(err);
			});
		},

		// 获取url id
		getQueryString: function getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			//window.location.search 用以获取请求的参数，即 url 中 "?" 后面的部分
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return "";
		}
	}
});