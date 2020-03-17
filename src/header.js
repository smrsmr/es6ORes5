'use strict';

// 公共header

Vue.component('common-head', {
	data: function data() {
		return {
			shopData: []
		};
	},
	mounted: function mounted() {
		var _this = this;
		// 获取商品分类
		var params = {
			start: 1,
			pageSize: 3
		};
		$api.shop.goodsCategoryList(params).then(function (res) {
			_this.shopData = res.data.list;
		}).catch(function (err) {
			console.log(err);
		});
	},

	methods: {
		openLink: function openLink(id) {
			window.location.href = 'productinfocategory.html?id=' + id;
		}
	},
	template: '\n\t<div id="smv_tem_2_15" ctype="banner" cpid="1133606" cstyle="Style1" ccolor="Item0" areaid="Area0" iscontainer="True" pvid="" tareaid="Area0" re-direction="y" daxis="Y" isdeletable="True" class="esmartMargin smartAbs " style=" width: 100%; left: 0px; top: 0px; z-index: 9;"><div class="title" style="position: relative; left: -360px; width: 1920px; color: #fff; background: rgb(106, 168, 79);"><div style="font-size: 16px; padding: 10px 0px; margin: 0px auto; width: 1200px;">\n\t\t\u6B22\u8FCE\u60A8\u4F7F\u7528\u4E2D\u56FD\u4E2D\u836F\u6709\u9650\u516C\u53F8\u6696\u4E2D\u5B9D\u4EA7\u54C1\u7F51\u7AD9\n\t\t<span style="padding-left: 705px; vertical-align: middle;"><img src="static/image/phone.png" style="width: 20px; height: 20px; vertical-align: bottom;"> \n\t\t\t010-89259619\n\t\t</span></div></div> <div class="yibuFrameContent tem_2_15  banner_Style1  " style="overflow: visible;"><div id="smc_Area0" cid="tem_2_15" class="fullcolumn-inner smAreaC" style="width: 1200px;"><div id="smv_tem_6_37" ctype="logoimage" cpid="1133606" cstyle="Style1" ccolor="Item0" areaid="Area0" iscontainer="False" pvid="tem_2_15" tareaid="Area0" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 67px; width: 142px; left: 5px; top: 6px; z-index: 2;"><div class="yibuFrameContent tem_6_37  logoimage_Style1  " style="overflow: visible;"><div data-filltype="0" id="div_tem_6_37" class="w-image-box"><a target="_self" href="index.html"><img src="static/image/logo.png" alt="" title="" id="img_smv_tem_6_37" style="width: 142px; height: 67px;"></a></div></div></div> <div id="smv_tem_9_10" ctype="nav" cpid="1133606" cstyle="Style3" ccolor="Item0" areaid="Area0" iscontainer="False" pvid="tem_2_15" tareaid="Area0" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 71px; width: 912px; left: 287px; top: 8px; z-index: 3;"><div class="yibuFrameContent tem_9_10  nav_Style3  " style="overflow: visible;"><div id="nav_tem_9_10" class="nav_pc_t_3"><ul navstyle="style3" class="w-nav"><li class="sliding-box" style="left: 0px; top: 0px;"><div class="sliding" style="width: 12.5%; display: none; left: 0px;"></div></li> <li class="w-nav-inner" style="height: 71px; line-height: 71px; width: 12.5%;"><div class="w-nav-item"><a href="sy.html" target="_self" class="w-nav-item-link"><span class="mw-iconfont"></span> <span class="w-link-txt">\u9996\u9875</span></a> <div class="sliding" style="width: 12.5%;"></div></div></li> <li class="w-nav-inner" style="height: 71px; line-height: 71px; width: 12.5%;"><div class="w-nav-item"><a href="gsjj.html" target="_self" class="w-nav-item-link"><span class="mw-iconfont"></span> <span class="w-link-txt">\u516C\u53F8\u7B80\u4ECB</span></a> <div class="sliding" style="width: 12.5%;"></div></div></li> <li class="w-nav-inner" style="height: 71px; line-height: 71px; width: 12.5%;"><div class="w-nav-item"><a href="gsxw.html" target="_self" class="w-nav-item-link"><span class="mw-iconfont"></span> <span class="w-link-txt">\u65B0\u95FB\u52A8\u6001</span></a> <div class="sliding" style="width: 12.5%;"></div></div></li> <li class="w-nav-inner" style="height: 71px; line-height: 71px; width: 12.5%;"><div class="w-nav-item"><a href="cpzs.html" target="_self" class="w-nav-item-link">\n\t\t<span class="mw-iconfont"></span> \n\t\t<span class="w-link-txt">\u4EA7\u54C1\u5C55\u793A</span>\n\t\t</a> \n\t\t<div class="sliding" style="width: 12.5%;"></div>\n\t\t</div> \n\t\t<ul class="w-subnav" style="width: 114px; display: none;">\n\t\t<li class="w-subnav-item userWidth" v-for="item in shopData">\n\t\t<a href="javascript:;" @click="openLink(item.id)" target="_self" class="w-subnav-link" style="height: 35px; line-height: 35px;">\n\t\t<span class="mw-iconfont"></span> \n\t\t<span class="w-link-txt">{{item.name}}</span>\n\t\t</a>\n\t\t</li>\n\t\t</ul>\n\t\t </li> <li class="w-nav-inner" style="height: 71px; line-height: 71px; width: 12.5%;"><div class="w-nav-item"><a href="video.html" target="_self" class="w-nav-item-link"><span class="mw-iconfont"></span> <span class="w-link-txt">\u89C6\u9891\u7BA1\u7406</span></a> <div class="sliding" style="width: 12.5%;"></div></div></li> <li class="w-nav-inner" style="height: 71px; line-height: 71px; width: 12.5%;"><div class="w-nav-item"><a href="aptitude.html" target="_self" class="w-nav-item-link"><span class="mw-iconfont"></span> <span class="w-link-txt">\u8D44\u8D28\u7BA1\u7406</span></a> <div class="sliding" style="width: 12.5%;"></div></div></li> <li class="w-nav-inner" style="height: 71px; line-height: 71px; width: 12.5%;"><div class="w-nav-item"><a href="jmjj.html" target="_self" class="w-nav-item-link"><span class="mw-iconfont"></span> <span class="w-link-txt">\u62DB\u5546\u52A0\u76DF</span></a> <div class="sliding" style="width: 12.5%;"></div></div></li> <li class="w-nav-inner" style="height: 71px; line-height: 71px; width: 12.5%;"><div class="w-nav-item"><a href="zgs.html" target="_self" class="w-nav-item-link"><span class="mw-iconfont"></span> <span class="w-link-txt">\u8054\u7CFB\u6211\u4EEC</span></a> <div class="sliding" style="width: 12.5%;"></div></div> <ul class="w-subnav" style="width: 114px; display: none; height: 70px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;"><li class="w-subnav-item userWidth"><a href="zgs.html" target="_self" class="w-subnav-link" style="height: 35px; line-height: 35px;"><span class="mw-iconfont"></span> <span class="w-link-txt">\u603B\u516C\u53F8</span></a></li> <li class="w-subnav-item userWidth"><a href="http://zpusyiwl4h5djxzu.mikecrm.com/lW5DMCr" target="_blank" class="w-subnav-link" style="height: 35px; line-height: 35px;"><span class="mw-iconfont"></span> <span class="w-link-txt">\u7559\u8A00\u677F</span></a></li></ul></li></ul></div></div></div></div> <div id="bannerWrap_tem_2_15" class="fullcolumn-outer" style="position: absolute; top: 0px; bottom: 0px; left: -360px; width: 1920px;"></div></div></div>\n\t'
});
// 导航栏jq
$(function () {
	$('#nav_tem_9_10').find('.w-subnav').hide();
	var $this, item, itemAll, index, itemW, goTo;
	$('#nav_tem_9_10').off('mouseenter').on('mouseenter', '.w-nav-inner', function () {

		itemAll = $('#nav_tem_9_10').find('.w-subnav');
		$this = $(this);
		item = $this.find('.w-subnav');
		index = $this.index() - 1;
		itemW = $this.width();
		goTo = itemW * index;
		item.slideDown();
		$('#nav_tem_9_10').find('.sliding-box .sliding').hide().show().stop().animate({
			left: goTo
		}, 200, "linear");
	}).off('mouseleave').on('mouseleave', '.w-nav-inner', function () {
		item = $(this).find('.w-subnav');
		item.stop().slideUp();
		$('#nav_tem_9_10').find('.sliding-box .sliding').stop().fadeOut(200);
	});
	SetNavSelectedStyle('nav_tem_9_10'); //选中当前导航
	var resize = function resize() {
		$("#smv_tem_2_15 >.yibuFrameContent>.fullcolumn-inner").width($("#smv_tem_2_15").parent().width());
		$('#bannerWrap_tem_2_15').fullScreen(function (t) {
			if (VisitFromMobile()) {
				t.css("min-width", t.parent().width());
			}
		});
	};
	$(window).resize(function (e) {
		if (e.target == this) {
			resize();
		}
	});
	resize();
});