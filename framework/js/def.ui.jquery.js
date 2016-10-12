/*-*****************************************************************************
DirectEmployers Foundation
UI Framework (C)2011-12 DirectEmployers Foundation

This UI Framework uses the following libraries:
 - jQuery
 - swfObject
 - BootstrapJS
*****************************************************************************-*/
var loader="def.ui.jquery.js";
var jsSrc = "//d2e48ltfsb5exy.cloudfront.net/framework/js/";
var firstScript = document.getElementsByTagName("script")[0];
var fileList = [
    "code/jquery-1.7.1.min.js",
    "code/jquery-ui.min.js",
    "code/jquery.mobile-1.0rc2.min.js"
];

for(var i=0;i<fileList.length;i++){
    var newScript = document.createElement("script");
    newScript.src = jsSrc + fileList[i];
    firstScript.parentNode.insertBefore(newScript, firstScript);
}
