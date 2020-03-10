"use strict";

var vm = new Vue({
	el: '#app',
	data: function data() {
		return {
			name: "",
			phone: "",
			service: [{}],
			product: [{}],
			brand: [{}],
			itemObj: {}
		};
	},
	mounted: function mounted() {
		this.getAdvantage({
			type: 'warm-product',
			enable: 0
		})
		this.getText({
			type: 1,
			typeCode: "2"
		})
	},

	methods: {
		// 获取加盟文本信息
		getText(params) {
			$api.shop.findAdNewsAllList(params).then((res) => {
				if (res.retcode === 1) {
					let data = res.data;
					this.itemObj = data[0]
				}
			}).catch((err) => {
				console.log(err)
			});
		},
		// 获取加盟优势
		getAdvantage(params) {
			$api.shop.systemFindList(params).then((res) => {
				if (res.retcode === 1) {
					let data = res.data.list;
					this.service = data.filter(v => v.val === 'service');
					this.product = data.filter(v => v.val === 'product');
					this.brand = data.filter(v => v.val === 'brand');
					console.log(this.service, this.product, this.brand);
				}
			}).catch((err) => {
				console.log(err)
			});
		},
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