goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38006 = arguments.length;
var i__4819__auto___38007 = (0);
while(true){
if((i__4819__auto___38007 < len__4818__auto___38006)){
args__4824__auto__.push((arguments[i__4819__auto___38007]));

var G__38008 = (i__4819__auto___38007 + (1));
i__4819__auto___38007 = G__38008;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37832){
var G__37833 = cljs.core.first(seq37832);
var seq37832__$1 = cljs.core.next(seq37832);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37833,seq37832__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37834 = cljs.core.seq(sources);
var chunk__37835 = null;
var count__37836 = (0);
var i__37837 = (0);
while(true){
if((i__37837 < count__37836)){
var map__37885 = chunk__37835.cljs$core$IIndexed$_nth$arity$2(null,i__37837);
var map__37885__$1 = cljs.core.__destructure_map(map__37885);
var src = map__37885__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37885__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37885__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37885__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37885__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37886){var e_38013 = e37886;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38013);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38013.message)].join('')));
}

var G__38014 = seq__37834;
var G__38015 = chunk__37835;
var G__38016 = count__37836;
var G__38017 = (i__37837 + (1));
seq__37834 = G__38014;
chunk__37835 = G__38015;
count__37836 = G__38016;
i__37837 = G__38017;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37834);
if(temp__5753__auto__){
var seq__37834__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37834__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37834__$1);
var G__38018 = cljs.core.chunk_rest(seq__37834__$1);
var G__38019 = c__4638__auto__;
var G__38020 = cljs.core.count(c__4638__auto__);
var G__38021 = (0);
seq__37834 = G__38018;
chunk__37835 = G__38019;
count__37836 = G__38020;
i__37837 = G__38021;
continue;
} else {
var map__37887 = cljs.core.first(seq__37834__$1);
var map__37887__$1 = cljs.core.__destructure_map(map__37887);
var src = map__37887__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37887__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37887__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37887__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37887__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37888){var e_38026 = e37888;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38026);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38026.message)].join('')));
}

var G__38027 = cljs.core.next(seq__37834__$1);
var G__38028 = null;
var G__38029 = (0);
var G__38030 = (0);
seq__37834 = G__38027;
chunk__37835 = G__38028;
count__37836 = G__38029;
i__37837 = G__38030;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37893 = cljs.core.seq(js_requires);
var chunk__37894 = null;
var count__37895 = (0);
var i__37896 = (0);
while(true){
if((i__37896 < count__37895)){
var js_ns = chunk__37894.cljs$core$IIndexed$_nth$arity$2(null,i__37896);
var require_str_38035 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38035);


var G__38036 = seq__37893;
var G__38037 = chunk__37894;
var G__38038 = count__37895;
var G__38039 = (i__37896 + (1));
seq__37893 = G__38036;
chunk__37894 = G__38037;
count__37895 = G__38038;
i__37896 = G__38039;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37893);
if(temp__5753__auto__){
var seq__37893__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37893__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37893__$1);
var G__38040 = cljs.core.chunk_rest(seq__37893__$1);
var G__38041 = c__4638__auto__;
var G__38042 = cljs.core.count(c__4638__auto__);
var G__38043 = (0);
seq__37893 = G__38040;
chunk__37894 = G__38041;
count__37895 = G__38042;
i__37896 = G__38043;
continue;
} else {
var js_ns = cljs.core.first(seq__37893__$1);
var require_str_38044 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38044);


