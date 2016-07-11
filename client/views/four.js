Template.sdpt.helpers({
	list: function () {
		return [
			{
				name: '嘉境通跨境电商平台',
				url: '/ptjs/1',
				bg: '../image/four/bg1.png'
			},
			{
				name: '汽车及其零部件展示交易平台',
				url: '/ptjs/2',
				bg: '../image/four/bg2.png'
			},
			{
				name: '食品、化妆品的展示交易平台',
				url: '/ptjs/3',
				bg: '../image/four/bg3.png'
			},
			{
				name: '离岸金融服务平台',
				url: '/ptjs/4',
				bg: '../image/four/bg4.png'
			}
		]
	}
});



Template.kjdzsw.helpers({

	article: function() {
		var id = FlowRouter.getParam('_id');
		console.log(id);
		// return FourArticles.findOne({id: id});
		return FourArticles.find({id: id})
	}

});

