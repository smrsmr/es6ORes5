"use strict";

var vm = new Vue({
  el: "#app",
  data: function data() {
    return {
      videoList: [],
      videoType: [],
      videoTitle: [],
      vIndex: 0
    };
  },
  created: function mounted() {
    this.findAdNewsListPage({
      start: 1,
      pageSize: 3,
      type: 3,
      enable: 0
    });
  },
  mounted: function mounted() {},
  methods: {
    filterV: function filterV(item) {
      this.vIndex = item.id;
      this.findAdNewsListPage({
        start: 1,
        pageSize: 3,
        type: 3,
        typeCode: item.typeCode,
        enable: 0
      });
      con_41_34_init();
    },
    // 跳转链接
    pushHref: function pushHref(url, id) {
      window.location.href = "" + url + "?id=" + id;
    },
    // 获取视频数据
    findAdNewsListPage: function findAdNewsListPage(params) {
      var _this2 = this;
      $api.shop
        .findAdNewsListPage(params)
        .then(function(res) {
          var data = res.data.list;
          _this2.videoList = data;
          if (_this2.videoType.length <= 0) {
            data.map(function(v) {
              if (
                _this2.videoType.filter(function(t) {
                  return t.typeName === v.typeName;
                }).length === 0
              ) {
                _this2.videoType.push(v);
              }
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
});