var G__38045 = cljs.core.next(seq__37893__$1);
var G__38046 = null;
var G__38047 = (0);
var G__38048 = (0);
seq__37893 = G__38045;
chunk__37894 = G__38046;
count__37895 = G__38047;
i__37896 = G__38048;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37898){
var map__37899 = p__37898;
var map__37899__$1 = cljs.core.__destructure_map(map__37899);
var msg = map__37899__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37899__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37899__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37900(s__37901){
return (new cljs.core.LazySeq(null,(function (){
var s__37901__$1 = s__37901;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37901__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37906 = cljs.core.first(xs__6308__auto__);
var map__37906__$1 = cljs.core.__destructure_map(map__37906);
var src = map__37906__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37906__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37906__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__37901__$1,map__37906,map__37906__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37899,map__37899__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37900_$_iter__37902(s__37903){
return (new cljs.core.LazySeq(null,((function (s__37901__$1,map__37906,map__37906__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37899,map__37899__$1,msg,info,reload_info){
return (function (){
var s__37903__$1 = s__37903;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37903__$1);
if(temp__5753__auto____$1){
var s__37903__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37903__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__37903__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__37905 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__37904 = (0);
while(true){
if((i__37904 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__37904);
cljs.core.chunk_append(b__37905,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38053 = (i__37904 + (1));
i__37904 = G__38053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37905),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37900_$_iter__37902(cljs.core.chunk_rest(s__37903__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37905),null);
}
} else {
var warning = cljs.core.first(s__37903__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37900_$_iter__37902(cljs.core.rest(s__37903__$2)));
}
} else {
return null;
}
break;
}
});})(s__37901__$1,map__37906,map__37906__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37899,map__37899__$1,msg,info,reload_info))
,null,null));
});})(s__37901__$1,map__37906,map__37906__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37899,map__37899__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37900(cljs.core.rest(s__37901__$1)));
} else {
var G__38054 = cljs.core.rest(s__37901__$1);
s__37901__$1 = G__38054;
continue;
}
} else {
var G__38055 = cljs.core.rest(s__37901__$1);
s__37901__$1 = G__38055;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37907_38056 = cljs.core.seq(warnings);
var chunk__37908_38057 = null;
var count__37909_38058 = (0);
var i__37910_38059 = (0);
while(true){
if((i__37910_38059 < count__37909_38058)){
var map__37913_38060 = chunk__37908_38057.cljs$core$IIndexed$_nth$arity$2(null,i__37910_38059);
var map__37913_38061__$1 = cljs.core.__destructure_map(map__37913_38060);
var w_38062 = map__37913_38061__$1;
var msg_38063__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913_38061__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913_38061__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913_38061__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913_38061__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38066)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38064),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38065),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38063__$1)].join(''));


var G__38067 = seq__37907_38056;
var G__38068 = chunk__37908_38057;
var G__38069 = count__37909_38058;
var G__38070 = (i__37910_38059 + (1));
seq__37907_38056 = G__38067;
chunk__37908_38057 = G__38068;
count__37909_38058 = G__38069;
i__37910_38059 = G__38070;
continue;
} else {
var temp__5753__auto___38071 = cljs.core.seq(seq__37907_38056);
if(temp__5753__auto___38071){
var seq__37907_38072__$1 = temp__5753__auto___38071;
if(cljs.core.chunked_seq_QMARK_(seq__37907_38072__$1)){
var c__4638__auto___38073 = cljs.core.chunk_first(seq__37907_38072__$1);
var G__38074 = cljs.core.chunk_rest(seq__37907_38072__$1);
var G__38075 = c__4638__auto___38073;
var G__38076 = cljs.core.count(c__4638__auto___38073);
var G__38077 = (0);
seq__37907_38056 = G__38074;
chunk__37908_38057 = G__38075;
count__37909_38058 = G__38076;
i__37910_38059 = G__38077;
continue;
} else {
var map__37914_38078 = cljs.core.first(seq__37907_38072__$1);
var map__37914_38079__$1 = cljs.core.__destructure_map(map__37914_38078);
var w_38080 = map__37914_38079__$1;
var msg_38081__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37914_38079__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37914_38079__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37914_38079__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37914_38079__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38084)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38082),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38083),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38081__$1)].join(''));


