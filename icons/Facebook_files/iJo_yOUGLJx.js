if (self.CavalryLogger) { CavalryLogger.start_js(["ACTfE"]); }

__d("XUIOverlayButton.react",["cx","AbstractButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a="_51tl selected";return b("React").createElement(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:b("joinClasses")(this.props.className,a)}))};return c}(b("React").Component);e.exports=a}),null);
__d("Flash",["DOMEventListener","DOMWrapper","QueryString","UserAgent_DEPRECATED","guid","htmlSpecialChars"],(function(a,b,c,d,e,f){__p&&__p();var g={},h,i=b("DOMWrapper").getWindow().document;function j(a){var b=i.getElementById(a);b&&b.parentNode.removeChild(b);delete g[a]}function k(){for(var a in g)Object.prototype.hasOwnProperty.call(g,a)&&j(a)}function l(a){return a.replace(/\d+/g,function(a){return"000".substring(a.length)+a})}function m(a){h||(b("UserAgent_DEPRECATED").ie()>=9&&b("DOMEventListener").add(window,"unload",k),h=!0),g[a]=a}var n={embed:function(a,c,d,e){__p&&__p();var f=b("guid")();a=b("htmlSpecialChars")(a).replace(/&amp;/g,"&");d=babelHelpers["extends"]({allowscriptaccess:"always",flashvars:e,movie:a},d);typeof d.flashvars==="object"&&(d.flashvars=b("QueryString").encode(d.flashvars));e=[];for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&d[g]&&e.push('<param name="'+b("htmlSpecialChars")(g)+'" value="'+b("htmlSpecialChars")(d[g])+'">');c=c.appendChild(i.createElement("span"));a="<object "+(b("UserAgent_DEPRECATED").ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+a+'" '+(d.height?'height="'+d.height+'" ':"")+(d.width?'width="'+d.width+'" ':"")+'id="'+f+'">'+e.join("")+"</object>";c.innerHTML=a;d=c.firstChild;m(f);return d},remove:j,getVersion:function(){var a="Shockwave Flash",b="application/x-shockwave-flash",c="ShockwaveFlash.ShockwaveFlash",d;if(navigator.plugins&&typeof navigator.plugins[a]==="object"){a=navigator.plugins[a].description;a&&navigator.mimeTypes&&navigator.mimeTypes[b]&&navigator.mimeTypes[b].enabledPlugin&&(d=a.match(/\d+/g))}if(!d)try{d=new ActiveXObject(c).GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),d=Array.prototype.slice.call(d,1)}catch(a){}return d},getVersionString:function(){var a=n.getVersion();return a?a.join("."):""},checkMinVersion:function(a){var b=n.getVersion();return!b?!1:l(b.join("."))>=l(a)},isAvailable:function(){return!!n.getVersion()}};e.exports=n}),null);
__d("isAdsManagerAdsPreviewScrollFixEnabled.gkx",["gkx"],(function(a,b,c,d,e,f){function a(){return b("gkx")("856871")}e.exports=a}),null);
__d("XVideoDataAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/video_data_async/",{video_id:{type:"String",required:!0},width:{type:"Int"},height:{type:"Int"},scrubbing_preference:{type:"Int"},source:{type:"String"},preferred_projection:{type:"Enum",enumType:1},supports_html5_video:{type:"Bool",defaultValue:!0},is_ad:{type:"Bool",defaultValue:!1},force_flash:{type:"Bool",defaultValue:!1},is_omnistab_preview_select_revert:{type:"Bool",defaultValue:!1},allow_dash_prefetch:{type:"Bool",defaultValue:!1},force_hd:{type:"Bool",defaultValue:!1},host_number:{type:"Int"}})}),null);
__d("VideoPlayerMetaData",["regeneratorRuntime","Promise","AsyncRequest","TimeSlice","VideoData","XVideoDataAsyncController","clearTimeout","isHTML5VideoImplementationUnavailable","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h=12e4;a=function(){__p&&__p();function a(a){this.videoID=a}var c=a.prototype;c.getVideoID=function(){return this.videoID};c.genVideoData=function(a,c){__p&&__p();var d=this,e;return b("regeneratorRuntime").async(function(f){__p&&__p();while(1)switch(f.prev=f.next){case 0:a===void 0&&(a={});f.prev=1;e=this.$1;(!e||a.forceRefetch)&&(this.$2&&(b("clearTimeout")(this.$2),this.$2=null),e=this.$1=this.$3(a),this.$2=b("setTimeout")(b("TimeSlice").guard(function(){d.$1=null,c()},"VideoPlayerMetaData cacheTimeout",{propagationType:b("TimeSlice").PropagationType.ORPHAN}),a.cacheTimeout||h));f.next=6;return b("regeneratorRuntime").awrap(e);case 6:return f.abrupt("return",f.sent);case 9:f.prev=9;f.t0=f["catch"](1);throw f.t0;case 12:case"end":return f.stop()}},null,this,[[1,9]])};c.$3=function(a){__p&&__p();var c=b("XVideoDataAsyncController").getURIBuilder().setString("video_id",this.videoID).setBool("supports_html5_video",!b("isHTML5VideoImplementationUnavailable")(!0)),d=a.forceFlash,e=a.allowDashPrefetch,f=a.forceHD;a=a.hostNumber;d!==void 0&&(c=c.setBool("force_flash",d));e!==void 0&&(c=c.setBool("allow_dash_prefetch",e));f!==void 0&&(c=c.setBool("force_hd",f));a!==void 0&&(c=c.setInt("host_number",a));var g=c.getURI();return new(b("Promise"))(function(a,c){new(b("AsyncRequest"))(g).setMethod("GET").setURI(g).setReadOnly(!0).setAllowCrossPageTransition(!0).setHandler(function(d){d=d.payload;!d.error?a(new(b("VideoData"))(d)):c(d.error)}).setErrorHandler(function(a){c(a.getErrorDescription())}).send()})};a.get=function(b){g[b]||(g[b]=new a(b));return g[b]};a.genVideoData=function(c,d,e){return b("regeneratorRuntime").async(function(f){while(1)switch(f.prev=f.next){case 0:d===void 0&&(d={});e===void 0&&(e=function(){});f.next=4;return b("regeneratorRuntime").awrap(a.get(c).genVideoData(d,e));case 4:return f.abrupt("return",f.sent);case 5:case"end":return f.stop()}},null,this)};return a}();e.exports=a}),null);
__d("Currency",["CurrencyConfig"],(function(a,b,c,d,e,f){__p&&__p();var g=b("CurrencyConfig").allCurrenciesByCode,h={iso:"",format:"",symbol:"",offset:1,name:""};function i(a){return a!=null&&g[a]?g[a]:h}function a(a){return i(a).format}function c(a){return i(a).iso}function d(a){return i(a).name}function f(a){return i(a).offset}function j(a){return i(a).symbol}e.exports={getFormat:a,getISO:c,getName:d,getOffset:f,getSymbol:j}}),null);
__d("ads-lib-formatters",["fbt","Currency","NumberFormatConfig","intlNumUtils"],(function(a,b,c,d,e,f,g){__p&&__p();var h="USD";function i(a,b,c){a=(a=a)!=null?a:"";c=(c=c)!=null?c:"";b=b===0||b==null?a.length:b;if(a.length<=b)return a;b=b-c.length;b&&(/[\uD800-\uDFFF]/.test(a[b-1])&&(b+=1));return a.substr(0,b)+c}function a(a,b){b===void 0&&(b="");return function(c){return c==null?b:i(c,a,"...")}}function j(a,c,d,e,f){return a==="N/A"?a:b("intlNumUtils").formatNumberRaw((a=a)!=null?a:0,c,d,e,f)}function k(a){return function(b){return j(b,(b=a)!=null?b:0,",",".")}}function l(a){return function(c){return j(c,(c=a)!=null?c:0,b("NumberFormatConfig").numberDelimiter,b("NumberFormatConfig").decimalSeparator,b("NumberFormatConfig").minDigitsForThousandsSeparator)}}function c(a){return function(c){return b("intlNumUtils").formatNumberRaw((c=c)!=null?c:"0",(c=a)!=null?c:0,b("NumberFormatConfig").numberDelimiter,b("NumberFormatConfig").decimalSeparator,b("NumberFormatConfig").minDigitsForThousandsSeparator)}}function d(a,c){return function(d){return b("intlNumUtils").formatNumberWithLimitedSigFig(d,a,c)}}function e(a,c){return c?l(a):function(c){return j(c,a||0,"",b("NumberFormatConfig").decimalSeparator,b("NumberFormatConfig").minDigitsForThousandsSeparator)}}function m(a,b){var c=b===!1?1:100;return function(b){return j(b*c,a||0,",",".")+"%"}}function n(a,c){var d=c===!1?1:100;return function(c){return j(((c=c)!=null?c:0)*d,a||0,b("NumberFormatConfig").numberDelimiter,b("NumberFormatConfig").decimalSeparator)+"%"}}function o(a,c,d,e,f){__p&&__p();a===void 0&&(a=2);c===void 0&&(c=h);d===void 0&&(d=!1);var g=e(a);e=c+"-"+a+"-"+d.toString();if(!f[e]){var i=b("Currency").getFormat(c)||b("Currency").getFormat(h);a=b("Currency").getSymbol(c)||b("Currency").getSymbol(h);var j=b("Currency").getOffset(c)||b("Currency").getOffset(h);i=i.replace("{symbol}",a);f[e]=function(a){a=(a=a)!=null?a:0;d&&(a/=j);return!(a+"").match(/^\-?[\d\.,]*$/)?"N/A":i.replace("{amount}",g(a))}}return f[e]}var p={};function q(a,b,c){return o((a=a)!=null?a:0,b,c,k,p)}var r={};function s(a,b,c){return o(a,b,c,l,r)}function t(a,c){return c!=null?b("intlNumUtils").parseNumberRaw(a!=null?a+"":"",c,b("NumberFormatConfig").numberDelimiter):a!=null?b("intlNumUtils").parseNumber(a+""):null}function u(a){var b=[];a.countries&&a.countries.length&&b.push(a.countries);a.cities&&a.cities.length&&b.push(a.cities.map(function(a){return a.name}));a.zips&&a.zips.length&&b.push(a.zips.map(function(a){return a.name}));a.regions&&a.regions.length&&b.push(a.regions.map(function(a){return a.name}));return b.join("; ").replace(/,/g,", ")}function v(a,b){if(a||b){a=a||g._("Todos");b=b||g._("Todos");return a+"&ndash;"+b}return"Any"}function w(a){a=a+"";if(a==="0")return g._("Todos");else if(a==="1")return g._("Homens");return g._("Mulheres")}f.geoLocation=u;f.age=v;f.sex=w;f.createTextTruncator=a;f.chopString=i;f.parseNumber=t;f.formatNumber=j;f.createIntlNumberFormatter=l;f.createIntlLongNumberFormatter=c;f.createLimitedSigFigNumberFormatter=d;f.createMaybeDelimitedNumberFormatter=e;f.createIntlPercentFormatter=n;f.createIntlMoneyFormatter=s;f.createNumberFormatter=k;f.createPercentFormatter=m;f.createMoneyFormatter=q}),null);
__d("mod",[],(function(a,b,c,d,e,f){function a(a,b){a=a%b;a*b<0&&(a+=b);return a}e.exports=a}),null);
__d("nearlyEqualNumbers",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b){if(a===b)return!0;var c=Math.abs(a-b);if(c<Number.EPSILON)return!0;a=Math.abs(a);b=Math.abs(b);return c/(a+b)<Number.EPSILON}e.exports=a}),null);
__d("someObject",[],(function(a,b,c,d,e,f){"use strict";var g=Object.prototype.hasOwnProperty;function a(a,b,c){for(var d in a)if(g.call(a,d)&&b.call(c,a[d],d,a))return!0;return!1}e.exports=a}),null);
__d("GeoCoordinatesRecord",["immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record({latitude:void 0,longitude:void 0});c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a);e.exports=c}),null);
__d("GeoCoordinates",["GeoCoordinatesRecord","nearlyEqualNumbers"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(b,c){return a.call(this,{latitude:b,longitude:c})||this}var d=c.prototype;d.nearlyEquals=function(a){return b("nearlyEqualNumbers")(this.latitude,a.latitude)&&b("nearlyEqualNumbers")(this.longitude,a.longitude)};return c}(b("GeoCoordinatesRecord"));e.exports=a}),null);
__d("GeoRectangle",["GeoCoordinates","ImmutableObject"],(function(a,b,c,d,e,f){__p&&__p();var g=function(b){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,b);function a(a,c,d,e){return b.call(this,{n:a,w:c,s:d,e:e})||this}var c=a.prototype;c.containsLat=function(a){return a>=this.s&&a<=this.n};c.getCenter=function(){var a=(this.n+this.s)/2,b;b=(this.e+this.w)/2;this.w>this.e&&(b-=180,b<-180&&(b+=360));return{latitude:a,longitude:b}};c.containsLon=function(a){return this.w>this.e?a>=this.w||a<=this.e:a>=this.w&&a<=this.e};c.getHeight=function(){return this.n-this.s};c.getWidth=function(){var a=this.e;this.w>this.e&&(a+=360);return a-this.w};c.containsPoint=function(a,b){return this.containsLat(a)&&this.containsLon(b)};c.containsGeoRectangle=function(a){return this.containsPoint(a.n,a.w)&&this.containsPoint(a.s,a.e)};c.toArray=function(){return{n:this.n,w:this.w,s:this.s,e:this.e}};return a}(b("ImmutableObject"));g.fromPoints=function(a){__p&&__p();if(!a||a.length===0)return null;if(a.length===1){var b=a[0];return new g(b.latitude,b.longitude,b.latitude,b.longitude)}b=a.map(function(a){return a.latitude});a=a.map(function(a){return a.longitude}).sort(function(a,b){return a-b});var c=360+a[0]-a[a.length-1],d=a.length-1,e=0;for(var f=0;f<a.length-1;f++){var h=a[f+1]-a[f];h>c&&(c=h,d=f,e=f+1)}return new g(Math.max.apply(Math,b),a[e],Math.min.apply(Math,b),a[d])};e.exports=g}),null);
__d("randomShuffle",["randomInt"],(function(a,b,c,d,e,f){__p&&__p();function a(a){for(var c=a.length-1;c>0;c--){var d=b("randomInt").call(this,c+1);if(d!=c){var e=a[d];a[d]=a[c];a[c]=e}}return a}e.exports=a}),null);
__d("MovingAverage",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b){this.$1=b;this.$2=0;this.$3=(b||0)*a;this.$4=a;this.$5=0;this.$6=[];for(var c=0;c<a;c++)this.$6[c]=b}var b=a.prototype;b.add=function(a){if(a==null)return this.addNull();a=a==null?0:a;this.$3-=this.$6[this.$2]||0;this.$3+=a;this.$6[this.$2]==null&&(this.$5++,this.$5=Math.min(this.$5,this.$4));this.$6[this.$2]=a;this.$2=(this.$2+1)%this.$4;return this};b.addNull=function(){this.$3-=this.$6[this.$2]||0;this.$6[this.$2]!=null&&(this.$5--,this.$5=Math.max(this.$5,0));this.$6[this.$2]=null;this.$2=(this.$2+1)%this.$4;return this};b.getAvg=function(){return this.$5<this.$4&&this.$5!==0&&this.$1==null?this.$3/this.$5:this.$3/this.$4};b.getSum=function(){return this.$3};return a}();f.MovingAverage=a}),null);
__d("SphericalMediaConstants",[],(function(a,b,c,d,e,f){"use strict";a={COMP_PHOTO_EDIT_THUMB:"PhotoEditThumbanil",COMP_PHOTO_VIEWER:"PhotoViewer",EDIT_VIEWPORT_SIZE:{width:476,height:476},HALF_EQUIRECT_PARTIAL_LIMIT:85,HI_ALPHA_BG:{start:.2,end:.5},HI_ALPHA_ELEMENT:{start:.5,end:.85},HI_ALPHA_DURATION:400,HI_SIZE_NORMAL:{width:35,height:35,center_radius:2,background_radius:17.5,inner_radius:12,arc_radius:6.3,arc_stroke:5.3,inner_stroke:1,triangle:[2,2.5,5.2],rim_radius:16.8,rim_stroke:1.4},HI_SIZE_FULL:{width:50,height:50,center_radius:3,background_radius:25,inner_radius:17.14,arc_radius:9,arc_stroke:7.57,inner_stroke:1.5,triangle:[2.85,4.29,7.9],rim_radius:24,rim_stroke:2},HI_BLINK_ARC_RAD:Math.PI/6,HI_BLINK_DURATION:400,HI_FADE_OUT_DELAY:1e3,MOUSE_EXPOSURE:4e3,LOGGER_SURFACES:{newsfeed:"newsfeed",timeline:"timeline",fullpage:"photo_viewer",snowlift:"www_snowlift",composer:"composer",albumComposer:"album_composer",stories:"stories",other:"other"},LOGGER_SIGNIFICANT_MOVEMENT_DEGREE:30,LOGGER_SIGNIFICANT_MOVEMENT_MS:1e3,GYRO_SLIP_FACTOR:.15,RB_SPRING_FACTOR:25,RB_MAX_SPRING_DEGREE:15,RB_MAX_STRETCH_X_DEGREE:20,RB_MAX_STRETCH_Y_DEGREE:20,RB_FRICTION:.3,TILED_CUBE_FACES:{PLUS_X:2,MINUS_X:0,PLUS_Y:4,MINUS_Y:5,PLUS_Z:3,MINUS_Z:1},TILED_CUBE_TILE_CONTENT_SIZE:510,TILED_CUBE_TILE_PADDING_PIXELS:1,TAG:"tag",TAGGED_FACEBOX:"tagged_facebox",UNTAGGED_FACEBOX:"untagged_facebox",DEFAULT_SPATIAL_TAG_SIZE_DEGREE:10,DEFAULT_VOLUME:{MUTE:0,HIGH:.7}};e.exports=a}),null);
__d("XPagesComposerDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/composer/dialog/",{entry_point:{type:"String",required:!0},open_composer:{type:"Enum",enumType:1},preview_url:{type:"String"},extra_info:{type:"StringToStringMap"},composer_prefill:{type:"String"},composer_igphoto_id:{type:"String"},attach_support_now_cta:{type:"Bool",defaultValue:!1},archived_story_card_id:{type:"FBID"},__asyncDialog:{type:"Int"}})}),null);