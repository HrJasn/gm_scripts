// ==UserScript==
// @name        Reply to kobeengineer
// @namespace   Reply.to.kobeengineer
// @description 匿名回覆純靠北工程師
// @include     http*://www.facebook.com/*
// @version     1.0
// @grant       none
// ==/UserScript==
    
var adddiv = document.body.appendChild(document.createElement("div"));
adddiv.id='fb-root';

/*var script = document.getElementsByTagName("script");
script.src="http://connect.facebook.net/zh_TW/all.js";*/

/*  window.fbAsyncInit = function() {
    FB.init({
      appId            : '1509010229407380',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v1.0.0'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/zh_TW/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));*/

FB.init({ appId:'1509010229407380',
    status: true,
    cookie: true,
    xfbml: true,
    oauth: true
});

var addbt = document.body.appendChild(document.createElement("input"));
	addbt.id='getid';
	addbt.type='button';
	addbt.value='測試';
	addbt.style='position:fixed;right:0px;bottom:30px;font-size:30px;background-color:#88CCFF;border:0px;border-style:solid;color: #ffffff;text-shadow: 0px 0px 2px #ffffff;border-radius:10px;';

	addbt.addEventListener('click', function(){
    
    FB.login(function (response) {
    FB.getLoginStatus(function (response) {
      
      try{
        alert(response.authResponse.accessToken);
        consoleog(response.authResponse.accessToken);
      } catch(err) {
        console.log(err);
      }
      
    });
    }, { scope: "email" });

  });

/*FB.api('162036877578796' + '/comments', 'post', { access_token: user_accessToken, message: message }, function(response) {
if (!response.error) {
alert('comments_id: ' + response.id );
}
});*/

/*FB.api(post_id + '/comments', 'post', { access_token: user_accessToken, message: message }, function(response) {
if (!response.error) {
alert('comments_id: ' + response.id );
}
});*/

//html#facebook.tinyViewport.tinyHeight body._4-u5._2yq._-kb._2ltu._605a._61s0.b_1a7o706ldf.gecko.win.x1.Locale_zh_TW div._li div#globalContainer.uiContextualLayerParent div#content.fb_content.clearfix div div.clearfix div._1qkq._1ql0 div#content_container div div.clearfix div._2pie._14i5._1qkq._1qkx div#pagelet_timeline_main_column div#id_59979aa1451595a18463474 div div#u_jsonp_3_1d div._1xnd div._5sem div#u_2i_0._4-u2.mbm._4mrt._5jmm._5pat._5v3q._4-u8 div#u_2i_1._3ccb div._5pcr.fbUserPost div form#u_2i_8.commentable_item div#u_2i_a.uiUfi.UFIContainer._5pc9._5vsj._5v9k div.UFIList div#addComment_333025780479904.UFIRow._4oep.UFIAddComment.UFIAddCommentWithPhotoAttacher._4204._2o9m div.UFIMentionsInputWrap.UFIStickersEnabledInput.UFIGifEnabledInput.clearfix div div.UFIImageBlockContent._42ef._8u div.UFICommentContainer div._fmi._613v.UFIInputContainer div._2xwx._289c div.UFIAddCommentInput._1osb._2xww._5yk1 div._5yk2 div._5rp7 div._5rpb div.notranslate._5rpu div div div._1mf._1mj