var G__38085 = cljs.core.next(seq__37907_38072__$1);
var G__38086 = null;
var G__38087 = (0);
var G__38088 = (0);
seq__37907_38056 = G__38085;
chunk__37908_38057 = G__38086;
count__37909_38058 = G__38087;
i__37910_38059 = G__38088;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37897_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37897_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37915){
var map__37916 = p__37915;
var map__37916__$1 = cljs.core.__destructure_map(map__37916);
var msg = map__37916__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37916__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37917 = cljs.core.seq(updates);
var chunk__37919 = null;
var count__37920 = (0);
var i__37921 = (0);
while(true){
if((i__37921 < count__37920)){
var path = chunk__37919.cljs$core$IIndexed$_nth$arity$2(null,i__37921);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37951_38092 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37955_38093 = null;
var count__37956_38094 = (0);
var i__37957_38095 = (0);
while(true){
if((i__37957_38095 < count__37956_38094)){
var node_38100 = chunk__37955_38093.cljs$core$IIndexed$_nth$arity$2(null,i__37957_38095);
if(cljs.core.not(node_38100.shadow$old)){
var path_match_38101 = shadow.cljs.devtools.client.browser.match_paths(node_38100.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38101)){
var new_link_38102 = (function (){var G__37965 = node_38100.cloneNode(true);
G__37965.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38101),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37965;
})();
(node_38100.shadow$old = true);

(new_link_38102.onload = ((function (seq__37951_38092,chunk__37955_38093,count__37956_38094,i__37957_38095,seq__37917,chunk__37919,count__37920,i__37921,new_link_38102,path_match_38101,node_38100,path,map__37916,map__37916__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38100);
});})(seq__37951_38092,chunk__37955_38093,count__37956_38094,i__37957_38095,seq__37917,chunk__37919,count__37920,i__37921,new_link_38102,path_match_38101,node_38100,path,map__37916,map__37916__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38101], 0));

goog.dom.insertSiblingAfter(new_link_38102,node_38100);


var G__38103 = seq__37951_38092;
var G__38104 = chunk__37955_38093;
var G__38105 = count__37956_38094;
var G__38106 = (i__37957_38095 + (1));
seq__37951_38092 = G__38103;
chunk__37955_38093 = G__38104;
count__37956_38094 = G__38105;
i__37957_38095 = G__38106;
continue;
} else {
var G__38107 = seq__37951_38092;
var G__38108 = chunk__37955_38093;
var G__38109 = count__37956_38094;
var G__38110 = (i__37957_38095 + (1));
seq__37951_38092 = G__38107;
chunk__37955_38093 = G__38108;
count__37956_38094 = G__38109;
i__37957_38095 = G__38110;
continue;
}
} else {
var G__38111 = seq__37951_38092;
var G__38112 = chunk__37955_38093;
var G__38113 = count__37956_38094;
var G__38114 = (i__37957_38095 + (1));
seq__37951_38092 = G__38111;
chunk__37955_38093 = G__38112;
count__37956_38094 = G__38113;
i__37957_38095 = G__38114;
continue;
}
} else {
var temp__5753__auto___38115 = cljs.core.seq(seq__37951_38092);
if(temp__5753__auto___38115){
var seq__37951_38116__$1 = temp__5753__auto___38115;
if(cljs.core.chunked_seq_QMARK_(seq__37951_38116__$1)){
var c__4638__auto___38117 = cljs.core.chunk_first(seq__37951_38116__$1);
var G__38118 = cljs.core.chunk_rest(seq__37951_38116__$1);
var G__38119 = c__4638__auto___38117;
var G__38120 = cljs.core.count(c__4638__auto___38117);
var G__38121 = (0);
seq__37951_38092 = G__38118;
chunk__37955_38093 = G__38119;
count__37956_38094 = G__38120;
i__37957_38095 = G__38121;
continue;
} else {
var node_38122 = cljs.core.first(seq__37951_38116__$1);
if(cljs.core.not(node_38122.shadow$old)){
var path_match_38123 = shadow.cljs.devtools.client.browser.match_paths(node_38122.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38123)){
var new_link_38124 = (function (){var G__37966 = node_38122.cloneNode(true);
G__37966.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38123),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37966;
})();
(node_38122.shadow$old = true);

(new_link_38124.onload = ((function (seq__37951_38092,chunk__37955_38093,count__37956_38094,i__37957_38095,seq__37917,chunk__37919,count__37920,i__37921,new_link_38124,path_match_38123,node_38122,seq__37951_38116__$1,temp__5753__auto___38115,path,map__37916,map__37916__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38122);
});})(seq__37951_38092,chunk__37955_38093,count__37956_38094,i__37957_38095,seq__37917,chunk__37919,count__37920,i__37921,new_link_38124,path_match_38123,node_38122,seq__37951_38116__$1,temp__5753__auto___38115,path,map__37916,map__37916__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38123], 0));

goog.dom.insertSiblingAfter(new_link_38124,node_38122);


var G__38127 = cljs.core.next(seq__37951_38116__$1);
var G__38128 = null;
var G__38129 = (0);
var G__38130 = (0);
seq__37951_38092 = G__38127;
chunk__37955_38093 = G__38128;
count__37956_38094 = G__38129;
i__37957_38095 = G__38130;
continue;
} else {
var G__38131 = cljs.core.next(seq__37951_38116__$1);
var G__38132 = null;
var G__38133 = (0);
var G__38134 = (0);
seq__37951_38092 = G__38131;
chunk__37955_38093 = G__38132;
count__37956_38094 = G__38133;
i__37957_38095 = G__38134;
continue;
}
} else {
var G__38135 = cljs.core.next(seq__37951_38116__$1);
var G__38136 = null;
var G__38137 = (0);
var G__38138 = (0);
seq__37951_38092 = G__38135;
chunk__37955_38093 = G__38136;
count__37956_38094 = G__38137;
i__37957_38095 = G__38138;
continue;
}
}
} else {
}
}
break;
}


