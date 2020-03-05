var vm = new Vue({
	el: "#app",
	data() {
		return {
			name: "我是vue组件页面"
		}
	},
	mounted() {
		console.log(this.name)
	},
})