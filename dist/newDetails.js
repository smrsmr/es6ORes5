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
		// 转换时间戳
		timestampToTime: function timestampToTime(timestamp) {
			var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
			var Y = date.getFullYear() + '-';
			var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
			var D = date.getDate() + ' ' < 10 ? '0' + date.getDate() : date.getDate();
			var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
			var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
			var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
			return Y + M + D + '  ' + h + m + s;
		},
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