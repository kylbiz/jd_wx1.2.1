Template.tzlc.helpers({
	list: function () {
		return [
			{
				step: '第一步  地块（厂房）选址',
				title: '开发区提供规划整齐、市政设施完备的地块及各种类型标准厂房供客户选择。',
				img: ''
			},
			{
				step: '第二步  签订合同',
				title: '投资客户在选定地块或厂房后，将与上海市嘉定工业区签订有关协议，以确保双方的权利和义务，使客户的投资行为得到法律的保障。批租土地的客户将与嘉定区房屋土地局签订《上海市嘉定区国有土地使用权出让合同》',
				img: ''
			},
			{
				step: '第三步  项目审批及企业登记',
				title: '',
				img: '../image/tzlc/step3.png'
			},
			{
				step: '第四步  项目设立',
				title: '',
				img: '../image/tzlc/step4.png'
			},
			{
				step: '第五步  项目建设',
				title: '',
				img: '../image/tzlc/step5.png'
			},
			{
				step: '第六步  项目竣工验收',
				title: '',
				img: '../image/tzlc/step6.png'
			},
		]
	}
});



Template.tzlc.events({
	'click li': function (e) {
		e.preventDefault();
		var li = e.currentTarget;
		var i = $(li).find("i");
		$(li).addClass("active").next("div").toggle();
		if($(i).hasClass("hover"))
		{
		    $(i).removeClass("hover");
		}
		else
		{
			$(i).addClass("hover");
		}
	}
});


Template.zclc.events({
	'click li': function (e) {
		e.preventDefault();
		var li = e.currentTarget;
		var index = $(".tab").index(li);
		// console.log(index);
		$(li).addClass("active").siblings().removeClass("active");
		$(".box img").eq(index).show().siblings().hide();
	}
});