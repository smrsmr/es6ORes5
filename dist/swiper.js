"use strict";

Vue.component('common-swiper', {
	data: function data() {
		return {
			imgData: []
		};
	},
	mounted: function mounted() {
		var _this = this;

		// 获取轮播图列表
		$api.shop.findAdNewsAllList({
			type: 0
		}).then(function (res) {
			_this.imgData = res.data;
			_this.$nextTick(function () {
				setTimeout(function () {
					tem_3_51_sliderset3_init();
				}, 200);
			});
		}).catch(function (err) {
			console.log(err);
		});
	},

	template: "\n\t<div id=\"smv_tem_3_51\" ctype=\"slideset\" class=\"esmartMargin smartAbs \" cpid=\"1133606\" cstyle=\"Style1\"\n\t\t\tccolor=\"Item0\" areaid=\"Area0\" iscontainer=\"True\" pvid=\"\" tareaid=\"Area0\" re-direction=\"y\" daxis=\"Y\"\n\t\t\tisdeletable=\"True\" style=\"height: 679px; width: 100%; left: 0px; top: 78px;z-index:0;\">\n\t\t\t<div class=\"yibuFrameContent tem_3_51  slideset_Style1  \" style=\"overflow:visible;;\">\n\t\t\t\t<!--w-slide-->\n\t\t\t\t<div class=\"w-slide\" id=\"slider_smv_tem_3_51\">\n\t\t\t\t\t<div class=\"w-slide-inner\" data-u=\"slides\">\n\n\t\t\t\t\t<div class=\"content-box\" v-for=\"item in imgData\" :key=\"item.id\">\n\t\t\t\t\t\t<div class=\"smAreaC slideset_AreaC\">\n\t\t\t\t\t\t\t<div ctype=\"image\" class=\"esmartMargin smartAbs \">\n\t\t\t\t\t\t\t\t<div class=\"yibuFrameContent tem_27_59\">\n\t\t\t\t\t\t\t\t\t<div class=\"w-image-box\">\n\t\t\t\t\t\t\t\t\t\t<a target=\"_self\" href=\"\">\n\t\t\t\t\t\t\t\t\t\t\t<img :src=\"item.imgPath\" alt=\"\" title=\"\">\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"content-box-inner\"\n\t\t\t\t\t\t:style =\"{backgroundImage:'url('+item.imgPath+')'}\"\n\t\t\t\t\t\t\tstyle=\"background-position:50% 50%;background-repeat:no-repeat;background-size:auto;background-color:;opacity:1\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Bullet Navigator -->\n\t\t\t\t\t<div data-u=\"navigator\" class=\"w-slide-btn-box \" data-autocenter=\"1\">\n\t\t\t\t\t\t<!-- bullet navigator item prototype -->\n\t\t\t\t\t\t<div class=\"w-slide-btn\" data-u=\"prototype\"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- 1Arrow Navigator -->\n\t\t\t\t\t<span data-u=\"arrowleft\" class=\"w-slide-arrowl  slideArrow  \" data-autocenter=\"2\" id=\"left_tem_3_51\">\n\t\t\t\t\t\t<i class=\"w-itemicon mw-iconfont\">&#xb133;</i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span data-u=\"arrowright\" class=\"w-slide-arrowr slideArrow \" data-autocenter=\"2\" id=\"right_tem_3_51\">\n\t\t\t\t\t\t<i class=\"w-itemicon mw-iconfont\">&#xb132;</i>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
});

