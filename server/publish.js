Meteor.publish('FourArticles', function() {
	return FourArticles.find();
})