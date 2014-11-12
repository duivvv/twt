var Tweet = require("./Tweet.js");

function User(obj, my_screen_name){
	this.obj = obj;
	this.my_screen_name = my_screen_name || "";
}

User.prototype.display = function(Logger, TweetLogger){

	Logger.screen_name(this.obj.screen_name, this.obj.verified, this.my_screen_name);

	if(this.obj.screen_name !== this.my_screen_name){
		Logger.divider();
		Logger.status(this.obj.following, this.obj.follow_request_sent);
	}

	Logger.divider();

	Logger.content(this.obj.description);

	if(this.obj.location){
		Logger.divider();
		Logger.location(this.obj.location);
	}

	Logger.divider();

	Logger.stats(this.obj.statuses_count, this.obj.followers_count, this.obj.friends_count);

	Logger.divider();

	this.obj.status.user = {};
	this.obj.status.user.screen_name = this.obj.screen_name;

	Logger.last_tweet();

	var tweet = new Tweet(this.obj.status, false, false);
	tweet.display(TweetLogger);

	Logger.registered(this.obj.created_at);

}

module.exports = User;
