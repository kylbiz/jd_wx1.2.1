BlazeLayout.setRoot('body');
// 首页
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("home");
  }
});

// 园区概况
FlowRouter.route('/yugk', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "yugk"});
  }
});

//重点项目
FlowRouter.route('/zdxm', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "zdxm"});
  }
});

//招商服务
FlowRouter.route('/zsfw', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "zsfw"});
  }
});

//关于我们
FlowRouter.route('/aboutus', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "aboutus"});
  }
});

//招商服务/招商项目
FlowRouter.route('/zsfw/zsxm', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "zsxm"});
  }
});

//招商服务/相关政策
FlowRouter.route('/zsfw/xgzc', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "xgzc"});
  }
});

//招商服务/相关政策/政策详情
FlowRouter.route('/zsfw/zcxq', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "zcxq"});
  }
});

//招商服务/相关政策/法规详情
FlowRouter.route('/zsfw/fgxq', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "fgxq"});
  }
});


//招商服务/投资流程
FlowRouter.route('/zsfw/tzlc', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "tzlc"});
  }
});


//招商服务/注册流程
FlowRouter.route('/zsfw/zclc', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "zclc"});
  }
});

//园区动态/新闻
FlowRouter.route('/yqdt', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "yqdt"});
  }
});

//新闻中心
FlowRouter.route('/xwzx', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "xwzx"});
  }
});

//驻区企业 
FlowRouter.route('/zqqy', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "zqqy"});
  }
});

//平台建设
FlowRouter.route('/ptjs', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "ptjs"});
  }
});

//平台建设/了解四大平台
FlowRouter.route('/ptjs/sdpt', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "sdpt"});
  }
});

//平台建设/了解四大平台/跨境电子商务
FlowRouter.route('/ptjs/kjdzsw', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "kjdzsw"});
  }
});

//平台建设/商务合作
FlowRouter.route('/ptjs/swhz', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "swhz"});
  }
});

//平台建设/合作企业
FlowRouter.route('/ptjs/hzqy', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "hzqy"});
  }
});

//平台建设/合作企业/合作伙伴
FlowRouter.route('/ptjs/hzhb', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "hzhb"});
  }
});


//平台建设/在线咨询 
//直接 <a tel=""></a>

//项目建设 
FlowRouter.route('/xmjs', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "xmjs"});
  }
});

//项目建设 /发展计划
FlowRouter.route('/xmjs/fzjh', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "fzjh"});
  }
});

//项目建设/落地项目
FlowRouter.route('/xmjs/ldxm', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "ldxm"});
  }
});

//关联园区 
FlowRouter.route('/glyq', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "glyq"});
  }
});

//关联园区/园区概况
FlowRouter.route('/glyq/yqgk', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "yqgk"});
  }
});

//关联园区/功能定位
FlowRouter.route('/glyq/gndw', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "gndw"});
  }
});

//关联园区/投资环境
FlowRouter.route('/glyq/tzhj', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "tzhj"});
  }
});

//关联园区/重点项目
FlowRouter.route('/glyq/zdxm', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "zdxm"});
  }
});

//关联园区/园区文化
FlowRouter.route('/glyq/yqwh', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "yqwh"});
  }
});

//关于我们
FlowRouter.route('/gywm', {
  action: function() {
    BlazeLayout.render("mainLayout",{ content: "gywm"});
  }
});
