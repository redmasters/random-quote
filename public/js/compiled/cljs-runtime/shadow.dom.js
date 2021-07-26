goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35144 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35144(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35145 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35145(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34447 = coll;
var G__34448 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34447,G__34448) : shadow.dom.lazy_native_coll_seq.call(null,G__34447,G__34448));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34475 = arguments.length;
switch (G__34475) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34487 = arguments.length;
switch (G__34487) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34497 = arguments.length;
switch (G__34497) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34509 = arguments.length;
switch (G__34509) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34529 = arguments.length;
switch (G__34529) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34547 = arguments.length;
switch (G__34547) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34553){if((e34553 instanceof Object)){
var e = e34553;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34553;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34564 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34565 = null;
var count__34566 = (0);
var i__34567 = (0);
while(true){
if((i__34567 < count__34566)){
var el = chunk__34565.cljs$core$IIndexed$_nth$arity$2(null,i__34567);
var handler_35152__$1 = ((function (seq__34564,chunk__34565,count__34566,i__34567,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34564,chunk__34565,count__34566,i__34567,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35152__$1);


var G__35153 = seq__34564;
var G__35154 = chunk__34565;
var G__35155 = count__34566;
var G__35156 = (i__34567 + (1));
seq__34564 = G__35153;
chunk__34565 = G__35154;
count__34566 = G__35155;
i__34567 = G__35156;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34564);
if(temp__5753__auto__){
var seq__34564__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34564__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34564__$1);
var G__35157 = cljs.core.chunk_rest(seq__34564__$1);
var G__35158 = c__4638__auto__;
var G__35159 = cljs.core.count(c__4638__auto__);
var G__35160 = (0);
seq__34564 = G__35157;
chunk__34565 = G__35158;
count__34566 = G__35159;
i__34567 = G__35160;
continue;
} else {
var el = cljs.core.first(seq__34564__$1);
var handler_35161__$1 = ((function (seq__34564,chunk__34565,count__34566,i__34567,el,seq__34564__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34564,chunk__34565,count__34566,i__34567,el,seq__34564__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35161__$1);


var G__35162 = cljs.core.next(seq__34564__$1);
var G__35163 = null;
var G__35164 = (0);
var G__35165 = (0);
seq__34564 = G__35162;
chunk__34565 = G__35163;
count__34566 = G__35164;
i__34567 = G__35165;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34588 = arguments.length;
switch (G__34588) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34600 = cljs.core.seq(events);
var chunk__34602 = null;
var count__34603 = (0);
var i__34604 = (0);
while(true){
if((i__34604 < count__34603)){
var vec__34620 = chunk__34602.cljs$core$IIndexed$_nth$arity$2(null,i__34604);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34620,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35167 = seq__34600;
var G__35168 = chunk__34602;
var G__35169 = count__34603;
var G__35170 = (i__34604 + (1));
seq__34600 = G__35167;
chunk__34602 = G__35168;
count__34603 = G__35169;
i__34604 = G__35170;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34600);
if(temp__5753__auto__){
var seq__34600__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34600__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34600__$1);
var G__35171 = cljs.core.chunk_rest(seq__34600__$1);
var G__35172 = c__4638__auto__;
var G__35173 = cljs.core.count(c__4638__auto__);
var G__35174 = (0);
seq__34600 = G__35171;
chunk__34602 = G__35172;
count__34603 = G__35173;
i__34604 = G__35174;
continue;
} else {
var vec__34624 = cljs.core.first(seq__34600__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34624,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34624,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35175 = cljs.core.next(seq__34600__$1);
var G__35176 = null;
var G__35177 = (0);
var G__35178 = (0);
seq__34600 = G__35175;
chunk__34602 = G__35176;
count__34603 = G__35177;
i__34604 = G__35178;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34629 = cljs.core.seq(styles);
var chunk__34630 = null;
var count__34631 = (0);
var i__34632 = (0);
while(true){
if((i__34632 < count__34631)){
var vec__34641 = chunk__34630.cljs$core$IIndexed$_nth$arity$2(null,i__34632);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34641,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34641,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35179 = seq__34629;
var G__35180 = chunk__34630;
var G__35181 = count__34631;
var G__35182 = (i__34632 + (1));
seq__34629 = G__35179;
chunk__34630 = G__35180;
count__34631 = G__35181;
i__34632 = G__35182;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34629);
if(temp__5753__auto__){
var seq__34629__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34629__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34629__$1);
var G__35183 = cljs.core.chunk_rest(seq__34629__$1);
var G__35184 = c__4638__auto__;
var G__35185 = cljs.core.count(c__4638__auto__);
var G__35186 = (0);
seq__34629 = G__35183;
chunk__34630 = G__35184;
count__34631 = G__35185;
i__34632 = G__35186;
continue;
} else {
var vec__34646 = cljs.core.first(seq__34629__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34646,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35187 = cljs.core.next(seq__34629__$1);
var G__35188 = null;
var G__35189 = (0);
var G__35190 = (0);
seq__34629 = G__35187;
chunk__34630 = G__35188;
count__34631 = G__35189;
i__34632 = G__35190;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34655_35191 = key;
var G__34655_35192__$1 = (((G__34655_35191 instanceof cljs.core.Keyword))?G__34655_35191.fqn:null);
switch (G__34655_35192__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35194 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_35194,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_35194,"aria-");
}
})())){
el.setAttribute(ks_35194,value);
} else {
(el[ks_35194] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34686){
var map__34687 = p__34686;
var map__34687__$1 = cljs.core.__destructure_map(map__34687);
var props = map__34687__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34687__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34689 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34689,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34689,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34689,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34695 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34695,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34695;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34703 = arguments.length;
switch (G__34703) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34716){
var vec__34718 = p__34716;
var seq__34719 = cljs.core.seq(vec__34718);
var first__34720 = cljs.core.first(seq__34719);
var seq__34719__$1 = cljs.core.next(seq__34719);
var nn = first__34720;
var first__34720__$1 = cljs.core.first(seq__34719__$1);
var seq__34719__$2 = cljs.core.next(seq__34719__$1);
var np = first__34720__$1;
var nc = seq__34719__$2;
var node = vec__34718;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34722 = nn;
var G__34723 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34722,G__34723) : create_fn.call(null,G__34722,G__34723));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34725 = nn;
var G__34726 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34725,G__34726) : create_fn.call(null,G__34725,G__34726));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34728 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34728,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34728,(1),null);
var seq__34734_35196 = cljs.core.seq(node_children);
var chunk__34735_35197 = null;
var count__34736_35198 = (0);
var i__34737_35199 = (0);
while(true){
if((i__34737_35199 < count__34736_35198)){
var child_struct_35200 = chunk__34735_35197.cljs$core$IIndexed$_nth$arity$2(null,i__34737_35199);
var children_35201 = shadow.dom.dom_node(child_struct_35200);
if(cljs.core.seq_QMARK_(children_35201)){
var seq__34758_35202 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35201));
var chunk__34760_35203 = null;
var count__34761_35204 = (0);
var i__34762_35205 = (0);
while(true){
if((i__34762_35205 < count__34761_35204)){
var child_35206 = chunk__34760_35203.cljs$core$IIndexed$_nth$arity$2(null,i__34762_35205);
if(cljs.core.truth_(child_35206)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35206);


var G__35207 = seq__34758_35202;
var G__35208 = chunk__34760_35203;
var G__35209 = count__34761_35204;
var G__35210 = (i__34762_35205 + (1));
seq__34758_35202 = G__35207;
chunk__34760_35203 = G__35208;
count__34761_35204 = G__35209;
i__34762_35205 = G__35210;
continue;
} else {
var G__35211 = seq__34758_35202;
var G__35212 = chunk__34760_35203;
var G__35213 = count__34761_35204;
var G__35214 = (i__34762_35205 + (1));
seq__34758_35202 = G__35211;
chunk__34760_35203 = G__35212;
count__34761_35204 = G__35213;
i__34762_35205 = G__35214;
continue;
}
} else {
var temp__5753__auto___35215 = cljs.core.seq(seq__34758_35202);
if(temp__5753__auto___35215){
var seq__34758_35216__$1 = temp__5753__auto___35215;
if(cljs.core.chunked_seq_QMARK_(seq__34758_35216__$1)){
var c__4638__auto___35217 = cljs.core.chunk_first(seq__34758_35216__$1);
var G__35218 = cljs.core.chunk_rest(seq__34758_35216__$1);
var G__35219 = c__4638__auto___35217;
var G__35220 = cljs.core.count(c__4638__auto___35217);
var G__35221 = (0);
seq__34758_35202 = G__35218;
chunk__34760_35203 = G__35219;
count__34761_35204 = G__35220;
i__34762_35205 = G__35221;
continue;
} else {
var child_35222 = cljs.core.first(seq__34758_35216__$1);
if(cljs.core.truth_(child_35222)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35222);


var G__35223 = cljs.core.next(seq__34758_35216__$1);
var G__35224 = null;
var G__35225 = (0);
var G__35226 = (0);
seq__34758_35202 = G__35223;
chunk__34760_35203 = G__35224;
count__34761_35204 = G__35225;
i__34762_35205 = G__35226;
continue;
} else {
var G__35227 = cljs.core.next(seq__34758_35216__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__34758_35202 = G__35227;
chunk__34760_35203 = G__35228;
count__34761_35204 = G__35229;
i__34762_35205 = G__35230;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35201);
}


var G__35231 = seq__34734_35196;
var G__35232 = chunk__34735_35197;
var G__35233 = count__34736_35198;
var G__35234 = (i__34737_35199 + (1));
seq__34734_35196 = G__35231;
chunk__34735_35197 = G__35232;
count__34736_35198 = G__35233;
i__34737_35199 = G__35234;
continue;
} else {
var temp__5753__auto___35235 = cljs.core.seq(seq__34734_35196);
if(temp__5753__auto___35235){
var seq__34734_35236__$1 = temp__5753__auto___35235;
if(cljs.core.chunked_seq_QMARK_(seq__34734_35236__$1)){
var c__4638__auto___35237 = cljs.core.chunk_first(seq__34734_35236__$1);
var G__35238 = cljs.core.chunk_rest(seq__34734_35236__$1);
var G__35239 = c__4638__auto___35237;
var G__35240 = cljs.core.count(c__4638__auto___35237);
var G__35241 = (0);
seq__34734_35196 = G__35238;
chunk__34735_35197 = G__35239;
count__34736_35198 = G__35240;
i__34737_35199 = G__35241;
continue;
} else {
var child_struct_35242 = cljs.core.first(seq__34734_35236__$1);
var children_35243 = shadow.dom.dom_node(child_struct_35242);
if(cljs.core.seq_QMARK_(children_35243)){
var seq__34777_35244 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35243));
var chunk__34779_35245 = null;
var count__34780_35246 = (0);
var i__34781_35247 = (0);
while(true){
if((i__34781_35247 < count__34780_35246)){
var child_35248 = chunk__34779_35245.cljs$core$IIndexed$_nth$arity$2(null,i__34781_35247);
if(cljs.core.truth_(child_35248)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35248);


var G__35249 = seq__34777_35244;
var G__35250 = chunk__34779_35245;
var G__35251 = count__34780_35246;
var G__35252 = (i__34781_35247 + (1));
seq__34777_35244 = G__35249;
chunk__34779_35245 = G__35250;
count__34780_35246 = G__35251;
i__34781_35247 = G__35252;
continue;
} else {
var G__35253 = seq__34777_35244;
var G__35254 = chunk__34779_35245;
var G__35255 = count__34780_35246;
var G__35256 = (i__34781_35247 + (1));
seq__34777_35244 = G__35253;
chunk__34779_35245 = G__35254;
count__34780_35246 = G__35255;
i__34781_35247 = G__35256;
continue;
}
} else {
var temp__5753__auto___35257__$1 = cljs.core.seq(seq__34777_35244);
if(temp__5753__auto___35257__$1){
var seq__34777_35258__$1 = temp__5753__auto___35257__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34777_35258__$1)){
var c__4638__auto___35259 = cljs.core.chunk_first(seq__34777_35258__$1);
var G__35260 = cljs.core.chunk_rest(seq__34777_35258__$1);
var G__35261 = c__4638__auto___35259;
var G__35262 = cljs.core.count(c__4638__auto___35259);
var G__35263 = (0);
seq__34777_35244 = G__35260;
chunk__34779_35245 = G__35261;
count__34780_35246 = G__35262;
i__34781_35247 = G__35263;
continue;
} else {
var child_35264 = cljs.core.first(seq__34777_35258__$1);
if(cljs.core.truth_(child_35264)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35264);


var G__35265 = cljs.core.next(seq__34777_35258__$1);
var G__35266 = null;
var G__35267 = (0);
var G__35268 = (0);
seq__34777_35244 = G__35265;
chunk__34779_35245 = G__35266;
count__34780_35246 = G__35267;
i__34781_35247 = G__35268;
continue;
} else {
var G__35269 = cljs.core.next(seq__34777_35258__$1);
var G__35270 = null;
var G__35271 = (0);
var G__35272 = (0);
seq__34777_35244 = G__35269;
chunk__34779_35245 = G__35270;
count__34780_35246 = G__35271;
i__34781_35247 = G__35272;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35243);
}


var G__35273 = cljs.core.next(seq__34734_35236__$1);
var G__35274 = null;
var G__35275 = (0);
var G__35276 = (0);
seq__34734_35196 = G__35273;
chunk__34735_35197 = G__35274;
count__34736_35198 = G__35275;
i__34737_35199 = G__35276;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34806 = cljs.core.seq(node);
var chunk__34807 = null;
var count__34808 = (0);
var i__34809 = (0);
while(true){
if((i__34809 < count__34808)){
var n = chunk__34807.cljs$core$IIndexed$_nth$arity$2(null,i__34809);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35277 = seq__34806;
var G__35278 = chunk__34807;
var G__35279 = count__34808;
var G__35280 = (i__34809 + (1));
seq__34806 = G__35277;
chunk__34807 = G__35278;
count__34808 = G__35279;
i__34809 = G__35280;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34806);
if(temp__5753__auto__){
var seq__34806__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34806__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34806__$1);
var G__35281 = cljs.core.chunk_rest(seq__34806__$1);
var G__35282 = c__4638__auto__;
var G__35283 = cljs.core.count(c__4638__auto__);
var G__35284 = (0);
seq__34806 = G__35281;
chunk__34807 = G__35282;
count__34808 = G__35283;
i__34809 = G__35284;
continue;
} else {
var n = cljs.core.first(seq__34806__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35285 = cljs.core.next(seq__34806__$1);
var G__35286 = null;
var G__35287 = (0);
var G__35288 = (0);
seq__34806 = G__35285;
chunk__34807 = G__35286;
count__34808 = G__35287;
i__34809 = G__35288;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34827 = arguments.length;
switch (G__34827) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34834 = arguments.length;
switch (G__34834) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34848 = arguments.length;
switch (G__34848) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35293 = arguments.length;
var i__4819__auto___35294 = (0);
while(true){
if((i__4819__auto___35294 < len__4818__auto___35293)){
args__4824__auto__.push((arguments[i__4819__auto___35294]));

var G__35295 = (i__4819__auto___35294 + (1));
i__4819__auto___35294 = G__35295;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34869_35297 = cljs.core.seq(nodes);
var chunk__34870_35298 = null;
var count__34871_35299 = (0);
var i__34872_35300 = (0);
while(true){
if((i__34872_35300 < count__34871_35299)){
var node_35301 = chunk__34870_35298.cljs$core$IIndexed$_nth$arity$2(null,i__34872_35300);
fragment.appendChild(shadow.dom._to_dom(node_35301));


var G__35302 = seq__34869_35297;
var G__35303 = chunk__34870_35298;
var G__35304 = count__34871_35299;
var G__35305 = (i__34872_35300 + (1));
seq__34869_35297 = G__35302;
chunk__34870_35298 = G__35303;
count__34871_35299 = G__35304;
i__34872_35300 = G__35305;
continue;
} else {
var temp__5753__auto___35306 = cljs.core.seq(seq__34869_35297);
if(temp__5753__auto___35306){
var seq__34869_35307__$1 = temp__5753__auto___35306;
if(cljs.core.chunked_seq_QMARK_(seq__34869_35307__$1)){
var c__4638__auto___35308 = cljs.core.chunk_first(seq__34869_35307__$1);
var G__35309 = cljs.core.chunk_rest(seq__34869_35307__$1);
var G__35310 = c__4638__auto___35308;
var G__35311 = cljs.core.count(c__4638__auto___35308);
var G__35312 = (0);
seq__34869_35297 = G__35309;
chunk__34870_35298 = G__35310;
count__34871_35299 = G__35311;
i__34872_35300 = G__35312;
continue;
} else {
var node_35313 = cljs.core.first(seq__34869_35307__$1);
fragment.appendChild(shadow.dom._to_dom(node_35313));


var G__35314 = cljs.core.next(seq__34869_35307__$1);
var G__35315 = null;
var G__35316 = (0);
var G__35317 = (0);
seq__34869_35297 = G__35314;
chunk__34870_35298 = G__35315;
count__34871_35299 = G__35316;
i__34872_35300 = G__35317;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34865){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34865));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34883_35318 = cljs.core.seq(scripts);
var chunk__34884_35319 = null;
var count__34885_35320 = (0);
var i__34886_35321 = (0);
while(true){
if((i__34886_35321 < count__34885_35320)){
var vec__34899_35322 = chunk__34884_35319.cljs$core$IIndexed$_nth$arity$2(null,i__34886_35321);
var script_tag_35323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899_35322,(0),null);
var script_body_35324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899_35322,(1),null);
eval(script_body_35324);


var G__35325 = seq__34883_35318;
var G__35326 = chunk__34884_35319;
var G__35327 = count__34885_35320;
var G__35328 = (i__34886_35321 + (1));
seq__34883_35318 = G__35325;
chunk__34884_35319 = G__35326;
count__34885_35320 = G__35327;
i__34886_35321 = G__35328;
continue;
} else {
var temp__5753__auto___35329 = cljs.core.seq(seq__34883_35318);
if(temp__5753__auto___35329){
var seq__34883_35330__$1 = temp__5753__auto___35329;
if(cljs.core.chunked_seq_QMARK_(seq__34883_35330__$1)){
var c__4638__auto___35331 = cljs.core.chunk_first(seq__34883_35330__$1);
var G__35332 = cljs.core.chunk_rest(seq__34883_35330__$1);
var G__35333 = c__4638__auto___35331;
var G__35334 = cljs.core.count(c__4638__auto___35331);
var G__35335 = (0);
seq__34883_35318 = G__35332;
chunk__34884_35319 = G__35333;
count__34885_35320 = G__35334;
i__34886_35321 = G__35335;
continue;
} else {
var vec__34905_35336 = cljs.core.first(seq__34883_35330__$1);
var script_tag_35337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905_35336,(0),null);
var script_body_35338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905_35336,(1),null);
eval(script_body_35338);


var G__35339 = cljs.core.next(seq__34883_35330__$1);
var G__35340 = null;
var G__35341 = (0);
var G__35342 = (0);
seq__34883_35318 = G__35339;
chunk__34884_35319 = G__35340;
count__34885_35320 = G__35341;
i__34886_35321 = G__35342;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34910){
var vec__34911 = p__34910;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34911,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34911,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34928 = arguments.length;
switch (G__34928) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34929 = cljs.core.seq(style_keys);
var chunk__34930 = null;
var count__34931 = (0);
var i__34932 = (0);
while(true){
if((i__34932 < count__34931)){
var it = chunk__34930.cljs$core$IIndexed$_nth$arity$2(null,i__34932);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35344 = seq__34929;
var G__35345 = chunk__34930;
var G__35346 = count__34931;
var G__35347 = (i__34932 + (1));
seq__34929 = G__35344;
chunk__34930 = G__35345;
count__34931 = G__35346;
i__34932 = G__35347;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34929);
if(temp__5753__auto__){
var seq__34929__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34929__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34929__$1);
var G__35348 = cljs.core.chunk_rest(seq__34929__$1);
var G__35349 = c__4638__auto__;
var G__35350 = cljs.core.count(c__4638__auto__);
var G__35351 = (0);
seq__34929 = G__35348;
chunk__34930 = G__35349;
count__34931 = G__35350;
i__34932 = G__35351;
continue;
} else {
var it = cljs.core.first(seq__34929__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35352 = cljs.core.next(seq__34929__$1);
var G__35353 = null;
var G__35354 = (0);
var G__35355 = (0);
seq__34929 = G__35352;
chunk__34930 = G__35353;
count__34931 = G__35354;
i__34932 = G__35355;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k34934,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__34938 = k34934;
var G__34938__$1 = (((G__34938 instanceof cljs.core.Keyword))?G__34938.fqn:null);
switch (G__34938__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34934,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__34939){
var vec__34940 = p__34939;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34940,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34940,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34933){
var self__ = this;
var G__34933__$1 = this;
return (new cljs.core.RecordIter((0),G__34933__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34935,other34936){
var self__ = this;
var this34935__$1 = this;
return (((!((other34936 == null)))) && ((((this34935__$1.constructor === other34936.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34935__$1.x,other34936.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34935__$1.y,other34936.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34935__$1.__extmap,other34936.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k34934){
var self__ = this;
var this__4468__auto____$1 = this;
var G__34966 = k34934;
var G__34966__$1 = (((G__34966 instanceof cljs.core.Keyword))?G__34966.fqn:null);
switch (G__34966__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34934);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__34933){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__34970 = cljs.core.keyword_identical_QMARK_;
var expr__34971 = k__4470__auto__;
if(cljs.core.truth_((pred__34970.cljs$core$IFn$_invoke$arity$2 ? pred__34970.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34971) : pred__34970.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34971)))){
return (new shadow.dom.Coordinate(G__34933,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34970.cljs$core$IFn$_invoke$arity$2 ? pred__34970.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34971) : pred__34970.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34971)))){
return (new shadow.dom.Coordinate(self__.x,G__34933,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__34933),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__34933){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34933,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34937){
var extmap__4501__auto__ = (function (){var G__34990 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34937,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34937)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34990);
} else {
return G__34990;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34937),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34937),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35001,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35012 = k35001;
var G__35012__$1 = (((G__35012 instanceof cljs.core.Keyword))?G__35012.fqn:null);
switch (G__35012__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35001,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35015){
var vec__35017 = p__35015;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35000){
var self__ = this;
var G__35000__$1 = this;
return (new cljs.core.RecordIter((0),G__35000__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35002,other35003){
var self__ = this;
var this35002__$1 = this;
return (((!((other35003 == null)))) && ((((this35002__$1.constructor === other35003.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35002__$1.w,other35003.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35002__$1.h,other35003.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35002__$1.__extmap,other35003.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35001){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35041 = k35001;
var G__35041__$1 = (((G__35041 instanceof cljs.core.Keyword))?G__35041.fqn:null);
switch (G__35041__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35001);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35000){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35045 = cljs.core.keyword_identical_QMARK_;
var expr__35046 = k__4470__auto__;
if(cljs.core.truth_((pred__35045.cljs$core$IFn$_invoke$arity$2 ? pred__35045.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35046) : pred__35045.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35046)))){
return (new shadow.dom.Size(G__35000,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35045.cljs$core$IFn$_invoke$arity$2 ? pred__35045.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35046) : pred__35045.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35046)))){
return (new shadow.dom.Size(self__.w,G__35000,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35000),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35000){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35000,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35005){
var extmap__4501__auto__ = (function (){var G__35061 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35005,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35005)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35061);
} else {
return G__35061;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35005),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35005),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__35366 = (i + (1));
var G__35367 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35366;
ret = G__35367;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35069){
var vec__35070 = p__35069;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35074 = arguments.length;
switch (G__35074) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35370 = ps;
var G__35371 = (i + (1));
el__$1 = G__35370;
i = G__35371;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35075 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35075,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35075,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35075,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35078_35376 = cljs.core.seq(props);
var chunk__35079_35377 = null;
var count__35080_35378 = (0);
var i__35081_35379 = (0);
while(true){
if((i__35081_35379 < count__35080_35378)){
var vec__35088_35381 = chunk__35079_35377.cljs$core$IIndexed$_nth$arity$2(null,i__35081_35379);
var k_35382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35088_35381,(0),null);
var v_35383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35088_35381,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_35382);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35382),v_35383);


var G__35384 = seq__35078_35376;
var G__35385 = chunk__35079_35377;
var G__35386 = count__35080_35378;
var G__35387 = (i__35081_35379 + (1));
seq__35078_35376 = G__35384;
chunk__35079_35377 = G__35385;
count__35080_35378 = G__35386;
i__35081_35379 = G__35387;
continue;
} else {
var temp__5753__auto___35388 = cljs.core.seq(seq__35078_35376);
if(temp__5753__auto___35388){
var seq__35078_35389__$1 = temp__5753__auto___35388;
if(cljs.core.chunked_seq_QMARK_(seq__35078_35389__$1)){
var c__4638__auto___35390 = cljs.core.chunk_first(seq__35078_35389__$1);
var G__35391 = cljs.core.chunk_rest(seq__35078_35389__$1);
var G__35392 = c__4638__auto___35390;
var G__35393 = cljs.core.count(c__4638__auto___35390);
var G__35394 = (0);
seq__35078_35376 = G__35391;
chunk__35079_35377 = G__35392;
count__35080_35378 = G__35393;
i__35081_35379 = G__35394;
continue;
} else {
var vec__35091_35395 = cljs.core.first(seq__35078_35389__$1);
var k_35396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091_35395,(0),null);
var v_35397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091_35395,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_35396);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35396),v_35397);


var G__35398 = cljs.core.next(seq__35078_35389__$1);
var G__35399 = null;
var G__35400 = (0);
var G__35401 = (0);
seq__35078_35376 = G__35398;
chunk__35079_35377 = G__35399;
count__35080_35378 = G__35400;
i__35081_35379 = G__35401;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35095 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095,(1),null);
var seq__35098_35402 = cljs.core.seq(node_children);
var chunk__35100_35403 = null;
var count__35101_35404 = (0);
var i__35102_35405 = (0);
while(true){
if((i__35102_35405 < count__35101_35404)){
var child_struct_35406 = chunk__35100_35403.cljs$core$IIndexed$_nth$arity$2(null,i__35102_35405);
if((!((child_struct_35406 == null)))){
if(typeof child_struct_35406 === 'string'){
var text_35407 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35407),child_struct_35406].join(''));
} else {
var children_35408 = shadow.dom.svg_node(child_struct_35406);
if(cljs.core.seq_QMARK_(children_35408)){
var seq__35116_35409 = cljs.core.seq(children_35408);
var chunk__35118_35410 = null;
var count__35119_35411 = (0);
var i__35120_35412 = (0);
while(true){
if((i__35120_35412 < count__35119_35411)){
var child_35413 = chunk__35118_35410.cljs$core$IIndexed$_nth$arity$2(null,i__35120_35412);
if(cljs.core.truth_(child_35413)){
node.appendChild(child_35413);


var G__35414 = seq__35116_35409;
var G__35415 = chunk__35118_35410;
var G__35416 = count__35119_35411;
var G__35417 = (i__35120_35412 + (1));
seq__35116_35409 = G__35414;
chunk__35118_35410 = G__35415;
count__35119_35411 = G__35416;
i__35120_35412 = G__35417;
continue;
} else {
var G__35418 = seq__35116_35409;
var G__35419 = chunk__35118_35410;
var G__35420 = count__35119_35411;
var G__35421 = (i__35120_35412 + (1));
seq__35116_35409 = G__35418;
chunk__35118_35410 = G__35419;
count__35119_35411 = G__35420;
i__35120_35412 = G__35421;
continue;
}
} else {
var temp__5753__auto___35422 = cljs.core.seq(seq__35116_35409);
if(temp__5753__auto___35422){
var seq__35116_35423__$1 = temp__5753__auto___35422;
if(cljs.core.chunked_seq_QMARK_(seq__35116_35423__$1)){
var c__4638__auto___35424 = cljs.core.chunk_first(seq__35116_35423__$1);
var G__35425 = cljs.core.chunk_rest(seq__35116_35423__$1);
var G__35426 = c__4638__auto___35424;
var G__35427 = cljs.core.count(c__4638__auto___35424);
var G__35428 = (0);
seq__35116_35409 = G__35425;
chunk__35118_35410 = G__35426;
count__35119_35411 = G__35427;
i__35120_35412 = G__35428;
continue;
} else {
var child_35429 = cljs.core.first(seq__35116_35423__$1);
if(cljs.core.truth_(child_35429)){
node.appendChild(child_35429);


var G__35430 = cljs.core.next(seq__35116_35423__$1);
var G__35431 = null;
var G__35432 = (0);
var G__35433 = (0);
seq__35116_35409 = G__35430;
chunk__35118_35410 = G__35431;
count__35119_35411 = G__35432;
i__35120_35412 = G__35433;
continue;
} else {
var G__35434 = cljs.core.next(seq__35116_35423__$1);
var G__35435 = null;
var G__35436 = (0);
var G__35437 = (0);
seq__35116_35409 = G__35434;
chunk__35118_35410 = G__35435;
count__35119_35411 = G__35436;
i__35120_35412 = G__35437;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35408);
}
}


var G__35438 = seq__35098_35402;
var G__35439 = chunk__35100_35403;
var G__35440 = count__35101_35404;
var G__35441 = (i__35102_35405 + (1));
seq__35098_35402 = G__35438;
chunk__35100_35403 = G__35439;
count__35101_35404 = G__35440;
i__35102_35405 = G__35441;
continue;
} else {
var G__35442 = seq__35098_35402;
var G__35443 = chunk__35100_35403;
var G__35444 = count__35101_35404;
var G__35445 = (i__35102_35405 + (1));
seq__35098_35402 = G__35442;
chunk__35100_35403 = G__35443;
count__35101_35404 = G__35444;
i__35102_35405 = G__35445;
continue;
}
} else {
var temp__5753__auto___35446 = cljs.core.seq(seq__35098_35402);
if(temp__5753__auto___35446){
var seq__35098_35447__$1 = temp__5753__auto___35446;
if(cljs.core.chunked_seq_QMARK_(seq__35098_35447__$1)){
var c__4638__auto___35448 = cljs.core.chunk_first(seq__35098_35447__$1);
var G__35449 = cljs.core.chunk_rest(seq__35098_35447__$1);
var G__35450 = c__4638__auto___35448;
var G__35451 = cljs.core.count(c__4638__auto___35448);
var G__35452 = (0);
seq__35098_35402 = G__35449;
chunk__35100_35403 = G__35450;
count__35101_35404 = G__35451;
i__35102_35405 = G__35452;
continue;
} else {
var child_struct_35453 = cljs.core.first(seq__35098_35447__$1);
if((!((child_struct_35453 == null)))){
if(typeof child_struct_35453 === 'string'){
var text_35454 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35454),child_struct_35453].join(''));
} else {
var children_35455 = shadow.dom.svg_node(child_struct_35453);
if(cljs.core.seq_QMARK_(children_35455)){
var seq__35122_35456 = cljs.core.seq(children_35455);
var chunk__35124_35457 = null;
var count__35125_35458 = (0);
var i__35126_35459 = (0);
while(true){
if((i__35126_35459 < count__35125_35458)){
var child_35460 = chunk__35124_35457.cljs$core$IIndexed$_nth$arity$2(null,i__35126_35459);
if(cljs.core.truth_(child_35460)){
node.appendChild(child_35460);


var G__35461 = seq__35122_35456;
var G__35462 = chunk__35124_35457;
var G__35463 = count__35125_35458;
var G__35464 = (i__35126_35459 + (1));
seq__35122_35456 = G__35461;
chunk__35124_35457 = G__35462;
count__35125_35458 = G__35463;
i__35126_35459 = G__35464;
continue;
} else {
var G__35465 = seq__35122_35456;
var G__35466 = chunk__35124_35457;
var G__35467 = count__35125_35458;
var G__35468 = (i__35126_35459 + (1));
seq__35122_35456 = G__35465;
chunk__35124_35457 = G__35466;
count__35125_35458 = G__35467;
i__35126_35459 = G__35468;
continue;
}
} else {
var temp__5753__auto___35469__$1 = cljs.core.seq(seq__35122_35456);
if(temp__5753__auto___35469__$1){
var seq__35122_35470__$1 = temp__5753__auto___35469__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35122_35470__$1)){
var c__4638__auto___35471 = cljs.core.chunk_first(seq__35122_35470__$1);
var G__35472 = cljs.core.chunk_rest(seq__35122_35470__$1);
var G__35473 = c__4638__auto___35471;
var G__35474 = cljs.core.count(c__4638__auto___35471);
var G__35475 = (0);
seq__35122_35456 = G__35472;
chunk__35124_35457 = G__35473;
count__35125_35458 = G__35474;
i__35126_35459 = G__35475;
continue;
} else {
var child_35476 = cljs.core.first(seq__35122_35470__$1);
if(cljs.core.truth_(child_35476)){
node.appendChild(child_35476);


var G__35477 = cljs.core.next(seq__35122_35470__$1);
var G__35478 = null;
var G__35479 = (0);
var G__35480 = (0);
seq__35122_35456 = G__35477;
chunk__35124_35457 = G__35478;
count__35125_35458 = G__35479;
i__35126_35459 = G__35480;
continue;
} else {
var G__35481 = cljs.core.next(seq__35122_35470__$1);
var G__35482 = null;
var G__35483 = (0);
var G__35484 = (0);
seq__35122_35456 = G__35481;
chunk__35124_35457 = G__35482;
count__35125_35458 = G__35483;
i__35126_35459 = G__35484;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35455);
}
}


var G__35485 = cljs.core.next(seq__35098_35447__$1);
var G__35486 = null;
var G__35487 = (0);
var G__35488 = (0);
seq__35098_35402 = G__35485;
chunk__35100_35403 = G__35486;
count__35101_35404 = G__35487;
i__35102_35405 = G__35488;
continue;
} else {
var G__35489 = cljs.core.next(seq__35098_35447__$1);
var G__35490 = null;
var G__35491 = (0);
var G__35492 = (0);
seq__35098_35402 = G__35489;
chunk__35100_35403 = G__35490;
count__35101_35404 = G__35491;
i__35102_35405 = G__35492;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35493 = arguments.length;
var i__4819__auto___35494 = (0);
while(true){
if((i__4819__auto___35494 < len__4818__auto___35493)){
args__4824__auto__.push((arguments[i__4819__auto___35494]));

var G__35495 = (i__4819__auto___35494 + (1));
i__4819__auto___35494 = G__35495;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35128){
var G__35129 = cljs.core.first(seq35128);
var seq35128__$1 = cljs.core.next(seq35128);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35129,seq35128__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35131 = arguments.length;
switch (G__35131) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__32919__auto___35497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_35136){
var state_val_35137 = (state_35136[(1)]);
if((state_val_35137 === (1))){
var state_35136__$1 = state_35136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35136__$1,(2),once_or_cleanup);
} else {
if((state_val_35137 === (2))){
var inst_35133 = (state_35136[(2)]);
var inst_35134 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35136__$1 = (function (){var statearr_35138 = state_35136;
(statearr_35138[(7)] = inst_35133);

return statearr_35138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35136__$1,inst_35134);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32837__auto__ = null;
var shadow$dom$state_machine__32837__auto____0 = (function (){
var statearr_35139 = [null,null,null,null,null,null,null,null];
(statearr_35139[(0)] = shadow$dom$state_machine__32837__auto__);

(statearr_35139[(1)] = (1));

return statearr_35139;
});
var shadow$dom$state_machine__32837__auto____1 = (function (state_35136){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_35136);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e35140){var ex__32840__auto__ = e35140;
var statearr_35141_35501 = state_35136;
(statearr_35141_35501[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_35136[(4)]))){
var statearr_35142_35502 = state_35136;
(statearr_35142_35502[(1)] = cljs.core.first((state_35136[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35503 = state_35136;
state_35136 = G__35503;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
shadow$dom$state_machine__32837__auto__ = function(state_35136){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32837__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32837__auto____1.call(this,state_35136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32837__auto____0;
shadow$dom$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32837__auto____1;
return shadow$dom$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_35143 = f__32920__auto__();
(statearr_35143[(6)] = c__32919__auto___35497);

return statearr_35143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
