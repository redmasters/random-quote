goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__32737 = e.target.readyState;
var fexpr__32736 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__32736.cljs$core$IFn$_invoke$arity$1 ? fexpr__32736.cljs$core$IFn$_invoke$arity$1(G__32737) : fexpr__32736.call(null,G__32737));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__32739,handler){
var map__32740 = p__32739;
var map__32740__$1 = cljs.core.__destructure_map(map__32740);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32740__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32740__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32740__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32740__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32740__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32740__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32740__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__32738_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__32738_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___32757 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___32757)){
var response_type_32758 = temp__5753__auto___32757;
(this$__$1.responseType = cljs.core.name(response_type_32758));
} else {
}

var seq__32741_32759 = cljs.core.seq(headers);
var chunk__32742_32760 = null;
var count__32743_32761 = (0);
var i__32744_32762 = (0);
while(true){
if((i__32744_32762 < count__32743_32761)){
var vec__32751_32763 = chunk__32742_32760.cljs$core$IIndexed$_nth$arity$2(null,i__32744_32762);
var k_32764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32751_32763,(0),null);
var v_32765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32751_32763,(1),null);
this$__$1.setRequestHeader(k_32764,v_32765);


var G__32767 = seq__32741_32759;
var G__32768 = chunk__32742_32760;
var G__32769 = count__32743_32761;
var G__32770 = (i__32744_32762 + (1));
seq__32741_32759 = G__32767;
chunk__32742_32760 = G__32768;
count__32743_32761 = G__32769;
i__32744_32762 = G__32770;
continue;
} else {
var temp__5753__auto___32772 = cljs.core.seq(seq__32741_32759);
if(temp__5753__auto___32772){
var seq__32741_32773__$1 = temp__5753__auto___32772;
if(cljs.core.chunked_seq_QMARK_(seq__32741_32773__$1)){
var c__4638__auto___32774 = cljs.core.chunk_first(seq__32741_32773__$1);
var G__32775 = cljs.core.chunk_rest(seq__32741_32773__$1);
var G__32776 = c__4638__auto___32774;
var G__32777 = cljs.core.count(c__4638__auto___32774);
var G__32778 = (0);
seq__32741_32759 = G__32775;
chunk__32742_32760 = G__32776;
count__32743_32761 = G__32777;
i__32744_32762 = G__32778;
continue;
} else {
var vec__32754_32779 = cljs.core.first(seq__32741_32773__$1);
var k_32780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32754_32779,(0),null);
var v_32781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32754_32779,(1),null);
this$__$1.setRequestHeader(k_32780,v_32781);


var G__32782 = cljs.core.next(seq__32741_32773__$1);
var G__32783 = null;
var G__32784 = (0);
var G__32785 = (0);
seq__32741_32759 = G__32782;
chunk__32742_32760 = G__32783;
count__32743_32761 = G__32784;
i__32744_32762 = G__32785;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4212__auto__ = body;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
