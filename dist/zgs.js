"use strict";

var vm = new Vue({
	el: "#app",
	data: function data() {
		return {
			name: "我是vue组件页面"
		};
	},
	mounted: function mounted() {
		console.log(this.name);
	}
});