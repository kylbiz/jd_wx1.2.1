Template.navList.helpers({
	nav: function () {
		return [
			{
				icon: '../image/topnav/w1.png',
				clickicon: '../image/topnav/g1.png',
				text: '首页',
				url: '/'
			},
			{
				icon: '../image/topnav/w2.png',
				clickicon: '../image/topnav/g2.png',
				text: '关联园区',
				url: '/glyq'
			},
			{
				icon: '../image/topnav/w3.png',
				clickicon: '../image/topnav/g3.png',
				text: '项目建设',
				url: '/xmjs'
			},
			{
				icon: '../image/topnav/w4.png',
				clickicon: '../image/topnav/g4.png',
				text: '招商服务',
				url: '/zsfw'
			},
			{
				icon: '../image/topnav/w5.png',
				clickicon: '../image/topnav/g5.png',
				text: '平台建设',
				url: '/ptjs'
			},
			{
				icon: '../image/topnav/w6.png',
				clickicon: '../image/topnav/g6.png',
				text: '驻区企业',
				url: '/zqqy'
			},
			{
				icon: '../image/topnav/w7.png',
				clickicon: '../image/topnav/g7.png',
				text: '新闻中心',
				url: '/xwzx'
			},
			{
				icon: '../image/topnav/w8.png',
				clickicon: '../image/topnav/g8.png',
				text: '关于我们',
				url: '/'
			},
		]
	}
});

Template.topNav.events({
	'click i': function () {
		window.history.go(-1);
	},
	'click .nav-icon': function () {
		$('#nav').toggle();
	}
});


Template.navList.events({
	'click li': function (e) {
		e.preventDefault;
		var li = e.currentTarget;
		var url = $(li).attr("val");
		// var src = $(li).find("img").attr("src");
		// var newsrc = $(li).find("img").attr("csrc");
		// $(li).addClass("active").find("img").attr("src",newsrc);
		FlowRouter.go(url);
		$('#nav').hide();
	},

	'click #nav': function(e) {
		$('#nav').hide();
	}
});


