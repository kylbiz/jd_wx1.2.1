Template.xwzx.helpers({
	items: function () {
		return [
			{
				title: '上海出入境检验检疫局嘉定办事处挂牌成立',
				date: '2016-06-13',
				img: '../image/policy/1.png',
				url: '/zsfw/zcxq'
			},
			{
				title: '嘉定出口加工区两大平台建设',
				date: '2016-06-13',
				img: '../image/policy/2.png',
				url: '/zsfw/zcxq'
			},
			{
				title: '泰士出口加工区召开“综合整治嘉定出口加工区周边环境卫生”研讨会',
				date: '2016-06-13',
				img: '../image/policy/1.png',
				url: '/zsfw/zcxq'
			},
			{
				title: '泰士星项目在嘉定出口加工区开工建设',
				date: '2016-06-13',
				img: '../image/policy/2.png',
				url: '/zsfw/zcxq'
			}
		]
	}
});

Template.xgzc.helpers({
	laws: function () {
		return [
			{
				title: '中华人民共和国进出口商品检验法',
				date: '2016-06-13',
				img: '../image/policy/1.png',
				url: '/zsfw/fgxq'
			},
			{
				title: '国务院关于加强食品等产品安全监督管理的特别规定',
				date: '2016-06-13',
				img: '../image/policy/2.png',
				url: '/zsfw/fgxq'
			},
			{
				title: '中国人民共和国进出口商品检验法',
				date: '2016-06-13',
				img: '../image/policy/1.png',
				url: '/zsfw/fgxq'
			},
			{
				title: '国务院关于加强食品等产品安全监督管理的特别规定',
				date: '2016-06-13',
				img: '../image/policy/2.png',
				url: '/zsfw/fgxq'
			},
			{
				title: '中国人民共和国进出口商品检验法',
				date: '2016-06-13',
				img: '../image/policy/1.png',
				url: '/zsfw/fgxq'
			},
			{
				title: '国务院关于加强食品等产品安全监督管理的特别规定',
				date: '2016-06-13',
				img: '../image/policy/2.png',
				url: ''
			},
		]
	},
	policys: function () {
		return [
			{
				title: '2015年4－6月海关总署公告导读',
				date: '2015-07-17',
				img: '../image/policy/1.png',
				url: ''
			},
			{
				title: '2015年4－6月海关总署公告导读',
				date: '2015-07-17',
				img: '../image/policy/1.png',
				url: ''
			},
			{
				title: '2015年4－6月海关总署公告导读',
				date: '2015-07-17',
				img: '../image/policy/1.png',
				url: ''
			},
			{
				title: '2015年4－6月海关总署公告导读',
				date: '2015-07-17',
				img: '../image/policy/1.png',
				url: ''
			},
			{
				title: '2015年4－6月海关总署公告导读',
				date: '2015-07-17',
				img: '../image/policy/1.png',
				url: ''
			},
			{
				title: '2015年4－6月海关总署公告导读',
				date: '2015-07-17',
				img: '../image/policy/1.png',
				url: ''
			},
		]
	}
});

Template.xgzc.events({
	'click li': function (e) {
		e.preventDefault();
		var li = e.currentTarget;
		var index = $("li").index(li);
		// console.log(index);
		$(li).addClass("active").siblings().removeClass("active");
		$(".box .item").eq(index).show().siblings().hide();
	},
	'click .items': function(e) {
		e.preventDefault;
		var div = e.currentTarget;
		var url = $(div).find("input").attr("value");
		FlowRouter.go(url);
	}
});