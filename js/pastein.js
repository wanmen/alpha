/*
 * Javascript scripts needed for One-Man-U's homepage.
 * Currently includes Renren Like, Google Analytics.
 * Todo: renren sharing and weibo sharing.
 */
(function(){
var p = [], w=210, h=65,
lk = {
url:''||location.href, /*喜欢的URL(不含如分页等无关参数)*/
title:''||document.title, /*喜欢标题(可选)*/
description:'支持我们，就喜欢我们！', /*喜欢简介(可选)*/
image:'' /*喜欢相关图片的路径(可选)*/
};
for(var i in lk){
p.push(i + '=' + encodeURIComponent(lk[i]||''));
}
document.write('<div class="likePanel"> <iframe scrolling="no" frameborder="0" allowtransparency="true" src="http://www.connect.renren.com/like/v2?'+p.join('&')+'" style="width:'+w+'px;height:'+h+'px;"></iframe></div>');
})();

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-41886368-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();