// 轮播图
tem_3_51_page = 1;
tem_3_51_sliderset3_init = function tem_3_51_sliderset3_init() {
	var jssor_1_options_tem_3_51 = {
		$AutoPlay: "False" == "True" ? false : "on" == "on", //自动播放
		$PlayOrientation: 1, //2为向上滑，1为向左滑
		$Loop: 1, //循环
		$Idle: parseInt("3000"), //切换间隔
		$SlideDuration: "1000", //延时
		$SlideEasing: $Jease$.$OutQuint,

		$CaptionSliderOptions: {
			$Class: $JssorCaptionSlideo$,
			$Transitions: GetSlideAnimation("1", "1000")
		},

		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$
		},
		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$,
			$ActionMode: "1"
		}
	};
	//初始化幻灯
	var slide = new $JssorSlider$("slider_smv_tem_3_51", jssor_1_options_tem_3_51);
	$('#smv_tem_3_51').data('jssor_slide', slide);

	//resize游览器的时候触发自动缩放幻灯秀
	$(window).bind("resize", function (e) {
		if (e.target == this) {
			var $this = $('#slider_smv_tem_3_51');
			var ww = $(window).width();
			var width = $this.parent().width();

			if (ww > width) {
				var left = parseInt((ww - width) * 10 / 2) / 10;
				$this.css({
					'left': -left
				});
			} else {
				$this.css({
					'left': 0
				});
			}
			slide.$ScaleWidth(ww);
		}
	});

	//幻灯栏目自动或手动切换时触发的事件
	slide.$On($JssorSlider$.$EVT_PARK, function (slideIndex, fromIndex) {
		var $slideWrapper = $("#slider_smv_tem_3_51 .w-slide-inner:last");
		var $fromSlide = $slideWrapper.find(".content-box:eq(" + fromIndex + ")");
		var $curSlide = $slideWrapper.find(".content-box:eq(" + slideIndex + ")");
		var $nextSlide = $slideWrapper.find(".content-box:eq(" + (slideIndex + 1) + ")");
		$("#smv_tem_3_51").attr("selectArea", $curSlide.attr("data-area"));
		$fromSlide.find(".animated").smanimate("stop");
		$curSlide.find(".animated").smanimate("stop");
		$nextSlide.find(".animated").smanimate("stop");
		$("#switch_tem_3_51 .page").html(slideIndex + 1);
		$curSlide.find(".animated").smanimate("replay");
		return false;
	});
	//切换栏点击事件
	$("#switch_tem_3_51 .left").unbind("click").click(function () {
		if (tem_3_51_page == 1) {
			tem_3_51_page = 4;
		} else {
			tem_3_51_page = tem_3_51_page - 1;
		}
		$("#switch_tem_3_51 .page").html(tem_3_51_page);
		slide.$Prev();
		return false;
	});
	$("#switch_tem_3_51 .right").unbind("click").click(function () {
		if (tem_3_51_page == 4) {
			tem_3_51_page = 1;
		} else {
			tem_3_51_page = tem_3_51_page + 1;
		}
		$("#switch_tem_3_51 .page").html(tem_3_51_page);
		slide.$Next();
		return false;
	});
};

$(function () {
	//获取幻灯显示动画类型
	var $this = $('#slider_smv_tem_3_51');
	var dh = $(document).height();
	var wh = $(window).height();
	var ww = $(window).width();
	var width = 1000;
	//区分页头、页尾、内容区宽度
	if ($this.parents(".header").length > 0) {
		width = $this.parents(".header").width();
	} else if ($this.parents(".footer").length > 0) {
		width = $this.parents(".footer").width();
	} else {
		width = $this.parents(".smvContainer").width();
	}

	if (ww > width) {
		var left = parseInt((ww - width) * 10 / 2) / 10;
		$this.css({
			'left': -left,
			'width': ww
		});
	} else {
		$this.css({
			'left': 0,
			'width': ww
		});
	}

	//解决手机端预览PC端幻灯秀时不通栏问题
	if (VisitFromMobile()) {
		$this.css("min-width", width);
		setTimeout(function () {
			var boxleft = (width - 330) / 2;
			$this.find(".w-slide-btn-box").css("left", boxleft + "px");
		}, 300);
	}
	$this.children().not(".slideArrow").css({
		"width": $this.width()
	});

	var areaId = $("#smv_tem_3_51").attr("tareaid");
	if (areaId == "") {
		var mainWidth = $("#smv_Main").width();
		$("#smv_tem_3_51 .slideset_AreaC").css({
			"width": mainWidth + "px",
			"position": "relative",
			"margin": "0 auto"
		});
	} else {
		var controlWidth = $("#smv_tem_3_51").width();
		$("#smv_tem_3_51 .slideset_AreaC").css({
			"width": controlWidth + "px",
			"position": "relative",
			"margin": "0 auto"
		});
	}
	$("#smv_tem_3_51").attr("selectArea", "Area39228");

	var arrowHeight = $('#slider_smv_tem_3_51 .w-slide-arrowl').eq(-1).outerHeight();
	var arrowTop = (18 - arrowHeight) / 2;
	$('#slider_smv_tem_3_51 .w-slide-arrowl').eq(-1).css('top', arrowTop);
	$('#slider_smv_tem_3_51 .w-slide-arrowr').eq(-1).css('top', arrowTop);
});