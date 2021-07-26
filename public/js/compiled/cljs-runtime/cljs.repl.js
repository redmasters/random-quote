goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37070){
var map__37071 = p__37070;
var map__37071__$1 = cljs.core.__destructure_map(map__37071);
var m = map__37071__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37071__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37071__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37072_37296 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37073_37297 = null;
var count__37074_37298 = (0);
var i__37075_37299 = (0);
while(true){
if((i__37075_37299 < count__37074_37298)){
var f_37300 = chunk__37073_37297.cljs$core$IIndexed$_nth$arity$2(null,i__37075_37299);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37300], 0));


var G__37301 = seq__37072_37296;
var G__37302 = chunk__37073_37297;
var G__37303 = count__37074_37298;
var G__37304 = (i__37075_37299 + (1));
seq__37072_37296 = G__37301;
chunk__37073_37297 = G__37302;
count__37074_37298 = G__37303;
i__37075_37299 = G__37304;
continue;
} else {
var temp__5753__auto___37305 = cljs.core.seq(seq__37072_37296);
if(temp__5753__auto___37305){
var seq__37072_37306__$1 = temp__5753__auto___37305;
if(cljs.core.chunked_seq_QMARK_(seq__37072_37306__$1)){
var c__4638__auto___37311 = cljs.core.chunk_first(seq__37072_37306__$1);
var G__37312 = cljs.core.chunk_rest(seq__37072_37306__$1);
var G__37313 = c__4638__auto___37311;
var G__37314 = cljs.core.count(c__4638__auto___37311);
var G__37315 = (0);
seq__37072_37296 = G__37312;
chunk__37073_37297 = G__37313;
count__37074_37298 = G__37314;
i__37075_37299 = G__37315;
continue;
} else {
var f_37316 = cljs.core.first(seq__37072_37306__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37316], 0));


var G__37317 = cljs.core.next(seq__37072_37306__$1);
var G__37318 = null;
var G__37319 = (0);
var G__37320 = (0);
seq__37072_37296 = G__37317;
chunk__37073_37297 = G__37318;
count__37074_37298 = G__37319;
i__37075_37299 = G__37320;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37321 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37321], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37321)))?cljs.core.second(arglists_37321):arglists_37321)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37079_37322 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37080_37323 = null;
var count__37081_37324 = (0);
var i__37082_37325 = (0);
while(true){
if((i__37082_37325 < count__37081_37324)){
var vec__37095_37326 = chunk__37080_37323.cljs$core$IIndexed$_nth$arity$2(null,i__37082_37325);
var name_37327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37095_37326,(0),null);
var map__37098_37328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37095_37326,(1),null);
var map__37098_37329__$1 = cljs.core.__destructure_map(map__37098_37328);
var doc_37330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098_37329__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098_37329__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37327], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37331], 0));

if(cljs.core.truth_(doc_37330)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37330], 0));
} else {
}


var G__37334 = seq__37079_37322;
var G__37335 = chunk__37080_37323;
var G__37336 = count__37081_37324;
var G__37337 = (i__37082_37325 + (1));
seq__37079_37322 = G__37334;
chunk__37080_37323 = G__37335;
count__37081_37324 = G__37336;
i__37082_37325 = G__37337;
continue;
} else {
var temp__5753__auto___37338 = cljs.core.seq(seq__37079_37322);
if(temp__5753__auto___37338){
var seq__37079_37339__$1 = temp__5753__auto___37338;
if(cljs.core.chunked_seq_QMARK_(seq__37079_37339__$1)){
var c__4638__auto___37340 = cljs.core.chunk_first(seq__37079_37339__$1);
var G__37341 = cljs.core.chunk_rest(seq__37079_37339__$1);
var G__37342 = c__4638__auto___37340;
var G__37343 = cljs.core.count(c__4638__auto___37340);
var G__37344 = (0);
seq__37079_37322 = G__37341;
chunk__37080_37323 = G__37342;
count__37081_37324 = G__37343;
i__37082_37325 = G__37344;
continue;
} else {
var vec__37099_37345 = cljs.core.first(seq__37079_37339__$1);
var name_37346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37099_37345,(0),null);
var map__37102_37347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37099_37345,(1),null);
var map__37102_37348__$1 = cljs.core.__destructure_map(map__37102_37347);
var doc_37349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37102_37348__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37102_37348__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37346], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37350], 0));

if(cljs.core.truth_(doc_37349)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37349], 0));
} else {
}


var G__37351 = cljs.core.next(seq__37079_37339__$1);
var G__37352 = null;
var G__37353 = (0);
var G__37354 = (0);
seq__37079_37322 = G__37351;
chunk__37080_37323 = G__37352;
count__37081_37324 = G__37353;
i__37082_37325 = G__37354;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37106 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37107 = null;
var count__37108 = (0);
var i__37109 = (0);
while(true){
if((i__37109 < count__37108)){
var role = chunk__37107.cljs$core$IIndexed$_nth$arity$2(null,i__37109);
var temp__5753__auto___37355__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___37355__$1)){
var spec_37356 = temp__5753__auto___37355__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37356)], 0));
} else {
}


