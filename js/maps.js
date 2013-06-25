(function(config){window.amap = window.amap || {};
amap.maps = amap.maps || {};

// åŠ¨æ€åŠ è½½
function getScript(src) {
	var docs = document;
	if (docs.body && config[5]) {
		var node = docs.createElement('script');
		node.charset = "utf-8";
	    node.src = src;
	    docs.body.appendChild(node);
	} else {
		docs.write('<script src="'+ src +'" type="text/javascript" charset="utf-8"></script>');
	}
}

function getLink(src) {
	if (document.getElementsByTagName("head")[0]) {
		var link=document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", src);
		document.getElementsByTagName("head")[0].appendChild(link);
	} else {
		document.write('<link rel="stylesheet" type="text/css" href="' + src + '">');
	}
}

// åˆå§‹åŒ–éœ€è¦çš„çŽ¯å¢ƒå˜é‡
amap.maps._load_ = function(apiLoad) {
	delete amap.maps._load_;
	apiLoad(config, loadScriptTime);
};

var loadScriptTime = (new Date).getTime();
// åŠ è½½CSSæ ·å¼
getLink(config[2]+'/theme/v'+config[4]+'/style.css');

// åŠ è½½å…¥å£æ–‡ä»¶
getScript(config[2]+ "/maps/main?v="+config[4]);
})(["f42f3a989472e81e42bb79b8ce74ffc4",[114.434945,38.583943,118.536708,41.287731],"http://webapi.amap.com",1,"1.2"])

var mapObj,tool,view,scale;
function mapInit(){
	mapObj = new AMap.Map("map",{
		center:new AMap.LngLat(116.392936,39.919479)
	});
	mapObj.plugin(["AMap.ToolBar","AMap.OverView,AMap.Scale"],function(){
		//加载工具条
		tool = new AMap.ToolBar({
			direction:false,
			ruler:false,
			autoPosition:false//禁止自动定位
		});
		mapObj.addControl(tool);
		//加载鹰眼
		view = new AMap.OverView({visible:false});
		mapObj.addControl(view);
		//加载比例尺
		scale = new AMap.Scale();
		mapObj.addControl(scale);
	});
}
function addCustomMarker(x,y,name){
	//自定义覆盖物dom 元素
	var m = document.createElement("div");
	m.className = "marker";
	var n = document.createElement("span");
	n.innerHTML = name;
	m.appendChild(n);
	
	var marker1 = new AMap.Marker({
		map:mapObj,
		position:new AMap.LngLat(x,y), //基点位置
		offset:new AMap.Pixel(0,-40), //相对于基点的偏移位置
		//draggable:true,  //是否可拖动
		content:m   //自定义覆盖物内容
	});
	
	
	//mouseover,换个皮肤
	AMap.event.addListener(marker1,'mouseover',function(){
		n.innerHTML = name; //修改内容
		m.className = "marker change";//增加样式
	});
	AMap.event.addListener(marker1,'click',function(){
		window.open("http://www.baidu.com");
	});
	
	//mouseout,换回皮肤
	AMap.event.addListener(marker1,'mouseout',function(){
		n.innerHTML = name; //修改内容
		m.className = "marker";
	});
	
}
function addMarkers(){
	mapObj.setZoom(5);
	addCustomMarker(116.373881,39.907409,"万门X北航");
	addCustomMarker(110,39,"万门X河北大学");
}
var markerLoaded=false;