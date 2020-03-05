var vm = new Vue({
	el: "#app",
	data() {
		return {
			// 商品信息对象
			goodsObj: {},
			// 商品图片详情列表
			goodsImgList: [],
			dialogVisible: false,
			form: {},
			relus: {
				name: {
					required: true,
					message: '请输入名称',
					trigger: 'blur'
				},
				phone: {
					required: true,
					message: '请输入手机号',
					trigger: 'blur'
				},
			}
		};
	},
	mounted() {
		let goodsId = this.getQueryString("id");
		this.findGoodsById({
			id: goodsId
		});
	},
	methods: {
		// 提交信息
		submitForm(form) {
			this.$refs[form].validate((valid) => {
				if (valid) {
					var params = {
						outletId: "567537280696",
						addressId: "AD573232641750",
						address: "广东省",
						buyerName: this.form.name,
						buyerPhone: this.form.phone,
						buyerQQ: this.form.qq,
						buyerEmail: this.form.email,
						buyerMsg: this.form.textarea,
						goodsId: this.goodsObj.id,
						detailList: [{
							"goodsId": this.goodsObj.id,
							"quan": 1
						}]
					}
					this.insertOrder(params);
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		// 提交信息
		insertOrder(params) {
			$api.shop
				.insertOrder(params)
				.then(res => {
					if (res.retcode === 1) {
						this.$notify({
							title: '',
							message: res.retmsg,
							type: 'success'
						});
						this.dialogVisible = false;
					} else {
						this.$notify({
							title: '',
							message: res.retmsg,
							type: 'error'
						});
					}
				})
				.catch(err => {
					console.log(err);
				});
		},
		// 获取商品详情
		findGoodsById(params) {
			$api.shop
				.findGoodsById(params)
				.then(res => {
					this.goodsObj = res.data;
					this.goodsImgList = this.parse(res.data.detailImgs);
					document.getElementsByTagName("title")[0].innerText = this.goodsObj.title;
					this.$nextTick(() => {
						setTimeout(() => {
							tem_2_58_slider4_init();
						}, 300);
					});
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
			if (r != null) return unescape(r[2]);
			return "";
		},
		// 转换对象
		parse(str) {
			if (JSON.parse(str)) {
				return JSON.parse(str);
			} else {
				return [];
			}
		}
	}
});