var vm = new Vue({
	el: "#app",
	data() {
		return {
			// 新闻数据对象
			newObj: {}
		}
	},
	mounted() {
		console.log(this.getQueryString('id'));
		let newId = this.getQueryString('id');
		this.findAdNewsById({
			id: newId
		})
	},
	methods: {
		// 获取新闻数据
		findAdNewsById(params = {}) {
			$api.shop
				.findAdNewsById(params)
				.then(res => {
					this.newObj = res.data;
					document.getElementsByTagName("title")[0].innerText = this.newObj.title;
					console.log(this.newObj);
				})
				.catch(err => {
					console.log(err);
				});
		},
		// 获取url id
		getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			//window.location.search 用以获取请求的参数，即 url 中 "?" 后面的部分
			var r = window.location.search.substr(1).match(reg);
			if (r != null)
				return unescape(r[2]);
			return "";
		}
	},
})