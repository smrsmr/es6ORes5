var vm = new Vue({
	el: '#app',
	data() {
		return {
			name: "",
			phone: ""
		}
	},
	mounted() {

	},
	methods: {
		// 提交申请
		pushInfo() {
			if (!this.name) {
				this.$message.error("请输入您的姓名")
				return false;
			}
			if (!this.phone) {
				this.$message.error("请输入您的手机号")
				return false;
			}
			var params = {
				account: this.name,
				phone: this.phone,
				password: "111111",
				resource: "1"
			}
			$api.shop
				.insertOutletUser(params)
				.then(res => {
					if (res.retcode === 1) {
						this.$notify({
							title: '',
							message: "加盟成功",
							type: 'success'
						});
					} else {
						this.$notify({
							title: '',
							message: "已加盟，不需要重复加盟",
							type: 'error'
						});
					}
				})
				.catch(err => {
					console.log(err);
				});
		}
	},
})