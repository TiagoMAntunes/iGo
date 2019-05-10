if (self.CavalryLogger) { CavalryLogger.start_js(["gtye8"]); }

__d("P2PChatThreadBanner.react",["cx","ix","Image.react","Layout.react","P2PAPI","P2PLogger","P2PPaymentLoggerEvent","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("Layout.react").FillColumn,j=b("Layout.react").Column,k=new Set();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=!1,d.log=function(a,c){b("P2PLogger").log(a,babelHelpers["extends"]({www_event_flow:d.props.loggerEventFlow},c))},d.handleClick=function(a){a.stopPropagation(),d.props.onClick&&d.props.onClick(),d.log(b("P2PPaymentLoggerEvent").UI_ACTN_CHAT_THREAD_BANNER_CLICKED,{}),b("P2PAPI").incrementBannerDismissals(d.props.bannerType)},d.handleClose=function(a){a.stopPropagation(),d.log(b("P2PPaymentLoggerEvent").UI_ACTN_CHAT_THREAD_BANNER_DISMISSED,{}),b("P2PAPI").incrementBannerDismissals(d.props.bannerType)},d.hasRenderedSameBanner=function(){return!d.$1&&k.has(d.props.bannerType)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this.props.bannerType;k.has(a)||(k.add(a),this.$1=!0,this.log(b("P2PPaymentLoggerEvent").UI_ACTN_CHAT_THREAD_BANNER_VIEWED,{}),b("P2PAPI").incrementBannerViews(this.props.bannerType))};d.render=function(){var a,c;if(this.hasRenderedSameBanner())return null;this.props.bodyText&&(a=b("React").createElement("div",{className:"_1w2e"},this.props.bodyText));this.props.buttonText&&(c=b("React").createElement("a",{className:"_2hrk"},this.props.buttonText));return b("React").createElement("div",{className:"_1w2f",onClick:this.handleClick,role:"presentation"},b("React").createElement("div",{className:"_3jht",onClick:this.handleClose,role:"presentation"},b("React").createElement(b("Image.react"),{className:"_47dg",height:9,src:h("94353"),width:9})),b("React").createElement(b("Layout.react"),null,b("React").createElement(j,{className:"_1w2g"},b("React").createElement(b("Image.react"),{className:"_1w2h",height:15,src:h("94443"),width:15})),b("React").createElement(i,{className:"_1w2i"},b("React").createElement("div",{className:"_1w2j"+(a?" _1w2k":"")},this.props.titleText),a,c)))};return c}(b("React").Component);c.propTypes={bannerType:a.string.isRequired,bodyText:a.string,buttonText:a.string,loggerEventFlow:a.string.isRequired,onClick:a.func,titleText:a.string.isRequired};e.exports=c}),null);
__d("P2PBannerStore",["invariant","EventEmitter","P2PActionConstants","P2PAPI","P2PDispatcher"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={},i=!1,j=!1;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.onEventDispatched=function(a){__p&&__p();var c=a.type;a=a.data;switch(c){case b("P2PActionConstants").BANNER_STATES_UPDATED:this.handleBannerStatesUpdated(a);this.emit("change");break;case b("P2PActionConstants").BANNER_DISMISSED:this.handleBannerDismissed(a);this.emit("change");break;case b("P2PActionConstants").BANNER_COMPLETED:this.handleBannerCompleted(a);this.emit("change");break}};d.handleBannerStatesUpdated=function(a){i=!0,h=a};d.handleBannerDismissed=function(a){a=this.getBannerState(a);a.hasBeenDismissed=!0};d.shouldShowBanner=function(a){if(!j){b("P2PAPI").getBannerStates();j=!0;return!1}if(!i)return!1;a=this.getBannerState(a);return a.eligible&&!a.hasBeenDismissed};d.handleBannerCompleted=function(a){a=this.getBannerState(a);a.eligible=!1};d.getBannerState=function(a){var b=h[a];b||g(0,5104,a);return b};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("P2PPlatformContextStore",["Arbiter","ChannelConstants","CurrentUser","EventEmitter","ImmutableObject","MercuryIDs","P2PActionConstants","P2PActions","P2PAPI","P2PChannelType","P2PDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map(),h=new Map(),i;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;i=b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType(b("P2PChannelType").PLATFORM_CONTEXT_NEW),c.handleChannelUpdated.bind(babelHelpers.assertThisInitialized(c)));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType(b("P2PChannelType").PLATFORM_CONTEXT_ELIGIBLE_ITEM_UPDATED),c.handleChannelChanged.bind(babelHelpers.assertThisInitialized(c)));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType(b("P2PChannelType").PLATFORM_CONTEXT_DISMISSED),c.handleChannelChanged.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.onEventDispatched=function(a){__p&&__p();var c=a.type;a=a.data;switch(c){case b("P2PActionConstants").PLATFORM_CONTEXT_ADDED:this.handlePlatformContextAdded(a);this.emit("change");break;case b("P2PActionConstants").PLATFORM_CONTEXT_BANNER_DISMISSED:this.handlePlatformContextBannerDisimssed(a);this.emit("change");break;case b("P2PActionConstants").PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD:this.handlePlatformContextProductItemSold(a);this.emit("change");break;case b("P2PActionConstants").PLATFORM_CONTEXT_CHANGED:this.handlePlatformContextChanged(a);this.emit("change");break}};d.handleChannelUpdated=function(a,c){a=c.obj;b("P2PActions").addPlatformContext(a)};d.handleChannelChanged=function(a,c){a=c.obj;b("P2PActions").platformContextChanged(a)};d.handlePlatformContextAdded=function(a){this.setPlatformContext(a)};d.handlePlatformContextAddedError=function(a){h.set(a.itemID,a.error)};d.handlePlatformContextSaveErrorsCleared=function(a){h["delete"](a)};d.handlePlatformContextChanged=function(a){var b=this;g.forEach(function(c,d){c.id===a.id&&b.setPlatformContext(a)})};d.handlePlatformContextBannerDisimssed=function(a){var c=this;g.forEach(function(d,e){d.id===a&&(c.isViewerSellerForPlatformContext(d)?d=b("ImmutableObject").set(d,{banner:b("ImmutableObject").set(d.banner,{shouldShowToSeller:!1})}):c.isViewerBuyerForPlatformContext(d)&&(d=b("ImmutableObject").set(d,{banner:b("ImmutableObject").set(d.banner,{shouldShowToBuyer:!1})})),g.set(e,d))})};d.handlePlatformContextProductItemSold=function(a){g.forEach(function(c,d){c.id===a&&(c=b("ImmutableObject").set(c,{product:b("ImmutableObject").set(c.product,{isAvailable:!1})}),g.set(d,c))})};d.setPlatformContext=function(a){var c=new(b("ImmutableObject"))(a);c=b("ImmutableObject").set(c,{product:new(b("ImmutableObject"))(a.product)});c=b("ImmutableObject").set(c,{banner:new(b("ImmutableObject"))(a.banner)});g.set(this.getOtherUserIDForPlatformContext(a),c)};d.shouldShowBanner=function(a){__p&&__p();var c;if(!a)return!1;c=this.getPlatformContextByOtherUserID(a);if(!c){g.set(a,new(b("ImmutableObject"))({}));b("P2PAPI").getPlatformContextByOtherUserID({otherUserID:a});return!1}a=c.banner;return!!(this.isViewerSellerForPlatformContext(c)&&a.shouldShowToSeller||this.isViewerBuyerForPlatformContext(c)&&a.shouldShowToBuyer)};d.isViewerSellerForPlatformContext=function(a){return a.sellerID===b("CurrentUser").getID()};d.isViewerBuyerForPlatformContext=function(a){return a.buyerID===b("CurrentUser").getID()};d.getOtherUserIDForPlatformContext=function(a){return this.isViewerSellerForPlatformContext(a)?a.buyerID:a.sellerID};d.getPlatformContextByOtherUserID=function(a){return g.get(a)};d.getThreadIDFromPlatformContext=function(a){a=this.getOtherUserIDForPlatformContext(a);return b("MercuryIDs").getThreadIDFromUserID(a)};d.getSaveError=function(a){return h.get(a)};d.getDispatchToken=function(){return i};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("P2PMessageSellerConfirmationDialog.react",["cx","fbt","ix","Image.react","P2PButton.react","P2PDialog.react","P2PDialogBody.react","P2PDialogFooter.react","P2PListRow.react","P2PText.react","React","XUICloseButton.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("P2PDialog.react"),{width:480},b("React").createElement(b("P2PDialogBody.react"),{className:"_4-ft"},b("React").createElement(b("XUICloseButton.react"),{className:"_4-fu",onClick:this.props.onCancel}),b("React").createElement(b("P2PListRow.react"),{offsetRight:16,offsetBottom:0},b("React").createElement(b("Image.react"),{height:100,src:i("94406"),width:105}),b("React").createElement("div",null,b("React").createElement(b("P2PText.react"),{className:"_3-94",size:"large",type:"primary",weight:"bold"},h._("Contactar o vendedor antes do pagamento")),b("React").createElement(b("P2PText.react"),{size:"medium",type:"primary"},h._("Certifica-te de que discutes os pre\u00e7os e quest\u00f5es de log\u00edstica com o vendedor antes de enviar pagamentos para este artigo."))))),b("React").createElement(b("P2PDialogFooter.react"),null,b("React").createElement(b("P2PButton.react"),{label:h._("Iniciar uma conversa"),onClick:this.props.onCancel}),b("React").createElement(b("P2PButton.react"),{label:h._("Continuar a Pagar"),onClick:this.props.onPay,use:"confirm"})))};return c}(b("React").Component);c.propTypes={onCancel:a.func.isRequired,onPay:a.func.isRequired};e.exports=c}),null);
__d("P2PPlatformContextBannerShape",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c=a.shape({shouldShowToBuyer:a.bool,shouldShowToSeller:a.bool,shouldShowPayNux:a.bool});e.exports=c}),null);
__d("P2PPlatformContextShape",["P2PPlatformContextBannerShape","P2PPlatformContextProductItemShape","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c=a.shape({id:a.string,banner:b("P2PPlatformContextBannerShape"),buyerID:a.string,product:b("P2PPlatformContextProductItemShape"),sellerID:a.string});e.exports=c}),null);
__d("P2PUserEligibilityStore",["EventEmitter","MercuryIDs","P2PActionConstants","P2PAPI","P2PDispatcher","P2PGKValues"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;g={};b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.onEventDispatched=function(a){var c=a.data;a=a.type;switch(a){case b("P2PActionConstants").USER_ELIGIBILITY_UDPATED:this.handleEligibilityUpdated(c);this.emit("change");break}};d.getEligibilityByUserIDs=function(a){var c=[],d,e,f={};for(var h=0;h<a.length;h++)e=a[h],d=g[e],d===void 0&&(g[e]=null,c.push(e)),f[e]=g[e];b("P2PGKValues").P2PEnabled&&c.length&&b("P2PAPI").getUserEligibility({userIDs:c});return f};d.getEligibilityByUserID=function(a){var b=this.getEligibilityByUserIDs([a]);return b[a]};d.getEligibilityByThreadID=function(a){return this.getEligibilityByUserID(b("MercuryIDs").getUserIDFromThreadID(a))};d.handleEligibilityUpdated=function(a){for(var b=0;b<a.length;b++)g[a[b].user_id]=a[b].p2p_eligible};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("XC2CPayNUXBannerImpressionsUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/c2c/pay_nux_banner_impressions/_update/",{})}),null);
__d("XGroupsReportToAdminController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/groups/mall/report_to_admin/",{post_id:{type:"FBID"},comment_id:{type:"FBID"}})}),null);
__d("P2PProductItemChatThreadBanner.react",["cx","fbt","ix","AsyncRequest","BackgroundImage.react","ContextualLayerAutoFlip","CurrentUser","Image.react","Layout.react","LineClamp.react","Link.react","MercuryIDs","MessengerState.bs","P2PActions","P2PAPI","P2PGKValues","P2PLogger","P2PLinkConstants","P2PMessageSellerConfirmationDialog.react","P2PPaymentLoggerEvent","P2PPaymentLoggerEventFlow","P2PPlatformContextShape","P2PPlatformContextStore","P2PUserEligibilityStore","PopoverMenu.react","ReactComponentWithPureRenderMixin","React","ReactLayeredComponentMixin_DEPRECATED","ReactXUIMenu","StoreAndPropBasedStateMixin","Tooltip.react","XC2CPayNUXBannerImpressionsUpdateController","XGroupsReportToAdminController","XUIAmbientNUX.react","XUIButton.react","XUIGrayText.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("Layout.react").Column,k=b("Layout.react").FillColumn,l=b("ReactXUIMenu").Item,m=!1,n=new Set();a=b("React").createClass({displayName:"P2PProductItemChatThreadBanner",mixins:[b("ReactLayeredComponentMixin_DEPRECATED"),b("ReactComponentWithPureRenderMixin"),b("StoreAndPropBasedStateMixin")(b("P2PUserEligibilityStore"))],propTypes:{platformContext:b("P2PPlatformContextShape").isRequired},getInitialState:function(){return{requestEnabled:b("P2PGKValues").P2PGroupCommerceRequestEnabled,showConfirmationDialog:!1,showNUX:!1}},statics:{calculateState:function(a){return{canSendToRecipient:b("P2PUserEligibilityStore").getEligibilityByThreadID(b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a.platformContext))}}},componentDidMount:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);this.handleShouldShowPayNUX();n.has(c)||(n.add(c),b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a)?this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_SELLER_VIEWED):this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_BUYER_VIEWED))},componentDidUpdate:function(a,b){!b.canSendToRecipient&&this.state.canSendToRecipient&&this.handleShouldShowPayNUX()},log:function(a,c){var d={platform_logging_data:this.props.platformContext.product.loggingData};b("P2PLogger").log(a,babelHelpers["extends"]({www_event_flow:b("P2PPaymentLoggerEventFlow").UI_FLOW_PLATFORM_BANNER},d,c))},handleShouldShowPayNUX:function(){var a=this.props.platformContext;a=!m&&this.shouldRenderPayButton()&&a.banner.shouldShowPayNux;a&&(this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_PAY_NUX_SHOWN),m=!0,this.setState({showNUX:!0}),new(b("AsyncRequest"))().setURI(b("XC2CPayNUXBannerImpressionsUpdateController").getURIBuilder().getURI()).setMethod("POST").send())},handleDismissClick:function(a){a.preventDefault();a=this.props.platformContext;b("P2PAPI").dismissPlatformContextBanner(a.id);b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a)?this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_SELLER_HIDE_CLICKED):this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_BUYER_HIDE_CLICKED)},handleSoldClick:function(a){a.preventDefault(),b("P2PAPI").markSoldPlatformContextProductItem(this.props.platformContext.id),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_SOLD_CLICKED)},handleRequestClick:function(a){a.preventDefault(),this.openSendMoneyFlyoutRequestTab(),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_REQUEST_CLICKED)},hasNoMessagesFromSeller:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);c=b("MessengerState.bs").getCurrentlyLoadedMessages(b("CurrentUser").getID(),c);if(!c)return!0;var d=b("MercuryIDs").getParticipantIDFromUserID(a.sellerID);a=c.some(function(a){return a.author===d});return!a},handlePayClick:function(a){a.preventDefault(),this.hasNoMessagesFromSeller()?(this.setState({showConfirmationDialog:!0}),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_SHOWN)):this.openSendMoneyFlyout()},openSendMoneyFlyoutRequestTab:function(){var a=this.props.platformContext,c=a.product,d=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);b("P2PActions").chatSendViewOpened({amount:c.formattedAmount,memoText:c.name,openRequestTab:!0,platformData:{platformContextID:a.id,loggingData:c.loggingData},threadID:d})},openSendMoneyFlyout:function(){var a=this.props.platformContext,c=a.product,d=b("P2PPlatformContextStore").getThreadIDFromPlatformContext(a);b("P2PActions").chatSendViewOpened({threadID:d,amount:c.formattedAmount,platformData:{platformContextID:a.id,loggingData:c.loggingData}});this.setState({showNUX:!1});this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_PAY_CLICKED)},handleImageClicked:function(){this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_IMAGE_CLICKED)},handleTitleClicked:function(){this.log(b("P2PPaymentLoggerEvent").UI_ACTN_PLATFORM_BANNER_TITLE_CLICKED)},renderMarkSold:function(){var a=this.props.platformContext,c;if(!a.product.isAvailable)return null;b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a)&&(c=b("React").createElement(b("Link.react"),{href:"#",onClick:this.handleSoldClick},h._("Marcar como Vendido")));return c},renderPayButton:function(){if(!this.shouldRenderPayButton())return null;var a=b("React").createElement(b("XUIButton.react"),{label:h._("Pagar"),onClick:this.handlePayClick,ref:"pay_button",use:"confirm"});this.state.showNUX||(a=b("React").createElement(b("Tooltip.react"),{alignH:"right",display:"block",tooltip:h._("Em seguida, podes confirmar o montante.")},a));return b("React").createElement("div",{className:this.isCompactMode()?"":"_3-8x"},a)},renderRequestButton:function(){return!this.shouldRenderRequestButton()?null:b("React").createElement(b("Link.react"),{className:"_f-n",href:"#",onClick:this.handleRequestClick},h._("Pedir pagamento"))},shouldRenderPayButton:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").isViewerBuyerForPlatformContext(this.props.platformContext);return!!(this.state.canSendToRecipient&&a.product.isAvailable&&c&&a.product.rawAmount.amount>0)},shouldRenderSellerActionsRow:function(){var a=this.props.platformContext,c=b("P2PPlatformContextStore").isViewerSellerForPlatformContext(a);return c&&a.product.isAvailable},shouldRenderRequestButton:function(){return!!(this.state.requestEnabled&&this.state.canSendToRecipient&&this.props.platformContext.product.rawAmount.amount>0)},getAmountText:function(){var a=this.props.platformContext;a=a.product;return a.rawAmount.amount>0?a.formattedAmount:h._("GR\u00c1TIS")},renderAskingPriceRow:function(){var a=this.props.platformContext;a=a.product;if(a.isAvailable)return b("React").createElement(b("LineClamp.react"),{lines:1,lineHeight:16},b("React").createElement(b("XUIGrayText.react"),{shade:"light"},h._("Pre\u00e7o: {price of the item}",[h._param("price of the item",this.getAmountText())])))},renderNameLine:function(){var a=this.props.platformContext;a=a.product;var c="dark",d;a.isAvailable||(c="light",d=h._("VENDIDO"));return b("React").createElement(b("Link.react"),{href:a.refURL||"#",onClick:this.handleTitleClicked},b("React").createElement(b("XUIGrayText.react"),{shade:c},d?"("+d+") ":null,a.name))},renderSellerActionsRow:function(){return!this.shouldRenderSellerActionsRow()?null:b("React").createElement("div",{className:"_f-o"},this.renderMarkSold(),this.renderRequestButton())},renderImageColumn:function(){var a=this.props.platformContext;a=a.product;return this.isCompactMode()?null:b("React").createElement(j,{className:"_3-90"},b("React").createElement("div",{className:"_5qnr"},b("React").createElement("div",{className:"_5qn-"},b("React").createElement(b("Link.react"),{href:a.refURL||"#",onClick:this.handleImageClicked},b("React").createElement(b("BackgroundImage.react"),{backgroundPosition:"50% 50%",backgroundSize:"cover",height:45,src:a.image,width:45})))))},renderPopoverMenu:function(){var a=this.props.platformContext;a=a.product;a=b("XGroupsReportToAdminController").getURIBuilder().setFBID("post_id",a.loggingData.post_id).getURI();a=b("React").createElement(b("ReactXUIMenu"),{className:"_1z1u"},b("React").createElement(l,{className:"_1z1_"},b("React").createElement("div",{onClick:this.handleDismissClick,role:"presentation"},h._("Ocultar da conversa"))),b("React").createElement(l,{ajaxify:a,rel:"async-post"},h._("Denunciar ao administrador")),b("React").createElement(l,{href:b("P2PLinkConstants").helpCenterURI,target:"_blank"},h._("Saber mais")));return b("React").createElement(b("PopoverMenu.react"),{alignh:"right",layerBehaviors:[b("ContextualLayerAutoFlip")],menu:a,className:"_3fqa"},b("React").createElement("div",{className:"_1z20"},b("React").createElement(b("Link.react"),{className:"_1z21",href:"#"})))},isCompactMode:function(){var a=this.props.platformContext;a=a.product;return!a.image||!a.isAvailable},onNUXCloseButtonClick:function(){this.setState({showNUX:!1})},renderLayers:function(){var a=this,c={};this.state.showNUX?c.ambientNUX=b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"left",contextRef:function(){return a.refs.pay_button},customwidth:234,onCloseButtonClick:this.onNUXCloseButtonClick,position:"above",shown:!0,width:"custom"},b("React").createElement("div",{className:"_3-95"},h._("Podes pagar este artigo nas tuas mensagens.")),b("React").createElement("div",null,b("React").createElement(b("Image.react"),{className:"_3fqb",height:14,src:i("94455"),width:10}),b("React").createElement("span",{className:"_3fqc"},h._("\u00c9 gratuito e seguro.")))):this.state.showConfirmationDialog&&(c.confirmationDialog=b("React").createElement(b("P2PMessageSellerConfirmationDialog.react"),{onCancel:function(){a.setState({showConfirmationDialog:!1}),a.log(b("P2PPaymentLoggerEvent").UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_CANCEL_CLICK)},onPay:function(){a.setState({showConfirmationDialog:!1}),a.openSendMoneyFlyout(),a.log(b("P2PPaymentLoggerEvent").UI_ACTN_MESSAGE_SELLER_CONFIRM_DIALOG_PAY_CLICK)}}));return c},render:function(){return b("React").createElement("div",{className:"_319c"+(this.isCompactMode()?" _5qn_":"")},b("React").createElement(b("Layout.react"),null,this.renderImageColumn(),b("React").createElement(k,null,b("React").createElement("div",{className:"_5qo0"},b("React").createElement("div",{className:"_5qo1"},b("React").createElement(b("LineClamp.react"),{lines:1,lineHeight:16},this.renderNameLine()),this.renderAskingPriceRow(),this.renderSellerActionsRow()))),b("React").createElement(j,null,b("React").createElement("div",{className:"_1_68"},this.renderPopoverMenu(),this.renderPayButton()))))}});e.exports=a}),null);
__d("P2PSendMoneyNUXChatThreadBanner.react",["MercuryIDs","P2PActions","P2PChatThreadBanner.react","P2PUserEligibilityStore","React","StoreAndPropBasedStateMixin"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c=b("React").createClass({displayName:"P2PSendMoneyNUXChatThreadBanner",mixins:[b("StoreAndPropBasedStateMixin")(b("P2PUserEligibilityStore"))],propTypes:{bannerType:a.string.isRequired,bodyText:a.string,buttonText:a.string,loggerEventFlow:a.string.isRequired,openRequestTab:a.bool,threadID:a.string.isRequired,titleText:a.string.isRequired},getDefaultProps:function(){return{openRequestTab:!1}},statics:{calculateState:function(a){a=b("MercuryIDs").isGroupChat(a.threadID)||b("P2PUserEligibilityStore").getEligibilityByThreadID(a.threadID);return{isThreadEligible:a}}},handleClick:function(){b("P2PActions").chatSendViewOpened({openRequestTab:this.props.openRequestTab,threadID:this.props.threadID})},render:function(){return!this.state.isThreadEligible?null:b("React").createElement(b("P2PChatThreadBanner.react"),babelHelpers["extends"]({},this.props,{onClick:this.handleClick}))}});e.exports=c}),null);
__d("P2PRequestSenderNUXChatThreadBanner.react",["fbt","P2PBannerType","P2PPaymentLoggerEventFlow","P2PSendMoneyNUXChatThreadBanner.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("P2PSendMoneyNUXChatThreadBanner.react"),{bannerType:b("P2PBannerType").REQUEST_SENDER_NUX,bodyText:g._("Recebe dinheiro pelo jantar, pela renda ou qualquer outro gasto."),buttonText:g._("Come\u00e7ar"),openRequestTab:!0,loggerEventFlow:b("P2PPaymentLoggerEventFlow").UI_FLOW_REQUEST_SENDER_NUX_CHAT_THREAD_BANNER,threadID:this.props.threadID,titleText:g._("Agora podes pedir dinheiro!")})};return c}(b("React").Component);c.propTypes={threadID:a.string.isRequired};e.exports=c}),null);
__d("P2PSenderNUXChatThreadBanner.react",["fbt","P2PBannerType","P2PPaymentLoggerEventFlow","P2PSendMoneyNUXChatThreadBanner.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("P2PSendMoneyNUXChatThreadBanner.react"),{bannerType:b("P2PBannerType").SENDER_NUX,bodyText:g._("\u00c9 gratuito e seguro."),buttonText:g._("Come\u00e7ar"),loggerEventFlow:b("P2PPaymentLoggerEventFlow").UI_FLOW_SENDER_NUX_CHAT_THREAD_BANNER,threadID:this.props.threadID,titleText:g._("Agora podes enviar dinheiro!")})};return c}(b("React").Component);c.propTypes={threadID:a.string.isRequired};e.exports=c}),null);
__d("P2PChatThreadBannerContainer.react",["P2PBannerStore","P2PBannerType","P2PPlatformContextStore","P2PProductItemChatThreadBanner.react","P2PRequestSenderNUXChatThreadBanner.react","P2PSenderNUXChatThreadBanner.react","React","StoreAndPropBasedStateMixin"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"P2PChatThreadBannerContainer",mixins:[b("StoreAndPropBasedStateMixin")(b("P2PBannerStore"),b("P2PPlatformContextStore"))],propTypes:{isVisible:a.bool,otherUserID:a.string,threadID:a.string},statics:{calculateState:function(a){return{productItemBannerShown:b("P2PPlatformContextStore").shouldShowBanner(a.otherUserID),requestSenderNUXBannerShown:b("P2PBannerStore").shouldShowBanner(b("P2PBannerType").REQUEST_SENDER_NUX),senderNUXBannerShown:b("P2PBannerStore").shouldShowBanner(b("P2PBannerType").SENDER_NUX)}}},renderRequestSenderNUXBanner:function(){return!this.props.threadID||!this.props.isVisible?null:b("React").createElement(b("P2PRequestSenderNUXChatThreadBanner.react"),{threadID:this.props.threadID})},renderSenderNUXBanner:function(){return!this.props.threadID||!this.props.isVisible?null:b("React").createElement(b("P2PSenderNUXChatThreadBanner.react"),{threadID:this.props.threadID})},renderProductItemBanner:function(){var a=this.props.otherUserID,c;a&&(c=b("P2PPlatformContextStore").getPlatformContextByOtherUserID(a));return!c?null:b("React").createElement(b("P2PProductItemChatThreadBanner.react"),{platformContext:c})},render:function(){var a;this.state.senderNUXBannerShown?a=this.renderSenderNUXBanner():this.state.requestSenderNUXBannerShown?a=this.renderRequestSenderNUXBanner():this.state.productItemBannerShown&&(a=this.renderProductItemBanner());return b("React").createElement("div",null,a)}});e.exports=c}),null);