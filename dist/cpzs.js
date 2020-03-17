"use strict";

var vm = new Vue({
	el: "#app",
	data: function data() {
		return {
			imgDataMax: [],
			imgData: []
		};
	},
	mounted: function mounted() {
		var _this = this;
		// 获取详情图片
		$api.shop.findAdNewsAllList({
			type: 0,
			enable: 0,
			typeCode: 'warm-page'
		}).then(function (res) {
			var data = res.data;
			_this.imgData = data;
			_this.imgDataMax = data.filter(function (v) {
				return v.typeName === 'warm-page-max';
			});
			_this.$nextTick(function () {
				_this.initPage();
			});
		}).catch(function (err) {
			console.log(err);
		});
	},
	methods: {
		// 查找图片对象方法
		findImg: function findImg(index) {
			var data = [];
			data = this.imgData.filter(function (v) {
				return v.typeName === "warm-page-" + index + "-font";
			})[0];
			return data;
		},

		// 初始化fullPage
		initPage: function initPage() {
			//全屏滚动
			$('#app').fullpage({
				css3: true,
				navigation: true,
				slidesNavigation: true,
				verticalCentered: false,
				controlArrows: false,
				continuousHorizontal: true,
				scrollingSpeed: 700,
				showActiveTooltip: true,
				loopTop: true,
				loopBottom: true,
				anchors: ['page1', 'page2', 'page3', 'page4'],
				afterLoad: function afterLoad(anchorLink, index) {
					// 进入
					if (index == 1) {
						$('.section1').find('p').css({
							right: '100px'
						}).addClass("animated zoomIn");
					}
					if (index == 2) {
						$('.section2').find('p').css({
							bottom: '80px',
							left: "100px"
						}).addClass("animated bounceInLeft");
					}
					if (index == 3) {
						$('.section3').find('p').css({
							top: '80px',
							left: "100px"
						}).addClass("animated flipInX");
					}
					if (index == 4) {
						$('.section4').find('p').css({
							top: ' 250px',
							left: '50%',
							marginLeft: '-509px'
						}).addClass("animated rotateIn");
					}
				},
				onLeave: function onLeave(index, direction) {
					if (index == 1 && direction == 4 || index == 4 && direction == 1) {
						window.location.href = "sy.html";
						return;
					}
					// 离开
					if (index == 1) {
						setTimeout(function () {
							$('.section1').find('p').css({
								right: "-120%"
							}).removeClass("animated zoomIn");
						}, 1000);
					}
					if (index == 2) {
						setTimeout(function () {
							$('.section2').find('p').css({
								left: '-120%',
								bottom: '0'
							}).removeClass("animated bounceInLeft");
						}, 1000);
					}
					if (index == 3) {
						setTimeout(function () {
							$('.section3').find('p').css({
								left: '-120%',
								top: '0'
							}).removeClass("animated flipInX");
						}, 1000);
					}
					if (index == 4) {
						setTimeout(function () {
							$('.section4').find('p').css({
								top: '0',
								left: "-120%"
							}).removeClass("animated rotateIn");
						}, 1000);
					}
				}
			});
		}
	}
});