var G__38139 = seq__37917;
var G__38140 = chunk__37919;
var G__38141 = count__37920;
var G__38142 = (i__37921 + (1));
seq__37917 = G__38139;
chunk__37919 = G__38140;
count__37920 = G__38141;
i__37921 = G__38142;
continue;
} else {
var G__38143 = seq__37917;
var G__38144 = chunk__37919;
var G__38145 = count__37920;
var G__38146 = (i__37921 + (1));
seq__37917 = G__38143;
chunk__37919 = G__38144;
count__37920 = G__38145;
i__37921 = G__38146;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37917);
if(temp__5753__auto__){
var seq__37917__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37917__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37917__$1);
var G__38149 = cljs.core.chunk_rest(seq__37917__$1);
var G__38150 = c__4638__auto__;
var G__38151 = cljs.core.count(c__4638__auto__);
var G__38152 = (0);
seq__37917 = G__38149;
chunk__37919 = G__38150;
count__37920 = G__38151;
i__37921 = G__38152;
continue;
} else {
var path = cljs.core.first(seq__37917__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37967_38153 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37971_38154 = null;
var count__37972_38155 = (0);
var i__37973_38156 = (0);
while(true){
if((i__37973_38156 < count__37972_38155)){
var node_38159 = chunk__37971_38154.cljs$core$IIndexed$_nth$arity$2(null,i__37973_38156);
if(cljs.core.not(node_38159.shadow$old)){
var path_match_38161 = shadow.cljs.devtools.client.browser.match_paths(node_38159.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38161)){
var new_link_38162 = (function (){var G__37980 = node_38159.cloneNode(true);
G__37980.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38161),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37980;
})();
(node_38159.shadow$old = true);

(new_link_38162.onload = ((function (seq__37967_38153,chunk__37971_38154,count__37972_38155,i__37973_38156,seq__37917,chunk__37919,count__37920,i__37921,new_link_38162,path_match_38161,node_38159,path,seq__37917__$1,temp__5753__auto__,map__37916,map__37916__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38159);
});})(seq__37967_38153,chunk__37971_38154,count__37972_38155,i__37973_38156,seq__37917,chunk__37919,count__37920,i__37921,new_link_38162,path_match_38161,node_38159,path,seq__37917__$1,temp__5753__auto__,map__37916,map__37916__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38161], 0));

goog.dom.insertSiblingAfter(new_link_38162,node_38159);


var G__38163 = seq__37967_38153;
var G__38164 = chunk__37971_38154;
var G__38165 = count__37972_38155;
var G__38166 = (i__37973_38156 + (1));
seq__37967_38153 = G__38163;
chunk__37971_38154 = G__38164;
count__37972_38155 = G__38165;
i__37973_38156 = G__38166;
continue;
} else {
var G__38170 = seq__37967_38153;
var G__38171 = chunk__37971_38154;
var G__38172 = count__37972_38155;
var G__38173 = (i__37973_38156 + (1));
seq__37967_38153 = G__38170;
chunk__37971_38154 = G__38171;
count__37972_38155 = G__38172;
i__37973_38156 = G__38173;
continue;
}
} else {
var G__38174 = seq__37967_38153;
var G__38175 = chunk__37971_38154;
var G__38176 = count__37972_38155;
var G__38177 = (i__37973_38156 + (1));
seq__37967_38153 = G__38174;
chunk__37971_38154 = G__38175;
count__37972_38155 = G__38176;
i__37973_38156 = G__38177;
continue;
}
} else {
var temp__5753__auto___38178__$1 = cljs.core.seq(seq__37967_38153);
if(temp__5753__auto___38178__$1){
var seq__37967_38180__$1 = temp__5753__auto___38178__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37967_38180__$1)){
var c__4638__auto___38181 = cljs.core.chunk_first(seq__37967_38180__$1);
var G__38182 = cljs.core.chunk_rest(seq__37967_38180__$1);
var G__38183 = c__4638__auto___38181;
var G__38184 = cljs.core.count(c__4638__auto___38181);
var G__38185 = (0);
seq__37967_38153 = G__38182;
chunk__37971_38154 = G__38183;
count__37972_38155 = G__38184;
i__37973_38156 = G__38185;
continue;
} else {
var node_38187 = cljs.core.first(seq__37967_38180__$1);
if(cljs.core.not(node_38187.shadow$old)){
var path_match_38188 = shadow.cljs.devtools.client.browser.match_paths(node_38187.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38188)){
var new_link_38189 = (function (){var G__37982 = node_38187.cloneNode(true);
G__37982.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38188),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37982;
})();
(node_38187.shadow$old = true);

(new_link_38189.onload = ((function (seq__37967_38153,chunk__37971_38154,count__37972_38155,i__37973_38156,seq__37917,chunk__37919,count__37920,i__37921,new_link_38189,path_match_38188,node_38187,seq__37967_38180__$1,temp__5753__auto___38178__$1,path,seq__37917__$1,temp__5753__auto__,map__37916,map__37916__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38187);
});})(seq__37967_38153,chunk__37971_38154,count__37972_38155,i__37973_38156,seq__37917,chunk__37919,count__37920,i__37921,new_link_38189,path_match_38188,node_38187,seq__37967_38180__$1,temp__5753__auto___38178__$1,path,seq__37917__$1,temp__5753__auto__,map__37916,map__37916__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38188], 0));

