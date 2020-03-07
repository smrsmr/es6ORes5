"use strict";

var vm = new Vue({
	el: '#app',
	data: function data() {
		return {
			name: "",
			phone: ""
		};
	},
	mounted: function mounted() {},

	methods: {
		// 提交申请
		pushInfo: function pushInfo() {
			var _this = this;

			if (!this.name) {
				this.$message.error("请输入您的姓名");
				return false;
			}
			if (!this.phone) {
				this.$message.error("请输入您的手机号");
				return false;
			}
			var params = {
				account: this.name,
				phone: this.phone,
				password: "111111",
				resource: "1"
			};
			$api.shop.insertOutletUser(params).then(function (res) {
				if (res.retcode === 1) {
					_this.$notify({
						title: '',
						message: "加盟成功",
						type: 'success'
					});
				} else {
					_this.$notify({
						title: '',
						message: "已加盟，不需要重复加盟",
						type: 'error'
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});