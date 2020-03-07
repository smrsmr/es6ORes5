// 公共header
Vue.component('common-head', {
	data() {
		return {
			shopData: []
		}
	},
	mounted() {
		// 获取商品分类
		let params = {
			start: 1,
			pageSize: 3
		}
		$api.shop
			.goodsCategoryList(params)
			.then(res => {
				this.shopData = res.data.list;
			})
			.catch(err => {
				console.log(err);
			});
	},
	methods: {
		openLink(id) {
			window.location.href = `productinfocategory.html?id=${id}`;
		}
	},
	template: `
	<div id="smv_tem_2_15" ctype="banner" class="esmartMargin smartAbs " cpid="1133606" cstyle="Style1"
	ccolor="Item0" areaid="Area0" iscontainer="True" pvid="" tareaid="Area0" re-direction="y" daxis="Y"
	isdeletable="True" style="height: 85px;width: 100%; left: 0px; top: 0px;z-index:9;">
	<div class="title" style="position: relative;left: -356px;width: 1920px;color: #b0b0b0;background: #333;">
		<div style="font-size:16px;padding: 10px 0;margin:0 auto;width:1200px;">
		欢迎您使用中国中药有限公司暖中宝产品网站
		<span style="padding-left: 705px;vertical-align: middle;">
			<img src="static/image/phone.png" style="width: 20px;height: 20px;vertical-align: bottom;" /> 
			010-89259619
		</span>
	</div>
	</div>
	<div class="yibuFrameContent tem_2_15  banner_Style1  " style="overflow:visible;;">
		<div class="fullcolumn-inner smAreaC" id="smc_Area0" cid="tem_2_15" style="width:1200px">
			<div id="smv_tem_6_37" ctype="logoimage" class="esmartMargin smartAbs " cpid="1133606" cstyle="Style1"
				ccolor="Item0" areaid="Area0" iscontainer="False" pvid="tem_2_15" tareaid="Area0" re-direction="all"
				daxis="All" isdeletable="True" style="height: 67px; width: 142px; left: 5px; top: 6px;z-index:2;">
				<div class="yibuFrameContent tem_6_37  logoimage_Style1  " style="overflow:visible;;">
					<div class="w-image-box" data-filltype="0" id="div_tem_6_37">
						<a target="_self" href="">
							<img src="static/image/logo.png" alt="" title="" id="img_smv_tem_6_37"
								style="width: 142px; height:67px;">
						</a>
					</div>
				</div>
			</div>
			<div id="smv_tem_9_10" ctype="nav" class="esmartMargin smartAbs " cpid="1133606" cstyle="Style3"
				ccolor="Item0" areaid="Area0" iscontainer="False" pvid="tem_2_15" tareaid="Area0" re-direction="all"
				daxis="All" isdeletable="True" style="height: 71px; width: 912px; left: 287px; top: 8px;z-index:3;">
				<div class="yibuFrameContent tem_9_10  nav_Style3  " style="overflow:visible;;">
					<div id="nav_tem_9_10" class="nav_pc_t_3">
						<ul class="w-nav" navstyle="style3">
							<li class="sliding-box" style="left:-0px;top:-0px">
								<div class="sliding" style="width:12.5%;"></div>
							</li>
							<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">
								<div class="w-nav-item">
									<a href="sy.html" target="_self" class="w-nav-item-link">
										<span class="mw-iconfont"></span>
										<span class="w-link-txt">首页</span>
									</a>
									<div class="sliding" style="width:12.5%;"></div>
								</div>

							</li>
							<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">
								<div class="w-nav-item">
									<a href="gsjj.html" target="_self" class="w-nav-item-link">
										<span class="mw-iconfont"></span>
										<span class="w-link-txt">公司简介</span>
									</a>
									<div class="sliding" style="width:12.5%;"></div>
								</div>
							</li>
							<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">
								<div class="w-nav-item">
									<a href="gsxw.html" target="_self" class="w-nav-item-link">
										<span class="mw-iconfont"></span>
										<span class="w-link-txt">新闻动态</span>
									</a>
									<div class="sliding" style="width:12.5%;"></div>
								</div>
							</li>
							<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">
								<div class="w-nav-item">
									<a href="javascript:;"  @click="openLink(shopData[0].id)" target="_self" class="w-nav-item-link">
										<span class="mw-iconfont"></span>
										<span class="w-link-txt">产品展示</span>
									</a>
									<div class="sliding" style="width:12.5%;"></div>
								</div>
								<ul class="w-subnav" style="width:114px">
									<li class="w-subnav-item userWidth" v-for="item in shopData" :key="item.id">
										<a href="javascript:;" @click="openLink(item.id)" target="_self" class="w-subnav-link"
											style="height:35px;line-height:35px;">
											<span class="mw-iconfont"></span>
											<span class="w-link-txt">{{item.name}}</span>
										</a>
									</li>
								</ul>
							</li>
							<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">
								<div class="w-nav-item">
									<a href="video.html" target="_self" class="w-nav-item-link">
										<span class="mw-iconfont"></span>
										<span class="w-link-txt">视频管理</span>
									</a>
									<div class="sliding" style="width:12.5%;"></div>
								</div>
							</li>
							<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">
								<div class="w-nav-item">
									<a href="aptitude.html" target="_self" class="w-nav-item-link">
										<span class="mw-iconfont"></span>
										<span class="w-link-txt">资质管理</span>
									</a>
									<div class="sliding" style="width:12.5%;"></div>
								</div>
							</li>
							<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">
								<div class="w-nav-item">
									<a href="jmjj.html" target="_self" class="w-nav-item-link">
										<span class="mw-iconfont"></span>
										<span class="w-link-txt">招商加盟</span>
									</a>
									<div class="sliding" style="width:12.5%;"></div>
								</div>
							</li>
							<li class="w-nav-inner" style="height:71px;line-height:71px;width:12.5%;">
								<div class="w-nav-item">
									<a href="zgs.html" target="_self" class="w-nav-item-link">
										<span class="mw-iconfont"></span>
										<span class="w-link-txt">联系我们</span>
									</a>
									<div class="sliding" style="width:12.5%;"></div>
								</div>
								<ul class="w-subnav" style="width:114px">
									<li class="w-subnav-item userWidth">
										<a href="zgs.html" target="_self" class="w-subnav-link"
											style="height:35px;line-height:35px;">
											<span class="mw-iconfont"></span>
											<span class="w-link-txt">总公司</span>
										</a>
									</li>
									<li class="w-subnav-item userWidth">
										<a href="http://zpusyiwl4h5djxzu.mikecrm.com/lW5DMCr" target="_blank" class="w-subnav-link"
											style="height:35px;line-height:35px;">
											<span class="mw-iconfont"></span>
											<span class="w-link-txt">留言板</span>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div id="bannerWrap_tem_2_15" class="fullcolumn-outer" style="position: absolute; top: 0; bottom: 0;">
		</div>
	</div>
</div>
	`
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
	var resize = function () {
		$("#smv_tem_2_15 >.yibuFrameContent>.fullcolumn-inner").width($("#smv_tem_2_15").parent().width());
		$('#bannerWrap_tem_2_15').fullScreen(function (t) {
			if (VisitFromMobile()) {
				t.css("min-width", t.parent().width())
			}
		});
	}
	$(window).resize(function (e) {
		if (e.target == this) {
			resize();
		}
	});
	resize();
});