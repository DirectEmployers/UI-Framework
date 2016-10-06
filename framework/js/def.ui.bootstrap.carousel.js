/*-*****************************************************************************
DirectEmployers Foundation
UI Framework (C)2011-12 DirectEmployers Foundation

This UI Framework uses the following libraries:
 - jQuery
 - swfObject
 - BootstrapJS
*****************************************************************************-*/
var loader="def.ui.bootstrap.js";
var jsSrc = "//d2e48ltfsb5exy.cloudfront.net/framework/js/code/bootstrap-carousel.js";
var firstScript = document.getElementsByTagName("script")[0];

var newScript = document.createElement("script");
newScript.src = jsSrc;
firstScript.parentNode.insertBefore(newScript, firstScript);
