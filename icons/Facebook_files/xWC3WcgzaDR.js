if (self.CavalryLogger) { CavalryLogger.start_js(["4T\/Fg"]); }

__d("AdsSignalsDsOemDataSetUploadSuccessDataActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"OEM.DATA_SET_UPLOAD.SUCCESS"}}),null);
__d("SignalsDSRefreshStoreDataActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"DS.REFRESH_STORE"}}),null);
__d("AdsMultiSelectableRow.react",["cx","React","XUICheckboxInput.react","XUIRadioInput.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isMouseHovered:!1},c.$1=function(){c.setState({isMouseHovered:!0})},c.$2=function(){c.setState({isMouseHovered:!1})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props.isItemError;return b("React").createElement("li",{className:this.props.itemClassName,onClick:this.props.onClickHandler},b("React").createElement("div",{className:"_5r_x"+(a?"":" _3wyh")+(a?" _3wyi":""),onMouseEnter:this.$1,onMouseLeave:this.$2},this.props.selectType==="single"?b("React").createElement(b("XUIRadioInput.react"),{checked:this.props.isItemSelected,className:"_5r_y",disabled:this.props.isDisabled,onChange:this.props.onChangeHandler}):b("React").createElement(b("XUICheckboxInput.react"),{checked:this.props.isItemSelected,className:"_5r_y",disabled:this.props.isDisabled,onChange:this.props.onChangeHandler})),b("React").createElement("div",{className:"_5r_z"+(a?"":" _3wyh")+(a?" _3wyi":""),onMouseEnter:this.$1,onMouseLeave:this.$2},b("React").createElement("div",{className:"_5r_-"},this.props.renderItemBody(this.props.item,this.props.isItemSelected,this.state.isMouseHovered))))};return c}(b("React").Component);c.propTypes={isDisabled:a.bool,isItemError:a.bool,isItemSelected:a.bool,item:a.object,itemClassName:a.string,renderItemBody:a.func.isRequired,selectType:a.oneOf(["single","multi"]),onChangeHandler:a.func.isRequired,onClickHandler:a.func.isRequired};e.exports=c}),null);
__d("BUIAdoptionTooltip.react",["BIGAdoptionConfig","BUIAdoptionWrapper.react","React","SUIBusinessTheme","SUITooltip.react","Tooltip.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=function(){return b("React").createElement(b("SUITooltip.react"),babelHelpers["extends"]({},d.props,{theme:b("SUIBusinessTheme")}))},d.$1=function(){var a=d.props,c=a.children,e=a.tooltip,f=a.position,g=a.alignment;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","tooltip","position","alignment"]);return b("React").createElement(b("Tooltip.react"),babelHelpers["extends"]({},a,{tooltip:e,position:f,alignH:g}),c)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement(b("BUIAdoptionWrapper.react"),{enabled:b("BIGAdoptionConfig").sui_tooltip_adoption,renderFallback:this.$1,renderAdoption:this.$2})};return c}(b("React").PureComponent);a.defaultProps=b("SUITooltip.react").defaultProps;a.propTypes=b("SUITooltip.react").propTypes;e.exports=a}),null);
__d("AdsMultiSelectableList.react",["cx","fbt","invariant","AdsMultiSelectableRow.react","Animation","BUIAdoptionTooltip.react","FDSSpinner.react","InlineBlock.react","LeftRight.react","List.react","OnVisible.react","React","ReactDOM","XUICheckboxInput.react","joinClasses","objectValues"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$1=null;d.isAllItemsSelected=function(){return d.props.items.length===d.getTotalSelectedItems()&&d.props.items.length!==0};d.getTotalSelectedItems=function(){return Object.keys(d.state.selectedItems).length};d.getDefaultNoResultsView=function(){return b("React").createElement("div",null,h._("Nenhum ativo corresponde \u00e0 tua pesquisa. Tenta novamente."))};d.$3=function(a){return!d.props.isItemDisabledByID?!1:!!d.props.isItemDisabledByID[a]};d.$4=function(a,c){return b("React").createElement(b("LeftRight.react"),{className:"_5r_t"},b("React").createElement(b("InlineBlock.react"),null,b("React").createElement("span",{className:"_5r_u"},d.props.listTitle),h._("({Number of items.})",[h._param("Number of items.",c)])),b("React").createElement(b("InlineBlock.react"),null,h._("Valores selecionados: {Number of items selected.}",[h._param("Number of items selected.",a)])))};d.$5=function(){if(d.props.items.length===0){var a;d.props.fetchErrorText?a=d.props.fetchErrorText:d.props.noResultsView!==void 0?a=d.props.noResultsView:a=d.getDefaultNoResultsView();return b("React").createElement("div",{className:"_5r_v"},b("React").createElement("div",null,a))}a={};d.props.bodyHeight&&d.props.bodyHeight>48&&(a.height=d.props.bodyHeight+"px");return b("React").createElement(b("List.react"),{border:"none",className:"_5r_w","data-testid":"AdsMultiSelectableList_Inner",edgepadding:!1,ref:"list",spacing:"none",style:a},d.$6(),d.$7())};d.$6=function(){var a=[],c=d.props.paging?d.props.paging.from:0,e=Math.min(d.props.items.length,d.props.paging?d.props.paging.to:d.props.items.length),f=function(c){var e=d.props.items[c],f=d.props.getItemKey(e),g=d.$8(f),h=d.props.renderError?!!d.props.renderError(e):!1;a.push(b("React").createElement(b("AdsMultiSelectableRow.react"),{isDisabled:d.$3(f),isItemError:h,isItemSelected:g,item:e,itemClassName:d.$9(f,c,h),key:f,ref:f,renderItemBody:d.props.renderItemBody,selectType:d.props.selectType,onChangeHandler:function(){return d.$10(e)},onClickHandler:function(){return d.$10(e)}}))};for(var c=c;c<e;c++)f(c);return a};d.$7=function(){if(d.props.onLoadMore&&d.props.items.length!==d.props.itemCount)return b("React").createElement(b("OnVisible.react"),{buffer:10,key:d.props.items.length,onVisible:d.props.onLoadMore},b("React").createElement("div",{className:"_10ut"},b("React").createElement(b("FDSSpinner.react"),null)))};d.$9=function(a,b,c){a=d.$8(a);return"_5r__"+(c?"":" _3wyh")+(c?" _3wyi":"")+(b%2===0?" _5s00":"")+(b%2!==0?" _5s01":"")+(a?" _5s02":"")+(a&&!c?" _5yga":"")+(a&&c?" _5ygb":"")};d.$8=function(a){return Object.prototype.hasOwnProperty.call(d.state.selectedItems,a)};d.$10=function(a){var b=d.state.selectedItems,c=d.props.getItemKey(a);if(d.$3(c))return;var e=d.$8(c),f=d.props.selectType==="single";if(f){b=(f={},f[c]=a,f)}else e?delete b[c]:b[c]=a;d.$11(babelHelpers["extends"]({},b))};d.onSelectAllChange=function(){var a=d.state.selectedItems,b=!d.isAllItemsSelected();d.props.items.forEach(function(c){var e=d.props.getItemKey(c);if(d.$3(e))return;b?a[e]=c:delete a[e]});d.$11(babelHelpers["extends"]({},a))};d.$11=function(a){d.setState({selectedItems:a});var c=d.props.onSelectionChange;c&&c(b("objectValues")(a))};d.$2=function(a){a=d.refs[a];if(a){a=a.offsetTop;d.$1&&d.$1.stop();var c=b("ReactDOM").findDOMNode(d.refs.list);d.$1=new(b("Animation"))(c).to("scrollTop",a).ease(b("Animation").ease.end).duration(250).go()}};var e=c.initialSelectedItems||c.selectedItems,f={};if(e){if(c.initialSelectedItems&&c.selectedItems)throw new Error("AdsMultiSelectableList can have selectedItems or initialSelectedItems, but not both.");e.forEach(function(a){f[a.id]=a})}d.state={selectedItems:f};return d}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.props.scrollToItemID&&i(0,5969)};d.UNSAFE_componentWillReceiveProps=function(a){if(a.selectedItems){var b={};a.selectedItems.forEach(function(a,c,d){b[a.id]=a});this.setState({selectedItems:b})}a.scrollToItemID&&this.$2(a.scrollToItemID)};d.render=function(){var a=this.props.selectType==="single";a="_5r_q"+(a?" _1j5-":"")+(this.props.isNarrowStyle?" _43rn":"");var c=this.props.renderTopBar||this.$4,d=this.props.itemCount&&this.props.items.length!==this.props.itemCount||this.props.itemCount===0,e=d?h._("Desce para o fundo da lista para ativares esta caixa."):"";return b("React").createElement("div",{className:b("joinClasses")(this.props.className,a),"data-testid":this.props["data-testid"]},b("React").createElement("div",{className:"_5r_r"},b("React").createElement("div",{className:"_5r_s"},c(this.getTotalSelectedItems(),this.props.itemCount||this.props.items.length)),this.props.selectType==="single"?null:b("React").createElement(b("BUIAdoptionTooltip.react"),{tooltip:e},b("React").createElement("div",{className:"_5r_o"},b("React").createElement(b("XUICheckboxInput.react"),{checked:this.isAllItemsSelected(),className:"_5r_p",disabled:d,onChange:this.onSelectAllChange})))),this.$5())};return c}(b("React").Component);c.propTypes={items:a.array.isRequired,itemCount:a.number,getItemKey:a.func.isRequired,renderItemBody:a.func.isRequired,listTitle:a.string.isRequired,onSelectionChange:a.func,isItemDisabledByID:a.object,selectType:a.oneOf(["single","multi"]),initialSelectedItems:a.array,selectedItems:a.array,paging:a.object,renderError:a.func,noResultsView:a.object,fetchErrorText:a.string,renderTopBar:a.func,onLoadMore:a.func,scrollToItemID:a.string,isNarrowStyle:a.bool,bodyHeight:a.number};c.defaultProps={isNarrowStyle:!1,isItemDisabledByID:null,selectType:"multi"};e.exports=c}),null);
__d("SignalsHomeActionTypes",["keyMirrorRecursive"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirrorRecursive")({ADACCOUNT_CUSTOM_CONVERSION_CREATE:{FINISH:""},BACK_TO_CUSTOM_CONVERSION_SCREEN:"",BACK_TO_DATA_SOURCES:"",BACK_TO_PARTNER_INTEGRATIONS:"",BUSINESS_CUSTOM_CONVERSION_CREATE:{FINISH:""},BUSINESS_CUSTOM_CONVERSION_DELETE:{FINISH:""},CUSTOM_CONVERSION_CONVERSION_VALUE_EDIT:{FINISH:""},CUSTOM_CONVERSION_DELETE:{FINISH:""},CUSTOM_CONVERSION_DESCRIPTION_EDIT:{FINISH:""},CUSTOM_CONVERSION_NAME_EDIT:{FINISH:""},INITIALIZE_PIXEL_TAB_SELECTION:"",INSPECT_APP:"",INSPECT_CUSTOM_CONVERSION:"",INSPECT_DATA_SET:"",INSPECT_DATA_SOURCE_EVENT:"",INSPECT_PARTNER:"",INSPECT_PIXEL:"",LOAD_AUDIENCE:{FAILURE:"",SUCCESS:""},LOAD_AUDIENCE_LIST:{FAILURE:"",SUCCESS:"",UPDATE:""},LOAD_CUSTOM_CONVERSION:{FAILURE:"",SUCCESS:""},LOAD_CUSTOM_CONVERSION_LIST:{FAILURE:"",SUCCESS:"",UPDATE:""},MEGAPHONE:{CLOSE_START:"",CLOSED:"",SHOW:"",VIEWED:""},NAME_EDIT:{CANCEL:"",FAILURE:"",FINISH:"",START:"",SUCCESS:"",UPDATE:""},NAVIGATE_TO_DATA_SET_UPLOADER:"",NOTICE:{ADD:"",REMOVE:"",REMOVE_ALL:""},PIXEL_CREATE:{ERROR:"",SUCCESS:""},QUERY_ANALYTICS_USAGE:"",REQUEST_TOS_SCREEN:"",SELECT_PIXEL:"",SET_SELECTED_SECTION:"",SET_SELECTED_TAB:"",TOGGLE_AUTOMATIC_MATCHING_FINISH:"",TOGGLE_INFERRED_EVENTS_USAGE:"",URL_CHANGE:"",VIEW_ANALYTICS:""});e.exports=a}),null);
__d("SignalsNewDSStore",["Promise","AdsGraphAPI","AdsSignalsDsOemDataSetUploadSuccessDataActionFlux","LoadObject","SignalsDSRefreshStoreDataActionFlux","SignalsHomeActionTypes","SignalsLoadObjectStore","immutable","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.__getName=function(){return e.id};d.__getLoader=function(a){return new(b("Promise"))(function(c,d){b("promiseDone")(b("AdsGraphAPI").get(e.id).object("offline_conversion_data_set",a).batched().get({fields:["business{id,name,block_offline_analytics}","creation_time","id","is_restricted_use","last_upload_app","last_upload_app_changed_time","last_upload_time","name","num_uploads","permissions","usage","valid_entries"]}),c,d)})};d.__customReduce=function(a,c){__p&&__p();c=c.action;var d=c.type,e=c.dataSourceID;switch(d){case b("SignalsHomeActionTypes").NAME_EDIT.FINISH:if(a.has(e)){d=a.get(e).getValueEnforcing();d.name=c.title;return a.set(e,b("LoadObject").withValue(d))}return a;case b("AdsSignalsDsOemDataSetUploadSuccessDataActionFlux").actionType:case b("SignalsDSRefreshStoreDataActionFlux").actionType:this.clearKeyLater(c.dataSetID);return a;default:return a}};return c}(b("SignalsLoadObjectStore"));e.exports=new a()}),null);
__d("hasSubstring",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,b,c){__p&&__p();b.length||g(0,4697);for(var d=0;d<b.length;d++){var e=b[d];if(a[e]!=null&&(a[e]instanceof Object||typeof a[e]==="number"||typeof a[e]==="string"||typeof a[e]==="boolean")){e=a[e].toString().toLowerCase();var f=c.toLowerCase();if(e.indexOf(f)!==-1)return!0}}return!1}e.exports=a}),null);
__d("RadioList.react",["cx","React","ReactDOM"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("React").Children.map(this.props.children,function(a){return b("React").cloneElement(a,{name:this.props.name,onSelect:this.props.onValueChange,selectedValue:this.props.selectedValue})},this);return b("React").createElement("ul",babelHelpers["extends"]({},this.props,{name:null}),a)};return c}(b("React").Component);a.Item=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.handleChange=function(a){a=a.nativeEvent&&a.nativeEvent.target||b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d)).firstChild;a.checked&&(d.props.onSelect&&d.props.onSelect(d.props.value))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement("li",this.props,b("React").createElement("input",{checked:this.props.value===this.props.selectedValue,name:this.props.name,onChange:this.handleChange,type:"radio",value:this.props.value}),this.props.children)};return c}(b("React").Component);a.LabeledItem=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.handleChange=function(a){a=a.nativeEvent&&a.nativeEvent.target||b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d)).firstChild.firstChild;a&&a.checked&&(d.props.onSelect&&d.props.onSelect(d.props.value))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a="_544g"+(this.props.disabled?" _5kol":"");return b("React").createElement("li",this.props,b("React").createElement("label",{className:a},b("React").createElement("input",{disabled:this.props.disabled,checked:this.props.value===this.props.selectedValue,name:this.props.name,onChange:this.props.disabled?null:this.handleChange,type:"radio",value:this.props.value}),this.props.children))};return c}(b("React").Component);e.exports=a}),null);
__d("PopoverButton.react",["cx","ix","AbstractPopoverButton.react","Button.react","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("React").createElement(b("Image.react"),{src:h("101373")});a={button:b("React").createElement(b("Button.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_4-s1")})),chevron:a,defaultMaxWidth:200,chevronWidth:14};return b("React").createElement(b("AbstractPopoverButton.react"),{config:a,haschevron:this.props.haschevron,image:this.props.image,label:this.props.label,labelIsHidden:this.props.labelIsHidden,maxwidth:this.props.maxwidth})};return c}(b("React").Component);c.propTypes={haschevron:a.bool,label:a.node,labelIsHidden:a.bool,maxwidth:a.number};e.exports=c}),null);
__d("Selector.react",["AbstractSelector.react","PopoverButton.react","React","ReactMenu"],(function(a,b,c,d,e,f){__p&&__p();var g=b("ReactMenu").SelectableMenu;a=b("ReactMenu").SelectableItem;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a={button:b("React").createElement(b("PopoverButton.react"),{rel:"toggle",suppressed:this.props.suppressed}),menu:b("React").createElement(g,null)};return b("React").createElement(b("AbstractSelector.react"),babelHelpers["extends"]({},this.props,{overlappingborder:!0,config:a}),this.props.children)};return c}(b("React").Component);c.Option=a;e.exports=c}),null);
__d("FBAssetSelector.react",["cx","fbt","ix","AdsFilterWidgets.react","AdsGenericFilterField","AdsMultiSelectableList.react","Image.react","InlineBlock.react","LeftRight.react","React","Selector.react","XUIButton.react","XUIPagerButtons.react","XUISpinner.react","emptyFunction","hasSubstring","objectValues"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("Selector.react").Option;a=b("React").PropTypes;var k=["displayName","name","id"];function l(a,b,c){c=c||2;var d=a.substring(0,Math.min(a.length,c)),e=b.substring(0,Math.min(b.length,c));return c<5&&d===e&&a!==b?l(a,b,c+1):[d.toLowerCase(),e.toLowerCase()]}c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$10=function(a){return a.id};d.$1=function(a){d.setState({visibleAssets:d.$12(a,d.state)})};d.$2=function(a){return!!(d.props.maxRowsPerPage&&a.length>d.props.maxRowsPerPage)};d.$13=function(a){var b=d.state.pagingIndex;if(b>=a.length-1){var c=a.length%d.props.maxRowsPerPage||d.props.maxRowsPerPage;b=a.length-c}return b};d.$9=function(a){if(d.$2(a)){var b=d.$13(a);a=Math.min(a.length,b+d.props.maxRowsPerPage);return{from:b,to:a}}return null};d.$3=function(a){var c=d.$13(a),e=Math.ceil(a.length/d.props.maxRowsPerPage);c=Math.floor(c/d.props.maxRowsPerPage)+1;var f=h._("(P\u00e1gina {pageNumber} de {totalPageCount})",[h._param("pageNumber",c),h._param("totalPageCount",e)]);return b("React").createElement("div",{className:"_xfn",key:"pager"},b("React").createElement(b("LeftRight.react"),null,b("React").createElement("div",null,d.$14(a)),b("React").createElement("div",null,b("React").createElement("span",{className:"_xfo"},f),b("React").createElement(b("XUIPagerButtons.react"),null,b("React").createElement(b("XUIButton.react"),{className:c===1?"disabled":"",disabled:c===1,image:b("React").createElement(b("Image.react"),{src:i("101339")}),label:h._("Anterior"),labelIsHidden:!0,size:"small",onClick:d.$15}),b("React").createElement(b("XUIButton.react"),{className:c===e?"disabled":"",disabled:c===e,image:b("React").createElement(b("Image.react"),{src:i("101341")}),label:h._("Seguinte"),labelIsHidden:!0,size:"small",onClick:d.$16})))))};d.$15=function(){d.setState({pagingIndex:Math.max(0,d.state.pagingIndex-d.props.maxRowsPerPage)})};d.$16=function(){d.setState({pagingIndex:Math.min(d.state.visibleAssets.length-d.state.visibleAssets.length%d.props.maxRowsPerPage,d.state.pagingIndex+d.props.maxRowsPerPage)})};d.$17=function(a){var c=a.displayName||a.name,e;d.props.renderSubtitle&&(e=d.props.renderSubtitle(a));return b("React").createElement("div",{className:(e?"_xfp":"")+(e?"":" _4_xa")},b("React").createElement("div",null,c),b("React").createElement("div",{className:"_xfq"+(e?"":" hidden_elem")},e))};d.$11=function(a,c){var e=!d.props.isNarrowStyle&&d.props.renderImageForAssetFunction(a),f=d.props.renderError?d.props.renderError(a):null;c=d.props.renderExtrasForAssetFunction&&d.props.renderExtrasForAssetFunction(a,c,!!f);return b("React").createElement(b("InlineBlock.react"),{className:"_xfs"+(f?" _xft":"")},b("React").createElement("div",{className:"_xfu"},e),b("React").createElement("div",{className:"_xfv"},b("React").createElement("span",{className:"rfloat mrm"},c),b("React").createElement("div",{className:e?"_xfw":""},d.$17(a),b("React").createElement("div",{className:"_xfx"},f))))};d.$12=function(a,c){__p&&__p();if(a){if(c.selectedFilterValue!==""){var e=c.selectedFilterValue,f=d.props.filterAssetsByID||{};a=a.filter(function(a){return Object.prototype.hasOwnProperty.call(f[e],a.id)},babelHelpers.assertThisInitialized(d))}if(c.filterText){var g=c.filterNegative;a=a.filter(function(a){a=b("hasSubstring")(a,k,c.filterText);return g?!a:a},babelHelpers.assertThisInitialized(d))}return a}return[]};d.$6=function(){var a=[b("React").createElement(j,{value:"",key:"empty_option"},d.props.noFilterOptionLabel)],c=b("objectValues")(d.props.filtersByID||{});d.props.filterSortFunction&&c.sort(d.props.filterSortFunction);var e=d.props.filterPrefixFunction;c.forEach(function(c){var d=c.name||c.id,f=e?e(d):d;a.push(b("React").createElement(j,{value:c.id,key:d},f))});return a};d.$8=function(a){var b=!1;a.indexOf("-")===0&&(b=!0,a=a.substring(1));d.$18({pagingIndex:0,filterNegative:b,filterText:a})};d.$7=function(a){d.$18({pagingIndex:0,selectedFilterValue:a})};d.$18=function(a){a=babelHelpers["extends"]({},d.state,a);var b=d.$12(d.props.assets,a);d.setState(Object.assign(a,{visibleAssets:b}))};d.state={filterNegative:!1,filterText:"",pagingIndex:0,selectedFilterValue:"",visibleAssets:[]};return d}var d=c.prototype;d.componentDidMount=function(){this.$1(this.props.assets)};d.UNSAFE_componentWillReceiveProps=function(a){Object.prototype.hasOwnProperty.call(a,"assets")&&this.$1(a.assets)};d.render=function(){var a=null,c=this.state.visibleAssets,d=this.$2(c);d&&(a=this.$3(c));return b("React").createElement("div",null,this.$4(),a,this.$5(d))};d.$4=function(){return b("React").createElement(b("AdsFilterWidgets.react"),{key:"filter",className:"_3-96",selectorOptions:this.$6(),initialSelectorValue:"",onSelectorChange:this.$7,onTextChange:this.$8,hasSelector:!!this.props.hasSelector,onFilterSetChange:this.props.onFilterSetChange,selectorFilterField:this.props.selectorFilterField,textFilterField:this.props.textFilterField,placeholder:this.props.filterPlaceholder})};d.$5=function(a){var c=this.state.visibleAssets;return this.props.assets?b("React").createElement(b("AdsMultiSelectableList.react"),{scrollToItemID:this.props.scrollToItemID,key:"list",items:c,paging:this.$9(c),initialSelectedItems:this.props.initialSelectedAssets,selectedItems:this.props.selectedAssets,selectType:this.props.selectType,getItemKey:this.$10,renderItemBody:this.$11,onSelectionChange:this.props.onSelectionChange||b("emptyFunction"),listTitle:this.props.listTitle,fetchErrorText:this.props.fetchErrorText,renderTopBar:this.props.renderTopBar,renderError:this.props.renderError,onLoadMore:this.props.onLoadMore,itemCount:this.props.assetCount,noResultsView:this.props.noResultsView,isNarrowStyle:this.props.isNarrowStyle,bodyHeight:this.props.bodyHeight-(a?32:0)}):b("React").createElement("div",{className:"_5tln",key:"spinner"},b("React").createElement(b("XUISpinner.react"),{size:"large"}))};d.$14=function(a){if(this.props.isNarrowStyle)return null;var b=this.$9(a);a=l(a[b.from].name,a[b.to-1].name,2);b=a[0];a=a[1];return h._("({lettersFrom} - {lettersTo})",[h._param("lettersFrom",b),h._param("lettersTo",a)])};return c}(b("React").Component);c.propTypes={assets:a.array,assetCount:a.number,hasSelector:a.bool,initialSelectedAssets:a.array,selectedAssets:a.array,selectType:a.oneOf(["single","multi"]),filtersByID:a.object,filterAssetByID:a.object,filterPrefixFunction:a.func,filterSortFunction:a.func,listTitle:a.string.isRequired,maxRowsPerPage:a.number,renderImageForAssetFunction:a.func.isRequired,renderExtrasForAssetFunction:a.func,onSelectionChange:a.func,renderError:a.func,noFilterOptionLabel:a.string,fetchErrorText:a.string,renderTopBar:a.func,renderSubtitle:a.func,onFilterSetChange:a.func,textFilterField:a.instanceOf(b("AdsGenericFilterField")),selectorFilterField:a.instanceOf(b("AdsGenericFilterField")),scrollToItemID:a.string,noResultsView:a.object,filterPlaceholder:a.string,isNarrowStyle:a.bool,bodyHeight:a.number};c.defaultProps={selectType:"multi",noFilterOptionLabel:h._("(nenhum)")};e.exports=c}),null);
__d("FDSPrivateGuidanceCardIconLayout.react",["cx","FlexLayout.react","Image.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return a.icon!=null?b("React").createElement(b("FlexLayout.react"),{align:"center"},b("React").createElement(b("Image.react"),{className:"_3-8_",src:a.icon}),a.children):a.children}e.exports=a}),null);
__d("FDSGuidanceCardContentLink.react",["FDSLink.react","FDSPrivateGuidanceCardIconLayout.react","React","makeFDSGuidanceCardContentComponent"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").createElement(b("FDSLink.react"),{"data-testid":a["data-testid"],display:"block",href:a.href,onClick:a.onPress,target:"_blank"},b("React").createElement(b("FDSPrivateGuidanceCardIconLayout.react"),{icon:a.icon},a.children))}e.exports=b("makeFDSGuidanceCardContentComponent")(a)}),null);
__d("FDSSelectableTable.react",["React","SUISelectableTable.react","SUITableCellUniform.fds","SUITableUniform.fds","SUIThreeStateCheckboxInputUniform.fds","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIFDSPrivateTheme")("FDSSelectableTable",{SUITableCell:b("SUITableCellUniform.fds"),SUITable:b("SUITableUniform.fds"),SUIThreeStateCheckboxInput:b("SUIThreeStateCheckboxInputUniform.fds")});a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=b("React").createRef(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.scrollToRow=function(a){this.$1&&this.$1.current&&this.$1.current.scrollToRow(a)};d.render=function(){return b("React").createElement(b("SUISelectableTable.react"),babelHelpers["extends"]({},this.props,{preserveThemeFromContext:!0,ref:this.$1,theme:g}))};return c}(b("React").PureComponent);a.defaultProps=b("SUISelectableTable.react").defaultProps;e.exports=b("makeFDSStandardComponent")("FDSSelectableTable",a)}),null);
__d("AsyncUploadRequestUtil",["Promise"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={send:function(a){__p&&__p();return new(b("Promise"))(function(b,c){__p&&__p();var d=[],e=function(){return d.forEach(function(a){return a.unsubscribe()})},f=a.subscribe("complete",function(a,c){a=c.response;c=c.uploads;var d={};c.forEach(function(a){d[a.getName()]=a.getResponse()});b({response:a,files:d});e()}),g=a.subscribe("failure",function(a,b){c(b.getResponse()),e()});d.push(f);d.push(g);a.setAlwaysReturnResponse(!0);a.send()})}};e.exports=a}),null);
__d("promiseAsyncUploadRequest",["AsyncUploadRequest","AsyncUploadRequestUtil"],(function(a,b,c,d,e,f){"use strict";function a(a,c){a=new(b("AsyncUploadRequest"))(a).setFiles(c.files);c.data!=null&&a.setData(c.data);c.allowCrossOrigin!=null&&a.setAllowCrossOrigin(c.allowCrossOrigin);return b("AsyncUploadRequestUtil").send(a)}e.exports=a}),null);
__d("SUIInlineNux.react",["React","SUIComponent","SUIMessageBox.react","SUITheme"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("SUITheme").get(this).SUIInlineNux,c=b("React").cloneElement(a.icon);return b("React").createElement(b("SUIMessageBox.react"),{hasShadow:!1,icon:c,onClose:this.props.onClose,style:babelHelpers["extends"]({borderColor:a.borderColor},this.props.style),type:"filled"},b("React").createElement("div",{style:babelHelpers["extends"]({marginBottom:"8px"},a.titleTypeStyle)},this.props.title),b("React").createElement("div",{style:babelHelpers["extends"]({},a.childrenTypeStyle)},this.props.children))};return c}(b("SUIComponent"));c.propTypes={onClose:a.func,title:a.node.isRequired,theme:a.instanceOf(b("SUITheme"))};e.exports=c}),null);
__d("format",[],(function(a,b,c,d,e,f){function a(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return a.replace(/\{(\d+)\}/g,function(a,b){a=c[Number(b)];return a===null||a===void 0?"":a.toString()})}e.exports=a}),null);
__d("findIterable",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){__p&&__p();for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;if(b(e))return e}return null}e.exports=a}),null);
__d("last",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var b=null;if(Array.isArray(a))a.length&&(b={value:a[a.length-1]});else for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b=b||{};b.value=e}return b?b.value:null}e.exports=a}),null);
__d("mapObjectKeys",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=Object.prototype.hasOwnProperty;function a(a,b,c){var d={};for(var e in a){var f=e;if(g.call(a,f)){var h=b.call(c,f,a[f],a);d[h]=a[f]}}return d}e.exports=a}),null);
__d("PixelStandardEventCustomDataEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ARTICLE_CONTENT_TIER:"article_content_tier",CONTENT_CATEGORY:"content_category",CONTENT_IDS:"content_ids",CONTENT_NAME:"content_name",CONTENT_TYPE:"content_type",CONTENTS:"contents",IS_SUBSCRIBER:"is_subscriber",CURRENCY:"currency",NUM_ITEMS:"num_items",OFFER_CODE:"offer_code",ORDER_ID:"order_id",PREDICTED_LTV:"predicted_ltv",SEARCH_STRING:"search_string",STATUS:"status",SUBSCRIPTION_ID:"subscription_id",SUBSCRIPTION_TIME:"subscription_time",SURFACE:"surface",VALUE:"value",ID:"id",ITEM_PRICE:"item_price",QUANTITY:"quantity"})}),null);
__d("PubXURLParams",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AD_ACCOUNT_ID:"ad_account_id",AD_ID:"ad_id",AD_SPACE_ID:"ad_space_id",AD_SPACE_IDS:"ad_space_ids",APP_ID:"app_id",APP_IDS:"app_ids",APP_VERSION:"app_version",AUDIT_TRAILS_ACTIONS:"audit_actions",BREAKDOWN:"breakdown",BUNDLE_ID:"bundle_id",BUSINESS_ID:"business_id",CHART_METRIC:"chart_metric",CONTINENTS:"continents",COUNTRIES:"countries",COUNTRY_SEGMENT_ID:"country_segment_id",DATE_RANGE:"date_range",DEAL_ID:"deal_id",DELIVERY:"delivery",DEVICE:"device",DISPLAY_FORMAT:"display_format",DISPLAY_FORMATS:"display_formats",DOMAIN_ID:"domain_id",END_DATE:"end_date",FILTERS:"filters",NEXT_PAGE:"next_page",PAGE:"page",PAGE_ID:"page_id",PAGE_NUM:"page_num",PAYMENT_ACCOUNT_ID:"payment_account_id",PLACEMENT_GROUP_ID:"placement_group_id",PLACEMENT_ID:"placement_id",PLACEMENT_IDS:"placement_ids",PLATFORM:"platform",PLATFORMS:"platforms",PROPERTY_ID:"property_id",PROPERTY_IDS:"property_ids",REF:"ref",SEARCH_SESSION_ID:"ssid",SHOWLOG:"showlog",SORT_BY:"sort_by",SORT_DIRECTION:"sort_direction",START_DATE:"start_date",STEP:"step",TAB:"tab",TABLE:"table",VIEW:"view"})}),null);
__d("XBusinessHomeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/",{personal:{type:"Exists",defaultValue:!1},business_id:{type:"FBID"}})}),null);
__d("XDeveloperAppController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/apps/{app_id}/{?page}/{?tab}/",{app_id:{type:"Int",required:!0},page:{type:"Enum",enumType:1},tab:{type:"String"},placement_id:{type:"Int"},active_placements_offset:{type:"Int"},disabled_placements_offset:{type:"Int"},blocked_placements_offset:{type:"Int"},alert_id:{type:"Int"},ref:{type:"String"},id:{type:"Int"},app_locale:{type:"String"},a_n:{type:"String"},show_messenger_webhook_errors:{type:"Exists",defaultValue:!1},business_id:{type:"Int"}})}),null);
__d("XSignalsEventsManagerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events_manager/",{business_id:{type:"FBID"},act:{type:"Int"},app_id:{type:"FBID"},pixel_id:{type:"FBID"},dataset_id:{type:"FBID"},show_tos:{type:"Bool",defaultValue:!1},rest:{type:"String"},custom_conversion_id:{type:"FBID"},selected_data_sources:{type:"Enum",enumType:1},date_range:{type:"String"},pixel_dialog:{type:"String"},business_unit_id:{type:"FBID"},show_app_email_dialog:{type:"Bool",defaultValue:!1},event_name:{type:"String"},show_app_sdk_setup_dialog:{type:"Bool",defaultValue:!1},show_app_eymt_dialog:{type:"Bool",defaultValue:!1},asset_type:{type:"String"},selected_screen_section:{type:"String"},app_setup_entry:{type:"String"},nav_source:{type:"String"}})}),null);