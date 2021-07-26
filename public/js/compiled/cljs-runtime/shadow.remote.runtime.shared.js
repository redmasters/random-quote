goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__35656,res){
var map__35657 = p__35656;
var map__35657__$1 = cljs.core.__destructure_map(map__35657);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35657__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35657__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__35658 = res;
var G__35658__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35658,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__35658);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35658__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__35658__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__35664 = arguments.length;
switch (G__35664) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__35665,msg,handlers,timeout_after_ms){
var map__35666 = p__35665;
var map__35666__$1 = cljs.core.__destructure_map(map__35666);
var runtime = map__35666__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35666__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35825 = arguments.length;
var i__4819__auto___35826 = (0);
while(true){
if((i__4819__auto___35826 < len__4818__auto___35825)){
args__4824__auto__.push((arguments[i__4819__auto___35826]));

var G__35827 = (i__4819__auto___35826 + (1));
i__4819__auto___35826 = G__35827;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__35675,ev,args){
var map__35676 = p__35675;
var map__35676__$1 = cljs.core.__destructure_map(map__35676);
var runtime = map__35676__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35676__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__35678 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35685 = null;
var count__35686 = (0);
var i__35687 = (0);
while(true){
if((i__35687 < count__35686)){
var ext = chunk__35685.cljs$core$IIndexed$_nth$arity$2(null,i__35687);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35828 = seq__35678;
var G__35829 = chunk__35685;
var G__35830 = count__35686;
var G__35831 = (i__35687 + (1));
seq__35678 = G__35828;
chunk__35685 = G__35829;
count__35686 = G__35830;
i__35687 = G__35831;
continue;
} else {
var G__35832 = seq__35678;
var G__35833 = chunk__35685;
var G__35834 = count__35686;
var G__35835 = (i__35687 + (1));
seq__35678 = G__35832;
chunk__35685 = G__35833;
count__35686 = G__35834;
i__35687 = G__35835;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35678);
if(temp__5753__auto__){
var seq__35678__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35678__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35678__$1);
var G__35836 = cljs.core.chunk_rest(seq__35678__$1);
var G__35837 = c__4638__auto__;
var G__35838 = cljs.core.count(c__4638__auto__);
var G__35839 = (0);
seq__35678 = G__35836;
chunk__35685 = G__35837;
count__35686 = G__35838;
i__35687 = G__35839;
continue;
} else {
var ext = cljs.core.first(seq__35678__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35840 = cljs.core.next(seq__35678__$1);
var G__35841 = null;
var G__35842 = (0);
var G__35843 = (0);
seq__35678 = G__35840;
chunk__35685 = G__35841;
count__35686 = G__35842;
i__35687 = G__35843;
continue;
} else {
var G__35845 = cljs.core.next(seq__35678__$1);
var G__35846 = null;
var G__35847 = (0);
var G__35848 = (0);
seq__35678 = G__35845;
chunk__35685 = G__35846;
count__35686 = G__35847;
i__35687 = G__35848;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq35667){
var G__35669 = cljs.core.first(seq35667);
var seq35667__$1 = cljs.core.next(seq35667);
var G__35670 = cljs.core.first(seq35667__$1);
var seq35667__$2 = cljs.core.next(seq35667__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35669,G__35670,seq35667__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__35744,p__35745){
var map__35746 = p__35744;
var map__35746__$1 = cljs.core.__destructure_map(map__35746);
var runtime = map__35746__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35746__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35747 = p__35745;
var map__35747__$1 = cljs.core.__destructure_map(map__35747);
var msg = map__35747__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35747__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__35748 = cljs.core.deref(state_ref);
var map__35748__$1 = cljs.core.__destructure_map(map__35748);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35748__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35748__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__35750){
var map__35751 = p__35750;
var map__35751__$1 = cljs.core.__destructure_map(map__35751);
var runtime = map__35751__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35751__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__35752,msg){
var map__35753 = p__35752;
var map__35753__$1 = cljs.core.__destructure_map(map__35753);
var runtime = map__35753__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35753__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__35760,key,p__35761){
var map__35762 = p__35760;
var map__35762__$1 = cljs.core.__destructure_map(map__35762);
var state = map__35762__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35762__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__35763 = p__35761;
var map__35763__$1 = cljs.core.__destructure_map(map__35763);
var spec = map__35763__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35763__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__35764,key,spec){
var map__35765 = p__35764;
var map__35765__$1 = cljs.core.__destructure_map(map__35765);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35765__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__35766_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__35766_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__35767_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__35767_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__35768_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__35768_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__35769_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__35769_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__35770_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__35770_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__35774,key){
var map__35775 = p__35774;
var map__35775__$1 = cljs.core.__destructure_map(map__35775);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35775__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__35785,msg){
var map__35786 = p__35785;
var map__35786__$1 = cljs.core.__destructure_map(map__35786);
var runtime = map__35786__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35786__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__35790,p__35791){
var map__35792 = p__35790;
var map__35792__$1 = cljs.core.__destructure_map(map__35792);
var runtime = map__35792__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35792__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35793 = p__35791;
var map__35793__$1 = cljs.core.__destructure_map(map__35793);
var msg = map__35793__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35793__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35793__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__35794 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35796 = null;
var count__35797 = (0);
var i__35798 = (0);
while(true){
if((i__35798 < count__35797)){
var map__35810 = chunk__35796.cljs$core$IIndexed$_nth$arity$2(null,i__35798);
var map__35810__$1 = cljs.core.__destructure_map(map__35810);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35810__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35854 = seq__35794;
var G__35855 = chunk__35796;
var G__35856 = count__35797;
var G__35857 = (i__35798 + (1));
seq__35794 = G__35854;
chunk__35796 = G__35855;
count__35797 = G__35856;
i__35798 = G__35857;
continue;
} else {
var G__35858 = seq__35794;
var G__35859 = chunk__35796;
var G__35860 = count__35797;
var G__35861 = (i__35798 + (1));
seq__35794 = G__35858;
chunk__35796 = G__35859;
count__35797 = G__35860;
i__35798 = G__35861;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35794);
if(temp__5753__auto__){
var seq__35794__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35794__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35794__$1);
var G__35862 = cljs.core.chunk_rest(seq__35794__$1);
var G__35863 = c__4638__auto__;
var G__35864 = cljs.core.count(c__4638__auto__);
var G__35865 = (0);
seq__35794 = G__35862;
chunk__35796 = G__35863;
count__35797 = G__35864;
i__35798 = G__35865;
continue;
} else {
var map__35814 = cljs.core.first(seq__35794__$1);
var map__35814__$1 = cljs.core.__destructure_map(map__35814);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35814__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__35866 = cljs.core.next(seq__35794__$1);
var G__35867 = null;
var G__35868 = (0);
var G__35869 = (0);
seq__35794 = G__35866;
chunk__35796 = G__35867;
count__35797 = G__35868;
i__35798 = G__35869;
continue;
} else {
var G__35870 = cljs.core.next(seq__35794__$1);
var G__35871 = null;
var G__35872 = (0);
var G__35873 = (0);
seq__35794 = G__35870;
chunk__35796 = G__35871;
count__35797 = G__35872;
i__35798 = G__35873;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
