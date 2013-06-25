/*
 * Javascript scripts needed for One-Man-U's homepage.
 * Currently includes Google Analytics.
 * Todo: renren sharing and weibo sharing.
 */

/*var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-41886368-1']);
_gaq.push(['_trackPageview'])
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();*/


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-41993161-1']);
  _gaq.push(['_setDomainName', 'wanmen.org']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