goog.dom.insertSiblingAfter(new_link_38189,node_38187);


var G__38190 = cljs.core.next(seq__37967_38180__$1);
var G__38191 = null;
var G__38192 = (0);
var G__38193 = (0);
seq__37967_38153 = G__38190;
chunk__37971_38154 = G__38191;
count__37972_38155 = G__38192;
i__37973_38156 = G__38193;
continue;
} else {
var G__38194 = cljs.core.next(seq__37967_38180__$1);
var G__38195 = null;
var G__38196 = (0);
var G__38197 = (0);
seq__37967_38153 = G__38194;
chunk__37971_38154 = G__38195;
count__37972_38155 = G__38196;
i__37973_38156 = G__38197;
continue;
}
} else {
var G__38198 = cljs.core.next(seq__37967_38180__$1);
var G__38199 = null;
var G__38200 = (0);
var G__38201 = (0);
seq__37967_38153 = G__38198;
chunk__37971_38154 = G__38199;
count__37972_38155 = G__38200;
i__37973_38156 = G__38201;
continue;
}
}
} else {
}
}
break;
}


var G__38202 = cljs.core.next(seq__37917__$1);
var G__38203 = null;
var G__38204 = (0);
var G__38205 = (0);
seq__37917 = G__38202;
chunk__37919 = G__38203;
count__37920 = G__38204;
i__37921 = G__38205;
continue;
} else {
var G__38206 = cljs.core.next(seq__37917__$1);
var G__38207 = null;
var G__38208 = (0);
var G__38209 = (0);
seq__37917 = G__38206;
chunk__37919 = G__38207;
count__37920 = G__38208;
i__37921 = G__38209;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37984){
var map__37985 = p__37984;
var map__37985__$1 = cljs.core.__destructure_map(map__37985);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37985__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37986){
var map__37987 = p__37986;
var map__37987__$1 = cljs.core.__destructure_map(map__37987);
var _ = map__37987__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37988,done,error){
var map__37989 = p__37988;
var map__37989__$1 = cljs.core.__destructure_map(map__37989);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37989__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37990,done,error){
var map__37991 = p__37990;
var map__37991__$1 = cljs.core.__destructure_map(map__37991);
var msg = map__37991__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37991__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37991__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37991__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37992){
var map__37993 = p__37992;
var map__37993__$1 = cljs.core.__destructure_map(map__37993);
var src = map__37993__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37993__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37994 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37994) : done.call(null,G__37994));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37995){
var map__37996 = p__37995;
var map__37996__$1 = cljs.core.__destructure_map(map__37996);
var msg__$1 = map__37996__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37996__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37997){var ex = e37997;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37998){
var map__37999 = p__37998;
var map__37999__$1 = cljs.core.__destructure_map(map__37999);
var env = map__37999__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__38000){
var map__38001 = p__38000;
var map__38001__$1 = cljs.core.__destructure_map(map__38001);
var msg = map__38001__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38001__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38002){
var map__38003 = p__38002;
var map__38003__$1 = cljs.core.__destructure_map(map__38003);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38003__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38003__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38004){
var map__38005 = p__38004;
var map__38005__$1 = cljs.core.__destructure_map(map__38005);
var svc = map__38005__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
