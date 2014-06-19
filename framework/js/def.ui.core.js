/*-*****************************************************************************
DirectEmployers Foundation
UI Framework (C)2011-12 DirectEmployers Foundation

This UI Framework uses the following libraries:
 - jQuery
 - swfObject
 - BootstrapJS
*****************************************************************************-*/
var loader="def.ui.core.js";
var jsSrc = "//d2e48ltfsb5exy.cloudfront.net/framework/js/";
var tagOpen = "<script src='"+jsSrc;
var tagClose= "' type='text/javascript'></script>";
var fileList = [
	"code/jquery-1.7.1.min.js",
    "code/jquery-ui.min.js",
    "code/swfobject.js",
    "code/foundation.js"
];

for(var i=0;i<fileList.length;i++){
    document.write(tagOpen+fileList[i]+tagClose)
}
