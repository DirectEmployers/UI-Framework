/*-*****************************************************************************
DirectEmployers Foundation
UI Framework (C)2011-12 DirectEmployers Foundation

This UI Framework uses the following libraries:
 - jQuery
 - swfObject
 - BootstrapJS
*****************************************************************************-*/
var loader="def.ui.bootstrap.js";
var jsSrc = "//d2e48ltfsb5exy.cloudfront.net/framework/js/";
var firstScript = document.getElementsByTagName("script")[0];
var fileList = [
    "code/bootstrap-alerts.js",
    "code/bootstrap-buttons.js",
    "code/bootstrap-dropdown.js",
    "code/bootstrap-modal.js",
    "code/bootstrap-popover.js",
    "code/bootstrap-scrollspy.js",
    "code/bootstrap-tabs.js",
    "code/bootstrap-twipsy.js",
    "code/bootstrap-tooltips.js",
    "code/bootstrap-typeahead.js",
    "code/bootstrap-collapse.js",
    "code/bootstrap-carousel.js"
];

for(var i=0;i<fileList.length;i++){
    var newScript = document.createElement("script");
    newScript.src = jsSrc + fileList[i];
    firstScript.parentNode.insertBefore(newScript, firstScript);
}
