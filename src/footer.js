Vue.component("common-footer", {
	data: function data() {
		return {
			codeImg: "",
			isCode: false
		};
	},
	mounted() {
		// 获取公众号二维码
		$api.shop
			.findAdNewsAllList({
				type: 0,
				enable: 0,
				typeCode: "weixin-logo"
			})
			.then(res => {
				this.codeImg = res.data[0].imgPath;
			})
			.catch(function (err) {
				console.log(err);
			});
	},
	methods: {
		// 跳转链接
		pushHref: function pushHref(url) {
			window.location.href = "" + url;
		},
		menuMove() {
			this.isCode = true;
		},
		menuOut() {
			this.isCode = false;
		}
	},
	template: `
	<div bgscroll="none" style="background-color: rgb(56, 118, 29); background-image: none; background-repeat: no-repeat; background-position: 0px 0px; position: relative; width: 100%; min-width: 1200px; background-size: auto;">
	<div cpid="1133606" id="smv_Area3" class=" footer" style="width: 1083px; height: 330px; position: relative; margin: 0px auto;">
	 <div id="smv_tem_10_45" ctype="text" cpid="1133606" cstyle="Style1" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 40px; width: 127px; left: 2px; top: 22px; z-index: 2;">
		<div class="yibuFrameContent tem_10_45  text_Style1  " style="overflow: hidden;">
		 <div id="txt_tem_10_45" style="height: 100%;">
			<div id="txtc_tem_10_45" class="editableContent" style="height: 100%; overflow-wrap: break-word;">
			 <p style="text-align: center;"><span style="font-size: 20px;"><span style="line-height: 1.75;"><span style="color: rgb(238, 238, 238); font-family: &quot;Source Han Sans&quot;, Geneva, sans-serif;">公司简介</span></span></span></p>
			</div>
		 </div>
		</div>
	 </div>
	 <div id="smv_tem_11_12" ctype="nav" cpid="1133606" cstyle="Style12" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="width: 99px; left: 18px; top: 77px; z-index: 3;">
		<div class="yibuFrameContent tem_11_12  nav_Style12  " style="overflow: visible;">
		 <div id="nav_tem_11_12" class="xn-resize">
			<div navstyle="style12" class="w-nav">
			 <ul class="w-nav-inner">
				<li class="w-nav-item"><a href="gsjj.html" target="_self"><span class="w-nav-pic-first mw-iconfont" style="height: 36.2px; line-height: 36.2px;"></span> <span class="w-nav-text" style="height: 36.2px; line-height: 36.2px;">公司简介</span></a></li>
			 </ul>
			</div>
		 </div>
		</div>
	 </div>
	 <div ctype="text" cpid="1133606" cstyle="Style1" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 40px; width: 127px; left: 2px; top: 146px; z-index: 2;">
		<div class="yibuFrameContent tem_10_45  text_Style1  " style="overflow: hidden;">
			<div id="txt_tem_10_45" style="height: 100%;">
			<div @click="pushHref('cpzs.html')" id="txtc_tem_10_45" class="editableContent" style="height: 100%; overflow-wrap: break-word;">
				<p style="text-align: center;"><span style="font-size: 20px;"><span style="cursor: pointer;line-height: 1.75;"><span style="color: rgb(238, 238, 238); font-family: &quot;Source Han Sans&quot;, Geneva, sans-serif;">产品展示</span></span></span></p>
			</div>
			</div>
		</div>
	 </div>
	 <div  ctype="nav" cpid="1133606" cstyle="Style12" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="width: 99px; left: 18px; top: 200px; z-index: 3;">
	  <div class="yibuFrameContent tem_11_12  nav_Style12  " style="overflow: visible;">
			<div id="nav_tem_11_12" class="xn-resize">
			<div navstyle="style12" class="w-nav">
				<ul class="w-nav-inner">
				<li class="w-nav-item"><a href="cpzs.html" target="_self"><span class="w-nav-pic-first mw-iconfont" style="height: 36.2px; line-height: 36.2px;"></span> <span class="w-nav-text" style="height: 36.2px; line-height: 36.2px;">产品列表</span></a></li>
				</ul>
			</div>
			</div>
		</div>
	 </div>
	 <div ctype="text" cpid="1133606" cstyle="Style1" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 40px; width: 127px; left: 123px; top: 146px; z-index: 2;">
		<div class="yibuFrameContent tem_10_45  text_Style1  " style="overflow: hidden;">
			<div id="txt_tem_10_45" style="height: 100%;">
			<div @click="pushHref('video.html')" id="txtc_tem_10_45" class="editableContent" style="height: 100%; overflow-wrap: break-word;">
				<p style="text-align: center;"><span style="font-size: 20px;"><span style="cursor: pointer;line-height: 1.75;"><span style="color: rgb(238, 238, 238); font-family: &quot;Source Han Sans&quot;, Geneva, sans-serif;">视频管理</span></span></span></p>
			</div>
			</div>
		</div>
	 </div>
	 <div  ctype="nav" cpid="1133606" cstyle="Style12" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="width: 99px; left: 134px; top: 200px; z-index: 3;">
	  <div class="yibuFrameContent tem_11_12  nav_Style12  " style="overflow: visible;">
			<div id="nav_tem_11_12" class="xn-resize">
			<div navstyle="style12" class="w-nav">
				<ul class="w-nav-inner">
				<li class="w-nav-item"><a href="video.html" target="_self"><span class="w-nav-pic-first mw-iconfont" style="height: 36.2px; line-height: 36.2px;"></span> <span class="w-nav-text" style="height: 36.2px; line-height: 36.2px;">视频列表</span></a></li>
				</ul>
			</div>
			</div>
		</div>
	 </div>
	 <div ctype="text" cpid="1133606" cstyle="Style1" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 40px; width: 127px; left: 239px; top: 146px; z-index: 2;">
		<div class="yibuFrameContent tem_10_45  text_Style1  " style="overflow: hidden;">
			<div id="txt_tem_10_45" style="height: 100%;">
			<div @click="pushHref('aptitude.html')" id="txtc_tem_10_45" class="editableContent" style="height: 100%; overflow-wrap: break-word;">
				<p style="text-align: center;"><span style="font-size: 20px;"><span style="cursor: pointer;line-height: 1.75;"><span style="color: rgb(238, 238, 238); font-family: &quot;Source Han Sans&quot;, Geneva, sans-serif;">资质管理</span></span></span></p>
			</div>
			</div>
		</div>
	 </div>
	 <div  ctype="nav" cpid="1133606" cstyle="Style12" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="width: 99px; left: 253px; top: 200px; z-index: 3;">
	 <div class="yibuFrameContent tem_11_12  nav_Style12  " style="overflow: visible;">
		 <div id="nav_tem_11_12" class="xn-resize">
		 <div navstyle="style12" class="w-nav">
			 <ul class="w-nav-inner">
			 <li class="w-nav-item"><a href="aptitude.html" target="_self"><span class="w-nav-pic-first mw-iconfont" style="height: 36.2px; line-height: 36.2px;"></span> <span class="w-nav-text" style="height: 36.2px; line-height: 36.2px;">资质列表</span></a></li>
			 </ul>
		 </div>
		 </div>
	 </div>
	</div>
	 <div id="smv_tem_12_18" ctype="nav" cpid="1133606" cstyle="Style12" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="width: 99px; left: 134px; top: 77px; z-index: 3;">
		<div class="yibuFrameContent tem_12_18  nav_Style12  " style="overflow: visible;">
		 <div id="nav_tem_12_18" class="xn-resize">
			<div navstyle="style12" class="w-nav">
			 <ul class="w-nav-inner">
				<li class="w-nav-item"><a href="gsxw.html" target="_self"><span class="w-nav-pic-first mw-iconfont" style="height: 34px; line-height: 34px;"></span> <span class="w-nav-text" style="height: 34px; line-height: 34px;">热点资讯</span></a></li>
			 </ul>
			</div>
		 </div>
		</div>
	 </div>
	 <div id="smv_tem_13_18" ctype="text" cpid="1133606" cstyle="Style1" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 40px; width: 118px; left: 123px; top: 22px; z-index: 2;">
		<div class="yibuFrameContent tem_13_18  text_Style1  " style="overflow: hidden;">
		 <div id="txt_tem_13_18" style="height: 100%;">
			<div id="txtc_tem_13_18" class="editableContent" style="height: 100%; overflow-wrap: break-word;">
			 <p style="text-align: center;"><span style="font-size: 20px;"><span style="line-height: 1.75;"><span style="color: rgb(238, 238, 238); font-family: &quot;Source Han Sans&quot;, Geneva, sans-serif;">新闻动态</span></span></span></p>
			</div>
		 </div>
		</div>
	 </div>
	 <div id="smv_tem_14_56" ctype="nav" cpid="1133606" cstyle="Style12" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="width: 99px; left: 253px; top: 77px; z-index: 3;">
		<div class="yibuFrameContent tem_14_56  nav_Style12  " style="overflow: visible;">
		 <div id="nav_tem_14_56" class="xn-resize">
			<div navstyle="style12" class="w-nav">
			 <ul class="w-nav-inner">
				<li class="w-nav-item"><a href="jmjj.html" target="_self"><span class="w-nav-pic-first mw-iconfont" style="height: 37.2px; line-height: 37.2px;"></span> <span class="w-nav-text" style="height: 37.2px; line-height: 37.2px;">加盟简介</span></a></li>
			 </ul>
			</div>
		 </div>
		</div>
	 </div>
	 <div id="smv_tem_15_56" ctype="text" cpid="1133606" cstyle="Style1" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 40px; width: 126px; left: 239px; top: 22px; z-index: 2;">
		<div class="yibuFrameContent tem_15_56  text_Style1  " style="overflow: hidden;">
		 <div id="txt_tem_15_56" style="height: 100%;">
			<div id="txtc_tem_15_56" class="editableContent" style="height: 100%; overflow-wrap: break-word;">
			 <p style="text-align: center;"><span style="font-size: 20px;"><span style="line-height: 1.75;"><span style="color: rgb(238, 238, 238); font-family: &quot;Source Han Sans&quot;, Geneva, sans-serif;">招商加盟</span></span></span></p>
			</div>
		 </div>
		</div>
	 </div>
	 <div id="smv_tem_16_56" ctype="nav" cpid="1133606" cstyle="Style12" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="width: 99px; left: 372px; top: 77px; z-index: 3;">
		<div class="yibuFrameContent tem_16_56  nav_Style12  " style="overflow: visible;">
		 <div id="nav_tem_16_56" class="xn-resize">
			<div navstyle="style12" class="w-nav">
			 <ul class="w-nav-inner">
				<li class="w-nav-item"><a href="http://zpusyiwl4h5djxzu.mikecrm.com/lW5DMCr" target="_self"><span class="w-nav-pic-first mw-iconfont" style="height: 33px; line-height: 33px;"></span> <span class="w-nav-text" style="height: 33px; line-height: 33px;">留言板</span></a></li>
			 </ul>
			</div>
		 </div>
		</div>
	 </div>
	 <div id="smv_tem_17_56" ctype="text" cpid="1133606" cstyle="Style1" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 40px; width: 135px; left: 357px; top: 22px; z-index: 2;">
		<div class="yibuFrameContent tem_17_56  text_Style1  " style="overflow: hidden;">
		 <div id="txt_tem_17_56" style="height: 100%;">
			<div id="txtc_tem_17_56" class="editableContent" style="height: 100%; overflow-wrap: break-word;">
			 <p style="text-align: center;"><span style="font-size: 20px;"><span style="line-height: 1.75;"><span style="color: rgb(238, 238, 238); font-family: &quot;Source Han Sans&quot;, Geneva, sans-serif;">客户服务</span></span></span></p>
			</div>
		 </div>
		</div>
	 </div>
	 <div id="smv_tem_18_24" ctype="nav" cpid="1133606" cstyle="Style12" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="width: 123px; left: 482px; top: 77px; z-index: 3;">
		<div class="yibuFrameContent tem_18_24  nav_Style12  " style="overflow: visible;">
		 <div id="nav_tem_18_24" class="xn-resize">
			<div navstyle="style12" class="w-nav">
			 <ul class="w-nav-inner">
				<li class="w-nav-item"><a href="zgs.html" target="_self"><span class="w-nav-pic-first mw-iconfont" style="height: 33.5px; line-height: 33.5px;"></span> <span class="w-nav-text" style="height: 33.5px; line-height: 33.5px;">总公司</span></a></li>
			 </ul>
			</div>
		 </div>
		</div>
	 </div>
	 <div id="smv_tem_19_24" ctype="text" cpid="1133606" cstyle="Style1" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 40px; width: 127px; left: 486px; top: 22px; z-index: 2;">
		<div class="yibuFrameContent tem_19_24  text_Style1  " style="overflow: hidden;">
		 <div id="txt_tem_19_24" style="height: 100%;">
			<div id="txtc_tem_19_24" class="editableContent" style="height: 100%; overflow-wrap: break-word;">
			 <p style="text-align: center;"><span style="font-size: 20px;"><span style="line-height: 1.75;"><span style="color: rgb(238, 238, 238); font-family: &quot;Source Han Sans&quot;, Geneva, sans-serif;">联系我们</span></span></span></p>
			</div>
		 </div>
		</div>
	 </div>
	 <div id="smv_tem_20_20" ctype="companyinfo" cpid="1133606" cstyle="Style2" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="width: 360px; left: 654px; top: 21px; z-index: 4;">
		<div class="yibuFrameContent tem_20_20  companyinfo_Style2  " style="overflow: hidden;">
		 <ul class="w-company-info iconStyle1">
			<li class="company-info-item"><a href="javascript:void(0)" >
				<div class="company-info-titleBox">
				 <span class="company-info-icon "><i class="ltd-icon  gs-dizhi"></i></span> 
				 <span class="company-info-title " style="white-space: pre;">地址：</span>
				</div> 
				<div class="company-text">
				 <span class="company-info-text">北京市海淀区西四环北路15号依斯特大厦8层</span>
				</div></a></li> 
			<li class="company-info-item"><a href="tel:010-89259619">
				<div class="company-info-titleBox">
				 <span class="company-info-icon "><i class="ltd-icon  gs-dianhua"></i></span> 
				 <span class="company-info-title " style="white-space: pre;">电话：</span>
				</div> 
				<div class="company-text">
				 <span class="company-info-text">010-89259619</span>
				</div></a>
			</li>
			<li class="company-info-item">
				<a href="javascript:;">
					<div class="company-info-titleBox">
						<span class="company-info-icon ">
							<i class="ltd-icon  gs-youxiang"></i>
						</span>
						<span class="company-info-title " style="white-space:pre">邮箱：</span>
					</div>
					<div class="company-text">
						<span class="company-info-text">jijian@sinopharm.com</span>
					</div>
				</a>
			</li>
			
		 </ul>
		</div>
	 </div>
	 <div id="smv_tem_21_42" ctype="image" cpid="1133606" cstyle="Style1" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 101px; width: 101px; left: 897px; top:78px; z-index: 5;">
		<div class="yibuFrameContent tem_21_42  image_Style1  " style="overflow: visible;">
		 <div data-filltype="0" id="div_tem_21_42" class="w-image-box" style="height: 101px; width: 101px;">
			<a target="_self"><img :src="codeImg" alt="erweima" title="erweima" id="img_smv_tem_21_42" style="width: 101px; height: 101px;" /></a>
		 </div>
		</div>
	 </div>
	 <div id="smv_tem_22_17" ctype="line" cpid="1133606" cstyle="Style1" ccolor="Item1" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="x" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 20px; width: 1199px; left: 0px; top: 284px; z-index: 6;">
		<div class="yibuFrameContent tem_22_17  line_Style1  " style="overflow: visible;">
		 <div style="position: relative; height: 100%;">
			<div linetype="horizontal" class="w-line" style="position: absolute; top: 50%;"></div>
		 </div>
		</div>
	 </div>
	 <div id="smv_tem_23_27" ctype="button" cpid="1133606" cstyle="Style1" ccolor="Item1" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 29px; width: 99px; left: 899px; top: 187px; z-index: 7;">
		<div class="yibuFrameContent tem_23_27  button_Style1  " style="overflow: visible;">
		 <a target="_self" class="w-button f-ellipsis" style="width: 97px; height: 27px; line-height: 27px;"><span class="w-button-position"><em class="w-button-text f-ellipsis"><i class="mw-iconfont w-button-icon w-icon-hide"></i>微信公众号 </em></span></a>
		</div>
	 </div>
	 <div id="smv_tem_24_0" ctype="companyinfo" cpid="1133606" cstyle="Style4" ccolor="Item0" areaid="Area3" iscontainer="False" pvid="" tareaid="Area3" re-direction="all" daxis="All" isdeletable="True" class="esmartMargin smartAbs " style="height: 32px; margin-left: -366px;width: 732px; left: 50%; top: 280px; z-index: 8;">
		<div class="yibuFrameContent tem_24_0  companyinfo_Style4  " style="overflow: hidden;">
		 <div class="w-company-info iconStyle1">
			<span class="company-info-item"><a style="font-size: 20px;" href="javascript:void(0)"><span class="icon company-info-icon    mw-icon-hide "><i class="ltd-icon gs-gongsi"></i></span> <span class="company-info-title" style="white-space: pre;">版权所有 &copy; </span> <span class="company-info-text">中国医药集团@中国中药控股有限公司</span></a></span> 
			<span class="company-info-item"><a style="font-size: 20px;" href="javascript:;" target="_blank"><span class="icon company-info-icon    mw-icon-hide "><i class="ltd-icon gs-beian"></i></span> <span class="company-info-title" style="white-space: pre;">备案号</span> <span class="company-info-text">京ICP备06046946号-1 </span></a></span>
		 </div>
		</div>
	 </div>
	</div>
	<div  @mousemove="menuMove" @mouseout="menuOut" id="code" 
	style="position:fixed;width: 44px;height: 140px;bottom: 30px;right:0;background:#ccc;z-index:9999;cursor:pointer">
	   <img src="static/image/edit.png" style="width: 32px;
		 height: 32px;
		 margin: 10px auto;
		 display: block;" />
		 <p style="font-size: 16px;
		 line-height: 19px;
		 width: 20px;
		 text-align: center;
		 margin: 0 auto;">意见反馈</p>
		 <div v-if="isCode" id="img" style="position: absolute;
		 transition: all 1s;
		 width: 140px;
		 height: 140px;
		 background: #cccc;
		 right: 58px;
		 bottom: 45px;">
		  <img :src="codeImg" style="width: 140px;
			height: 140px;
			margin: 0 auto;
			display: block;" />
			<span style="position: absolute;
			display: block;
			width: 0px;
			height: 0px;
			border-width: 10px;
			border-style: solid;
			border-color: transparent transparent transparent white;
			border-image: initial;
			right: -20px;
			top: 64px;"></span>
		 </div>
	</div>
 </div>
	`
});