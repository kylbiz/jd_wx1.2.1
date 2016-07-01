Template.tzhj.helpers({
	items: function () {
		return [
			{
				title: '区位优势',
				img: '../image/tzhj/1.png'
			},
			{
				title: '产业优势',
				img: '../image/tzhj/2.png'
			},
			{
				title: '功能优势',
				img: '../image/tzhj/3.png'
			},
			{
				title: '资源优势',
				img: '../image/tzhj/4.png'
			},
		]
	},
	contents: function() {
		return [
			{
				title: '区位优势',
				subtitle: '区位独特，有利于电商平台布点',
				textarea: '嘉定出口加工区位于上海的西北门户，它连结上海市和江苏省，位于长三角十五个城市群的中心地带，是市场辐射的聚合点，加上四面通达、高效高速的交通条件，可以说，嘉定出口加工区从地理空间上是物流供应链上得天独厚的一块宝地，是电商交易平台布点的优先地段。在嘉定出口加工区设立配送中心，2小时货物服务圈既可覆盖全上海，同时覆盖诸多江浙知名城市，进而辐射“长三角”。 '
			},
			{
				title: '产业优势',
				subtitle: '',
				textarea: ''
			},
			{
				title: '功能优势',
				subtitle: '',
				textarea: ''
			},{
				title: '资源优势',
				subtitle: '',
				textarea: ''
			}
		]
	}
});

Template.tzhj.events({
	'click .tabs': function (e) {
		// e.preventDefault();
		var li = e.currentTarget;
		var index = $(".tabs").index(li);
		// console.log(index)
		$(".intro>div").eq(index).show().siblings().hide();
	}
});