"use strict";

var vm = new Vue({
  el: "#app",
  data: function data() {
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
          message: "请输入名称",
          trigger: "blur"
        },
        phone: {
          required: true,
          message: "请输入手机号",
          trigger: "blur"
        }
      }
    };
  },
  mounted: function mounted() {
    var goodsId = this.getQueryString("id");
    this.findGoodsById({
      id: goodsId
    });
  },

  methods: {
    // 跳转链接
    pushHref: function pushHref(url, id) {
      window.location.href = "" + url + "?id=" + id;
    },
    // 提交信息
    submitForm: function submitForm(form) {
      var _this = this;

      this.$refs[form].validate(function (valid) {
        if (valid) {
          var params = {
            outletId: "567537280696",
            addressId: "AD573232641750",
            address: "广东省",
            buyerName: _this.form.name,
            buyerPhone: _this.form.phone,
            buyerQQ: _this.form.qq,
            buyerEmail: _this.form.email,
            buyerMsg: _this.form.textarea,
            goodsId: _this.goodsObj.id,
            detailList: [{
              goodsId: _this.goodsObj.id,
              quan: 1
            }]
          };
          _this.insertOrder(params);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    // 提交信息
    insertOrder: function insertOrder(params) {
      var _this2 = this;

      $api.shop.insertOrder(params).then(function (res) {
        if (res.retcode === 1) {
          _this2.$notify({
            title: "",
            message: res.retmsg,
            type: "success"
          });
          _this2.dialogVisible = false;
        } else {
          _this2.$notify({
            title: "",
            message: res.retmsg,
            type: "error"
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },

    // 获取商品详情
    findGoodsById: function findGoodsById(params) {
      var _this3 = this;

      $api.shop.findGoodsById(params).then(function (res) {
        _this3.goodsObj = res.data;
        _this3.goodsImgList = _this3.parse(res.data.detailImgs);
        document.getElementsByTagName("title")[0].innerText = _this3.goodsObj.title;
        _this3.$nextTick(function () {
          setTimeout(function () {
            tem_2_58_slider4_init();
          }, 300);
        });
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
    },

    // 转换对象
    parse: function parse(str) {
      if (JSON.parse(str)) {
        return JSON.parse(str);
      } else {
        return [];
      }
    }
  }
});