var G__37357 = seq__37106;
var G__37358 = chunk__37107;
var G__37359 = count__37108;
var G__37360 = (i__37109 + (1));
seq__37106 = G__37357;
chunk__37107 = G__37358;
count__37108 = G__37359;
i__37109 = G__37360;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__37106);
if(temp__5753__auto____$1){
var seq__37106__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37106__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37106__$1);
var G__37361 = cljs.core.chunk_rest(seq__37106__$1);
var G__37362 = c__4638__auto__;
var G__37363 = cljs.core.count(c__4638__auto__);
var G__37364 = (0);
seq__37106 = G__37361;
chunk__37107 = G__37362;
count__37108 = G__37363;
i__37109 = G__37364;
continue;
} else {
var role = cljs.core.first(seq__37106__$1);
var temp__5753__auto___37365__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___37365__$2)){
var spec_37366 = temp__5753__auto___37365__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37366)], 0));
} else {
}


var G__37367 = cljs.core.next(seq__37106__$1);
var G__37368 = null;
var G__37369 = (0);
var G__37370 = (0);
seq__37106 = G__37367;
chunk__37107 = G__37368;
count__37108 = G__37369;
i__37109 = G__37370;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37381 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37382 = cljs.core.ex_cause(t);
via = G__37381;
t = G__37382;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37209 = datafied_throwable;
var map__37209__$1 = cljs.core.__destructure_map(map__37209);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37209__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37209__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37209__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37210 = cljs.core.last(via);
var map__37210__$1 = cljs.core.__destructure_map(map__37210);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37210__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37210__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37210__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37211 = data;
var map__37211__$1 = cljs.core.__destructure_map(map__37211);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37212 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37212__$1 = cljs.core.__destructure_map(map__37212);
var top_data = map__37212__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37212__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37215 = phase;
var G__37215__$1 = (((G__37215 instanceof cljs.core.Keyword))?G__37215.fqn:null);
switch (G__37215__$1) {
case "read-source":
var map__37216 = data;
var map__37216__$1 = cljs.core.__destructure_map(map__37216);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37217 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37217__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37217,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37217);
var G__37217__$2 = (cljs.core.truth_((function (){var fexpr__37218 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37218.cljs$core$IFn$_invoke$arity$1 ? fexpr__37218.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37218.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37217__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37217__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37217__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37217__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37219 = top_data;
var G__37219__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37219,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37219);
var G__37219__$2 = (cljs.core.truth_((function (){var fexpr__37221 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37221.cljs$core$IFn$_invoke$arity$1 ? fexpr__37221.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37221.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37219__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37219__$1);
var G__37219__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37219__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37219__$2);
var G__37219__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37219__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37219__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37219__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37219__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37223 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37223,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37223,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37223,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37223,(3),null);
var G__37226 = top_data;
var G__37226__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37226,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37226);
var G__37226__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37226__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37226__$1);
var G__37226__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37226__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37226__$2);
var G__37226__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37226__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37226__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37226__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37226__$4;
}

break;
case "execution":
var vec__37228 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37204_SHARP_){
var or__4212__auto__ = (p1__37204_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__37232 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37232.cljs$core$IFn$_invoke$arity$1 ? fexpr__37232.cljs$core$IFn$_invoke$arity$1(p1__37204_SHARP_) : fexpr__37232.call(null,p1__37204_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__37233 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37233__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37233,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37233);
var G__37233__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37233__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37233__$1);
var G__37233__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37233__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37233__$2);
var G__37233__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37233__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37233__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37233__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37233__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37215__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37240){
var map__37241 = p__37240;
var map__37241__$1 = cljs.core.__destructure_map(map__37241);
var triage_data = map__37241__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37246 = phase;
var G__37246__$1 = (((G__37246 instanceof cljs.core.Keyword))?G__37246.fqn:null);
switch (G__37246__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37247 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37248 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37249 = loc;
var G__37250 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37251_37394 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37252_37395 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37253_37396 = true;
var _STAR_print_fn_STAR__temp_val__37254_37397 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37253_37396);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37254_37397);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37234_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37234_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37252_37395);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37251_37394);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37247,G__37248,G__37249,G__37250) : format.call(null,G__37247,G__37248,G__37249,G__37250));

break;
case "macroexpansion":
var G__37255 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37256 = cause_type;
var G__37257 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37258 = loc;
var G__37259 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37255,G__37256,G__37257,G__37258,G__37259) : format.call(null,G__37255,G__37256,G__37257,G__37258,G__37259));

break;
case "compile-syntax-check":
var G__37260 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37261 = cause_type;
var G__37262 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37263 = loc;
var G__37264 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37260,G__37261,G__37262,G__37263,G__37264) : format.call(null,G__37260,G__37261,G__37262,G__37263,G__37264));

break;
case "compilation":
var G__37265 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37266 = cause_type;
var G__37267 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37268 = loc;
var G__37269 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37265,G__37266,G__37267,G__37268,G__37269) : format.call(null,G__37265,G__37266,G__37267,G__37268,G__37269));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37270 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37271 = symbol;
var G__37272 = loc;
var G__37273 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37274_37408 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37275_37409 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37276_37410 = true;
var _STAR_print_fn_STAR__temp_val__37277_37411 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37276_37410);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37277_37411);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37235_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37235_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37275_37409);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37274_37408);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37270,G__37271,G__37272,G__37273) : format.call(null,G__37270,G__37271,G__37272,G__37273));
} else {
var G__37279 = "Execution error%s at %s(%s).\n%s\n";
var G__37280 = cause_type;
var G__37281 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37282 = loc;
var G__37283 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37279,G__37280,G__37281,G__37282,G__37283) : format.call(null,G__37279,G__37280,G__37281,G__37282,G__37283));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37246__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
