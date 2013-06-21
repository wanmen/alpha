/**
 * \title Javascript used for like panel
 *
 * \brief Supports renren and weibo like for now.
 *
 * \details TODO: Douban and other like functionalities.
 * 
 * \remarks We want the like panel to appear on the bottom.
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

document.write
   ('<div class="likePanel"> 
   	<iframe scrolling="no" frameborder="0" allowtransparency="true" 
   	src="http://www.connect.renren.com/like/v2?'
   	+p.join('&')+'" style="width:'+w+'px;height:'+h+'px;">
   	</iframe>
   	</div>');
})();
