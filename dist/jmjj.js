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
		});
		this.getText({
			type: 1,
			typeCode: "2"
		});
	},

	methods: {
		// 获取加盟文本信息
		getText: function getText(params) {
			var _this2 = this;

			$api.shop.findAdNewsAllList(params).then(function (res) {
				if (res.retcode === 1) {
					var data = res.data;
					_this2.itemObj = data[0];
				}
			}).catch(function (err) {
				console.log(err);
			});
		},

		// 获取加盟优势
		getAdvantage: function getAdvantage(params) {
			var _this3 = this;

			$api.shop.systemFindList(params).then(function (res) {
				if (res.retcode === 1) {
					var data = res.data.list;
					_this3.service = data.filter(function (v) {
						return v.val === 'service';
					});
					_this3.product = data.filter(function (v) {
						return v.val === 'product';
					});
					_this3.brand = data.filter(function (v) {
						return v.val === 'brand';
					});
					console.log(_this3.service, _this3.product, _this3.brand);
				}
			}).catch(function (err) {
				console.log(err);
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