
var backgroundPageConnection = chrome.runtime.connect({name: "devtools-page"});

backgroundPageConnection.onMessage.addListener(function (message) {
	//获得消息
});

window.addEventListener("load", function() {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function(tabs) {
    	initQrcode(tabs[0].url)
    })
});
var initQrcode = function(url) {
	setTimeout(function(){
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: 'baidumap://map/cost_share?url=' + encodeURIComponent(url),
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
	},50)

	// var pre = {
	// 	'web': url,
	// 	'map': 'baidumap://map/cost_share?url=' + encodeURIComponent(url)
	// 	//'baidumap://map/cost_share?url=' + encodeURIComponent(url),
	// 	// 'lbc': 'baidumap://map/component?comName=lbc&target=webshell_login_page&param=' +
	// 	// encodeURIComponent(JSON.stringify({'url':url})),
	// 	// 'nuo': 'bainuo://component?url=' + encodeURIComponent(url),
	// 	// 'nuoweb': 'bainuo://web?url=' + encodeURIComponent(url)
	// };
	// 正常浏览器url
	// jQuery('#qrcodeWeb').qrcode({
	// 	text: pre.web
	// });

	// 百度地图url 
	// jQuery('#qrcodeMap').qrcode({
	// 	text: pre.map
	// });

	// // lbc壳浏览器url 
	// jQuery('#qrcodeLbc').qrcode({
	// 	text: pre.lbc
	// });	

	// // 百度糯米浏览器组件版本
	// jQuery('#qrcodeNuo').qrcode({
	// 	text: pre.nuo
	// });	

	// // 百度糯米浏览器web版本 
	// jQuery('#qrcodeNuoWeb').qrcode({
	// 	text: pre.nuoweb
	// });	
}