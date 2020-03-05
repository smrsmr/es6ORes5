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
	template: '\n\t<div id="smv_tem_2_15" ctype="banner" class="esmartMargin smartAbs " cpid="1133606" cstyle="Style1"\n\tccolor="Item0" areaid="Area0" iscontainer="True" pvid="" tareaid="Area0" re-direction="y" daxis="Y"\n\tisdeletable="True" style="height: 79px; width: 100%; left: 0px; top: 0px;z-index:9;">\n\t<div class="yibuFrameContent tem_2_15  banner_Style1  " style="overflow:visible;;">\n\t\t<div class="fullcolumn-inner smAreaC" id="smc_Area0" cid="tem_2_15" style="width:1200px">\n\t\t\t<div id="smv_tem_6_37" ctype="logoimage" class="esmartMargin smartAbs " cpid="1133606" cstyle="Style1"\n\t\t\t\tccolor="Item0" areaid="Area0" iscontainer="False" pvid="tem_2_15" tareaid="Area0" re-direction="all"\n\t\t\t\tdaxis="All" isdeletable="True" style="height: 67px; width: 142px; left: 5px; top: 6px;z-index:2;">\n\t\t\t\t<div class="yibuFrameContent tem_6_37  logoimage_Style1  " style="overflow:visible;;">\n\t\t\t\t\t<div class="w-image-box" data-filltype="0" id="div_tem_6_37">\n\t\t\t\t\t\t<a target="_self" href="">\n\t\t\t\t\t\t\t<img src="static/image/logo.png" alt="" title="" id="img_smv_tem_6_37"\n\t\t\t\t\t\t\t\tstyle="width: 142px; height:67px;">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id="smv_tem_9_10" ctype="nav" class="esmartMargin smartAbs " cpid="1133606" cstyle="Style3"\n\t\t\t\tccolor="Item0" areaid="Area0" iscontainer="False" pvid="tem_2_15" tareaid="Area0" re-direction="all"\n\t\t\t\tdaxis="All" isdeletable="True" style="height: 71px; width: 912px; left: 287px; top: 8px;z-index:3;">\n\t\t\t\t<div class="yibuFrameContent tem_9_10  nav_Style3  " style="overflow:visible;;">\n\t\t\t\t\t<div id="nav_tem_9_10" class="nav_pc_t_3">\n\t\t\t\t\t\t<ul class="w-nav" navstyle="style3">\n\t\t\t\t\t\t\t<li class="sliding-box" style="left:-0px;top:-0px">\n\t\t\t\t\t\t\t\t<div class="sliding" style="width:12.5%;"></div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">\n\t\t\t\t\t\t\t\t<div class="w-nav-item">\n\t\t\t\t\t\t\t\t\t<a href="sy.html" target="_self" class="w-nav-item-link">\n\t\t\t\t\t\t\t\t\t\t<span class="mw-iconfont"></span>\n\t\t\t\t\t\t\t\t\t\t<span class="w-link-txt">\u9996\u9875</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class="sliding" style="width:12.5%;"></div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">\n\t\t\t\t\t\t\t\t<div class="w-nav-item">\n\t\t\t\t\t\t\t\t\t<a href="gsjj.html" target="_self" class="w-nav-item-link">\n\t\t\t\t\t\t\t\t\t\t<span class="mw-iconfont"></span>\n\t\t\t\t\t\t\t\t\t\t<span class="w-link-txt">\u516C\u53F8\u7B80\u4ECB</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class="sliding" style="width:12.5%;"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">\n\t\t\t\t\t\t\t\t<div class="w-nav-item">\n\t\t\t\t\t\t\t\t\t<a href="gsxw.html" target="_self" class="w-nav-item-link">\n\t\t\t\t\t\t\t\t\t\t<span class="mw-iconfont"></span>\n\t\t\t\t\t\t\t\t\t\t<span class="w-link-txt">\u65B0\u95FB\u52A8\u6001</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class="sliding" style="width:12.5%;"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">\n\t\t\t\t\t\t\t\t<div class="w-nav-item">\n\t\t\t\t\t\t\t\t\t<a href="javascript:;"  @click="openLink(shopData[0].id)" target="_self" class="w-nav-item-link">\n\t\t\t\t\t\t\t\t\t\t<span class="mw-iconfont"></span>\n\t\t\t\t\t\t\t\t\t\t<span class="w-link-txt">\u4EA7\u54C1\u5C55\u793A</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class="sliding" style="width:12.5%;"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ul class="w-subnav" style="width:114px">\n\t\t\t\t\t\t\t\t\t<li class="w-subnav-item userWidth" v-for="item in shopData" :key="item.id">\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" @click="openLink(item.id)" target="_self" class="w-subnav-link"\n\t\t\t\t\t\t\t\t\t\t\tstyle="height:35px;line-height:35px;">\n\t\t\t\t\t\t\t\t\t\t\t<span class="mw-iconfont"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="w-link-txt">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">\n\t\t\t\t\t\t\t\t<div class="w-nav-item">\n\t\t\t\t\t\t\t\t\t<a href="jmjj.html" target="_self" class="w-nav-item-link">\n\t\t\t\t\t\t\t\t\t\t<span class="mw-iconfont"></span>\n\t\t\t\t\t\t\t\t\t\t<span class="w-link-txt">\u62DB\u5546\u52A0\u76DF</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class="sliding" style="width:12.5%;"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">\n\t\t\t\t\t\t\t\t<div class="w-nav-item">\n\t\t\t\t\t\t\t\t\t<a href="javascript:;" target="_self" class="w-nav-item-link">\n\t\t\t\t\t\t\t\t\t\t<span class="mw-iconfont"></span>\n\t\t\t\t\t\t\t\t\t\t<span class="w-link-txt">\u5BA2\u6237\u670D\u52A1</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class="sliding" style="width:12.5%;"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ul class="w-subnav" style="width:114px">\n\t\t\t\t\t\t\t\t\t<li class="w-subnav-item userWidth">\n\t\t\t\t\t\t\t\t\t\t<a href="http://zpusyiwl4h5djxzu.mikecrm.com/lW5DMCr" target="_blank" class="w-subnav-link"\n\t\t\t\t\t\t\t\t\t\t\tstyle="height:35px;line-height:35px;">\n\t\t\t\t\t\t\t\t\t\t\t<span class="mw-iconfont"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="w-link-txt">\u7559\u8A00\u677F</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">\n\t\t\t\t\t\t\t\t<div class="w-nav-item">\n\t\t\t\t\t\t\t\t\t<a href="zgs.html" target="_self" class="w-nav-item-link">\n\t\t\t\t\t\t\t\t\t\t<span class="mw-iconfont"></span>\n\t\t\t\t\t\t\t\t\t\t<span class="w-link-txt">\u8054\u7CFB\u6211\u4EEC</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class="sliding" style="width:12.5%;"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ul class="w-subnav" style="width:114px">\n\t\t\t\t\t\t\t\t\t<li class="w-subnav-item userWidth">\n\t\t\t\t\t\t\t\t\t\t<a href="zgs.html" target="_self" class="w-subnav-link"\n\t\t\t\t\t\t\t\t\t\t\tstyle="height:35px;line-height:35px;">\n\t\t\t\t\t\t\t\t\t\t\t<span class="mw-iconfont"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="w-link-txt">\u603B\u516C\u53F8</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id="bannerWrap_tem_2_15" class="fullcolumn-outer" style="position: absolute; top: 0; bottom: 0;">\n\t\t</div>\n\t</div>\n</div>\n\t'
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