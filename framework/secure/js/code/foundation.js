$(document).ready(function(){
	//Subclass default jquery functions
		//add unique parametersand functions to autocomplete
		//	acClassname: "classname to add to end of class attr"
		//	acID: "id value to add to drop down UL"
		//	showCategories: true|false (source must contain "category" node)
		$.widget("custom.autocomplete",$.ui.autocomplete,{
			_renderMenu: function(ul,items){
				var customClass = this.options.acClassName;
				var customID = this.options.acID;
				var categoryFlag = false;
					categoryFlag = this.options.showCategories;
				var currentCategory = "";
				var self = this;
				$.each( items, function( index, item ) {
					if(customClass!="" && typeof(customClass!='undefined')){
						ul.addClass(customClass);
					}
					if(customID!="" && typeof(customID!='undefined')){
						ul.attr("id",customID);
					}
					if(categoryFlag){
						if (typeof(item.category)!='undefined'&&item.category != currentCategory) {
							ul.append("<li class='ui-autocomplete-category'><b>" + categoryKeys[item.category] + "</b></li>");
							currentCategory = item.category;
						}
					}
					self._renderItem(ul,item);
				});
			}
		});
});