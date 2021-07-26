goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32994 = arguments.length;
switch (G__32994) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32995 = (function (f,blockable,meta32996){
this.f = f;
this.blockable = blockable;
this.meta32996 = meta32996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32997,meta32996__$1){
var self__ = this;
var _32997__$1 = this;
return (new cljs.core.async.t_cljs$core$async32995(self__.f,self__.blockable,meta32996__$1));
}));

(cljs.core.async.t_cljs$core$async32995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32997){
var self__ = this;
var _32997__$1 = this;
return self__.meta32996;
}));

(cljs.core.async.t_cljs$core$async32995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32996","meta32996",1678128592,null)], null);
}));

(cljs.core.async.t_cljs$core$async32995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32995");

(cljs.core.async.t_cljs$core$async32995.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32995.
 */
cljs.core.async.__GT_t_cljs$core$async32995 = (function cljs$core$async$__GT_t_cljs$core$async32995(f__$1,blockable__$1,meta32996){
return (new cljs.core.async.t_cljs$core$async32995(f__$1,blockable__$1,meta32996));
});

}

return (new cljs.core.async.t_cljs$core$async32995(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33004 = arguments.length;
switch (G__33004) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33006 = arguments.length;
switch (G__33006) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33008 = arguments.length;
switch (G__33008) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34442 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34442) : fn1.call(null,val_34442));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34442) : fn1.call(null,val_34442));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33010 = arguments.length;
switch (G__33010) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___34444 = n;
var x_34445 = (0);
while(true){
if((x_34445 < n__4695__auto___34444)){
(a[x_34445] = x_34445);

var G__34446 = (x_34445 + (1));
x_34445 = G__34446;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33011 = (function (flag,meta33012){
this.flag = flag;
this.meta33012 = meta33012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33013,meta33012__$1){
var self__ = this;
var _33013__$1 = this;
return (new cljs.core.async.t_cljs$core$async33011(self__.flag,meta33012__$1));
}));

(cljs.core.async.t_cljs$core$async33011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33013){
var self__ = this;
var _33013__$1 = this;
return self__.meta33012;
}));

(cljs.core.async.t_cljs$core$async33011.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33011.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33012","meta33012",-1957177285,null)], null);
}));

(cljs.core.async.t_cljs$core$async33011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33011");

(cljs.core.async.t_cljs$core$async33011.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33011.
 */
cljs.core.async.__GT_t_cljs$core$async33011 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33011(flag__$1,meta33012){
return (new cljs.core.async.t_cljs$core$async33011(flag__$1,meta33012));
});

}

return (new cljs.core.async.t_cljs$core$async33011(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33014 = (function (flag,cb,meta33015){
this.flag = flag;
this.cb = cb;
this.meta33015 = meta33015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33016,meta33015__$1){
var self__ = this;
var _33016__$1 = this;
return (new cljs.core.async.t_cljs$core$async33014(self__.flag,self__.cb,meta33015__$1));
}));

(cljs.core.async.t_cljs$core$async33014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33016){
var self__ = this;
var _33016__$1 = this;
return self__.meta33015;
}));

(cljs.core.async.t_cljs$core$async33014.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33014.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33015","meta33015",-326153614,null)], null);
}));

(cljs.core.async.t_cljs$core$async33014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33014");

(cljs.core.async.t_cljs$core$async33014.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33014.
 */
cljs.core.async.__GT_t_cljs$core$async33014 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33014(flag__$1,cb__$1,meta33015){
return (new cljs.core.async.t_cljs$core$async33014(flag__$1,cb__$1,meta33015));
});

}

return (new cljs.core.async.t_cljs$core$async33014(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33017_SHARP_){
var G__33019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33017_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33019) : fret.call(null,G__33019));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33018_SHARP_){
var G__33020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33018_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33020) : fret.call(null,G__33020));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34449 = (i + (1));
i = G__34449;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34450 = arguments.length;
var i__4819__auto___34451 = (0);
while(true){
if((i__4819__auto___34451 < len__4818__auto___34450)){
args__4824__auto__.push((arguments[i__4819__auto___34451]));

var G__34452 = (i__4819__auto___34451 + (1));
i__4819__auto___34451 = G__34452;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33023){
var map__33024 = p__33023;
var map__33024__$1 = cljs.core.__destructure_map(map__33024);
var opts = map__33024__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33021){
var G__33022 = cljs.core.first(seq33021);
var seq33021__$1 = cljs.core.next(seq33021);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33022,seq33021__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33026 = arguments.length;
switch (G__33026) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32919__auto___34454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33050){
var state_val_33051 = (state_33050[(1)]);
if((state_val_33051 === (7))){
var inst_33046 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33052_34455 = state_33050__$1;
(statearr_33052_34455[(2)] = inst_33046);

(statearr_33052_34455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (1))){
var state_33050__$1 = state_33050;
var statearr_33053_34456 = state_33050__$1;
(statearr_33053_34456[(2)] = null);

(statearr_33053_34456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (4))){
var inst_33029 = (state_33050[(7)]);
var inst_33029__$1 = (state_33050[(2)]);
var inst_33030 = (inst_33029__$1 == null);
var state_33050__$1 = (function (){var statearr_33054 = state_33050;
(statearr_33054[(7)] = inst_33029__$1);

return statearr_33054;
})();
if(cljs.core.truth_(inst_33030)){
var statearr_33055_34457 = state_33050__$1;
(statearr_33055_34457[(1)] = (5));

} else {
var statearr_33056_34458 = state_33050__$1;
(statearr_33056_34458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (13))){
var state_33050__$1 = state_33050;
var statearr_33057_34459 = state_33050__$1;
(statearr_33057_34459[(2)] = null);

(statearr_33057_34459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (6))){
var inst_33029 = (state_33050[(7)]);
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33050__$1,(11),to,inst_33029);
} else {
if((state_val_33051 === (3))){
var inst_33048 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33050__$1,inst_33048);
} else {
if((state_val_33051 === (12))){
var state_33050__$1 = state_33050;
var statearr_33058_34460 = state_33050__$1;
(statearr_33058_34460[(2)] = null);

(statearr_33058_34460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (2))){
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33050__$1,(4),from);
} else {
if((state_val_33051 === (11))){
var inst_33039 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
if(cljs.core.truth_(inst_33039)){
var statearr_33059_34461 = state_33050__$1;
(statearr_33059_34461[(1)] = (12));

} else {
var statearr_33060_34462 = state_33050__$1;
(statearr_33060_34462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (9))){
var state_33050__$1 = state_33050;
var statearr_33061_34463 = state_33050__$1;
(statearr_33061_34463[(2)] = null);

(statearr_33061_34463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (5))){
var state_33050__$1 = state_33050;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33062_34464 = state_33050__$1;
(statearr_33062_34464[(1)] = (8));

} else {
var statearr_33063_34465 = state_33050__$1;
(statearr_33063_34465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (14))){
var inst_33044 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33064_34466 = state_33050__$1;
(statearr_33064_34466[(2)] = inst_33044);

(statearr_33064_34466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (10))){
var inst_33036 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33065_34467 = state_33050__$1;
(statearr_33065_34467[(2)] = inst_33036);

(statearr_33065_34467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (8))){
var inst_33033 = cljs.core.async.close_BANG_(to);
var state_33050__$1 = state_33050;
var statearr_33066_34468 = state_33050__$1;
(statearr_33066_34468[(2)] = inst_33033);

(statearr_33066_34468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32837__auto__ = null;
var cljs$core$async$state_machine__32837__auto____0 = (function (){
var statearr_33067 = [null,null,null,null,null,null,null,null];
(statearr_33067[(0)] = cljs$core$async$state_machine__32837__auto__);

(statearr_33067[(1)] = (1));

return statearr_33067;
});
var cljs$core$async$state_machine__32837__auto____1 = (function (state_33050){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33050);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33068){var ex__32840__auto__ = e33068;
var statearr_33069_34470 = state_33050;
(statearr_33069_34470[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33050[(4)]))){
var statearr_33070_34471 = state_33050;
(statearr_33070_34471[(1)] = cljs.core.first((state_33050[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34472 = state_33050;
state_33050 = G__34472;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$state_machine__32837__auto__ = function(state_33050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32837__auto____1.call(this,state_33050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32837__auto____0;
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32837__auto____1;
return cljs$core$async$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33071 = f__32920__auto__();
(statearr_33071[(6)] = c__32919__auto___34454);

return statearr_33071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33072){
var vec__33073 = p__33072;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33073,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33073,(1),null);
var job = vec__33073;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32919__auto___34473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33080){
var state_val_33081 = (state_33080[(1)]);
if((state_val_33081 === (1))){
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33080__$1,(2),res,v);
} else {
if((state_val_33081 === (2))){
var inst_33077 = (state_33080[(2)]);
var inst_33078 = cljs.core.async.close_BANG_(res);
var state_33080__$1 = (function (){var statearr_33082 = state_33080;
(statearr_33082[(7)] = inst_33077);

return statearr_33082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33080__$1,inst_33078);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0 = (function (){
var statearr_33083 = [null,null,null,null,null,null,null,null];
(statearr_33083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__);

(statearr_33083[(1)] = (1));

return statearr_33083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1 = (function (state_33080){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33080);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33084){var ex__32840__auto__ = e33084;
var statearr_33085_34476 = state_33080;
(statearr_33085_34476[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33080[(4)]))){
var statearr_33086_34477 = state_33080;
(statearr_33086_34477[(1)] = cljs.core.first((state_33080[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34478 = state_33080;
state_33080 = G__34478;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__ = function(state_33080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1.call(this,state_33080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33087 = f__32920__auto__();
(statearr_33087[(6)] = c__32919__auto___34473);

return statearr_33087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33088){
var vec__33089 = p__33088;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33089,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33089,(1),null);
var job = vec__33089;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___34479 = n;
var __34480 = (0);
while(true){
if((__34480 < n__4695__auto___34479)){
var G__33092_34481 = type;
var G__33092_34482__$1 = (((G__33092_34481 instanceof cljs.core.Keyword))?G__33092_34481.fqn:null);
switch (G__33092_34482__$1) {
case "compute":
var c__32919__auto___34484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34480,c__32919__auto___34484,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async){
return (function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = ((function (__34480,c__32919__auto___34484,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async){
return (function (state_33105){
var state_val_33106 = (state_33105[(1)]);
if((state_val_33106 === (1))){
var state_33105__$1 = state_33105;
var statearr_33107_34486 = state_33105__$1;
(statearr_33107_34486[(2)] = null);

(statearr_33107_34486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (2))){
var state_33105__$1 = state_33105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33105__$1,(4),jobs);
} else {
if((state_val_33106 === (3))){
var inst_33103 = (state_33105[(2)]);
var state_33105__$1 = state_33105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33105__$1,inst_33103);
} else {
if((state_val_33106 === (4))){
var inst_33095 = (state_33105[(2)]);
var inst_33096 = process(inst_33095);
var state_33105__$1 = state_33105;
if(cljs.core.truth_(inst_33096)){
var statearr_33108_34488 = state_33105__$1;
(statearr_33108_34488[(1)] = (5));

} else {
var statearr_33109_34489 = state_33105__$1;
(statearr_33109_34489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (5))){
var state_33105__$1 = state_33105;
var statearr_33110_34490 = state_33105__$1;
(statearr_33110_34490[(2)] = null);

(statearr_33110_34490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (6))){
var state_33105__$1 = state_33105;
var statearr_33111_34491 = state_33105__$1;
(statearr_33111_34491[(2)] = null);

(statearr_33111_34491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (7))){
var inst_33101 = (state_33105[(2)]);
var state_33105__$1 = state_33105;
var statearr_33112_34492 = state_33105__$1;
(statearr_33112_34492[(2)] = inst_33101);

(statearr_33112_34492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34480,c__32919__auto___34484,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async))
;
return ((function (__34480,switch__32836__auto__,c__32919__auto___34484,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0 = (function (){
var statearr_33113 = [null,null,null,null,null,null,null];
(statearr_33113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__);

(statearr_33113[(1)] = (1));

return statearr_33113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1 = (function (state_33105){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33105);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33114){var ex__32840__auto__ = e33114;
var statearr_33115_34493 = state_33105;
(statearr_33115_34493[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33105[(4)]))){
var statearr_33116_34494 = state_33105;
(statearr_33116_34494[(1)] = cljs.core.first((state_33105[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34496 = state_33105;
state_33105 = G__34496;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__ = function(state_33105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1.call(this,state_33105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__;
})()
;})(__34480,switch__32836__auto__,c__32919__auto___34484,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async))
})();
var state__32921__auto__ = (function (){var statearr_33117 = f__32920__auto__();
(statearr_33117[(6)] = c__32919__auto___34484);

return statearr_33117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
});})(__34480,c__32919__auto___34484,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async))
);


break;
case "async":
var c__32919__auto___34498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34480,c__32919__auto___34498,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async){
return (function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = ((function (__34480,c__32919__auto___34498,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async){
return (function (state_33130){
var state_val_33131 = (state_33130[(1)]);
if((state_val_33131 === (1))){
var state_33130__$1 = state_33130;
var statearr_33132_34499 = state_33130__$1;
(statearr_33132_34499[(2)] = null);

(statearr_33132_34499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (2))){
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33130__$1,(4),jobs);
} else {
if((state_val_33131 === (3))){
var inst_33128 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33130__$1,inst_33128);
} else {
if((state_val_33131 === (4))){
var inst_33120 = (state_33130[(2)]);
var inst_33121 = async(inst_33120);
var state_33130__$1 = state_33130;
if(cljs.core.truth_(inst_33121)){
var statearr_33133_34500 = state_33130__$1;
(statearr_33133_34500[(1)] = (5));

} else {
var statearr_33134_34501 = state_33130__$1;
(statearr_33134_34501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (5))){
var state_33130__$1 = state_33130;
var statearr_33135_34502 = state_33130__$1;
(statearr_33135_34502[(2)] = null);

(statearr_33135_34502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (6))){
var state_33130__$1 = state_33130;
var statearr_33136_34503 = state_33130__$1;
(statearr_33136_34503[(2)] = null);

(statearr_33136_34503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (7))){
var inst_33126 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
var statearr_33137_34504 = state_33130__$1;
(statearr_33137_34504[(2)] = inst_33126);

(statearr_33137_34504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34480,c__32919__auto___34498,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async))
;
return ((function (__34480,switch__32836__auto__,c__32919__auto___34498,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0 = (function (){
var statearr_33138 = [null,null,null,null,null,null,null];
(statearr_33138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__);

(statearr_33138[(1)] = (1));

return statearr_33138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1 = (function (state_33130){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33130);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33139){var ex__32840__auto__ = e33139;
var statearr_33140_34505 = state_33130;
(statearr_33140_34505[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33130[(4)]))){
var statearr_33141_34506 = state_33130;
(statearr_33141_34506[(1)] = cljs.core.first((state_33130[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34508 = state_33130;
state_33130 = G__34508;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__ = function(state_33130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1.call(this,state_33130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__;
})()
;})(__34480,switch__32836__auto__,c__32919__auto___34498,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async))
})();
var state__32921__auto__ = (function (){var statearr_33142 = f__32920__auto__();
(statearr_33142[(6)] = c__32919__auto___34498);

return statearr_33142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
});})(__34480,c__32919__auto___34498,G__33092_34481,G__33092_34482__$1,n__4695__auto___34479,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33092_34482__$1)].join('')));

}

var G__34510 = (__34480 + (1));
__34480 = G__34510;
continue;
} else {
}
break;
}

var c__32919__auto___34511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33164){
var state_val_33165 = (state_33164[(1)]);
if((state_val_33165 === (7))){
var inst_33160 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
var statearr_33166_34512 = state_33164__$1;
(statearr_33166_34512[(2)] = inst_33160);

(statearr_33166_34512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (1))){
var state_33164__$1 = state_33164;
var statearr_33167_34513 = state_33164__$1;
(statearr_33167_34513[(2)] = null);

(statearr_33167_34513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (4))){
var inst_33145 = (state_33164[(7)]);
var inst_33145__$1 = (state_33164[(2)]);
var inst_33146 = (inst_33145__$1 == null);
var state_33164__$1 = (function (){var statearr_33168 = state_33164;
(statearr_33168[(7)] = inst_33145__$1);

return statearr_33168;
})();
if(cljs.core.truth_(inst_33146)){
var statearr_33169_34514 = state_33164__$1;
(statearr_33169_34514[(1)] = (5));

} else {
var statearr_33170_34515 = state_33164__$1;
(statearr_33170_34515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (6))){
var inst_33145 = (state_33164[(7)]);
var inst_33150 = (state_33164[(8)]);
var inst_33150__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33152 = [inst_33145,inst_33150__$1];
var inst_33153 = (new cljs.core.PersistentVector(null,2,(5),inst_33151,inst_33152,null));
var state_33164__$1 = (function (){var statearr_33171 = state_33164;
(statearr_33171[(8)] = inst_33150__$1);

return statearr_33171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33164__$1,(8),jobs,inst_33153);
} else {
if((state_val_33165 === (3))){
var inst_33162 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33164__$1,inst_33162);
} else {
if((state_val_33165 === (2))){
var state_33164__$1 = state_33164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33164__$1,(4),from);
} else {
if((state_val_33165 === (9))){
var inst_33157 = (state_33164[(2)]);
var state_33164__$1 = (function (){var statearr_33172 = state_33164;
(statearr_33172[(9)] = inst_33157);

return statearr_33172;
})();
var statearr_33173_34516 = state_33164__$1;
(statearr_33173_34516[(2)] = null);

(statearr_33173_34516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (5))){
var inst_33148 = cljs.core.async.close_BANG_(jobs);
var state_33164__$1 = state_33164;
var statearr_33174_34517 = state_33164__$1;
(statearr_33174_34517[(2)] = inst_33148);

(statearr_33174_34517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (8))){
var inst_33150 = (state_33164[(8)]);
var inst_33155 = (state_33164[(2)]);
var state_33164__$1 = (function (){var statearr_33175 = state_33164;
(statearr_33175[(10)] = inst_33155);

return statearr_33175;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33164__$1,(9),results,inst_33150);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0 = (function (){
var statearr_33176 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33176[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__);

(statearr_33176[(1)] = (1));

return statearr_33176;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1 = (function (state_33164){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33164);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33177){var ex__32840__auto__ = e33177;
var statearr_33178_34518 = state_33164;
(statearr_33178_34518[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33164[(4)]))){
var statearr_33179_34519 = state_33164;
(statearr_33179_34519[(1)] = cljs.core.first((state_33164[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34520 = state_33164;
state_33164 = G__34520;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__ = function(state_33164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1.call(this,state_33164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33180 = f__32920__auto__();
(statearr_33180[(6)] = c__32919__auto___34511);

return statearr_33180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


var c__32919__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33218){
var state_val_33219 = (state_33218[(1)]);
if((state_val_33219 === (7))){
var inst_33214 = (state_33218[(2)]);
var state_33218__$1 = state_33218;
var statearr_33220_34521 = state_33218__$1;
(statearr_33220_34521[(2)] = inst_33214);

(statearr_33220_34521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (20))){
var state_33218__$1 = state_33218;
var statearr_33221_34522 = state_33218__$1;
(statearr_33221_34522[(2)] = null);

(statearr_33221_34522[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (1))){
var state_33218__$1 = state_33218;
var statearr_33222_34523 = state_33218__$1;
(statearr_33222_34523[(2)] = null);

(statearr_33222_34523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (4))){
var inst_33183 = (state_33218[(7)]);
var inst_33183__$1 = (state_33218[(2)]);
var inst_33184 = (inst_33183__$1 == null);
var state_33218__$1 = (function (){var statearr_33223 = state_33218;
(statearr_33223[(7)] = inst_33183__$1);

return statearr_33223;
})();
if(cljs.core.truth_(inst_33184)){
var statearr_33224_34524 = state_33218__$1;
(statearr_33224_34524[(1)] = (5));

} else {
var statearr_33225_34525 = state_33218__$1;
(statearr_33225_34525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (15))){
var inst_33196 = (state_33218[(8)]);
var state_33218__$1 = state_33218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33218__$1,(18),to,inst_33196);
} else {
if((state_val_33219 === (21))){
var inst_33209 = (state_33218[(2)]);
var state_33218__$1 = state_33218;
var statearr_33226_34526 = state_33218__$1;
(statearr_33226_34526[(2)] = inst_33209);

(statearr_33226_34526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (13))){
var inst_33211 = (state_33218[(2)]);
var state_33218__$1 = (function (){var statearr_33227 = state_33218;
(statearr_33227[(9)] = inst_33211);

return statearr_33227;
})();
var statearr_33228_34528 = state_33218__$1;
(statearr_33228_34528[(2)] = null);

(statearr_33228_34528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (6))){
var inst_33183 = (state_33218[(7)]);
var state_33218__$1 = state_33218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33218__$1,(11),inst_33183);
} else {
if((state_val_33219 === (17))){
var inst_33204 = (state_33218[(2)]);
var state_33218__$1 = state_33218;
if(cljs.core.truth_(inst_33204)){
var statearr_33229_34530 = state_33218__$1;
(statearr_33229_34530[(1)] = (19));

} else {
var statearr_33230_34531 = state_33218__$1;
(statearr_33230_34531[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (3))){
var inst_33216 = (state_33218[(2)]);
var state_33218__$1 = state_33218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33218__$1,inst_33216);
} else {
if((state_val_33219 === (12))){
var inst_33193 = (state_33218[(10)]);
var state_33218__$1 = state_33218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33218__$1,(14),inst_33193);
} else {
if((state_val_33219 === (2))){
var state_33218__$1 = state_33218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33218__$1,(4),results);
} else {
if((state_val_33219 === (19))){
var state_33218__$1 = state_33218;
var statearr_33231_34532 = state_33218__$1;
(statearr_33231_34532[(2)] = null);

(statearr_33231_34532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (11))){
var inst_33193 = (state_33218[(2)]);
var state_33218__$1 = (function (){var statearr_33232 = state_33218;
(statearr_33232[(10)] = inst_33193);

return statearr_33232;
})();
var statearr_33233_34533 = state_33218__$1;
(statearr_33233_34533[(2)] = null);

(statearr_33233_34533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (9))){
var state_33218__$1 = state_33218;
var statearr_33234_34534 = state_33218__$1;
(statearr_33234_34534[(2)] = null);

(statearr_33234_34534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (5))){
var state_33218__$1 = state_33218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33235_34535 = state_33218__$1;
(statearr_33235_34535[(1)] = (8));

} else {
var statearr_33236_34536 = state_33218__$1;
(statearr_33236_34536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (14))){
var inst_33198 = (state_33218[(11)]);
var inst_33196 = (state_33218[(8)]);
var inst_33196__$1 = (state_33218[(2)]);
var inst_33197 = (inst_33196__$1 == null);
var inst_33198__$1 = cljs.core.not(inst_33197);
var state_33218__$1 = (function (){var statearr_33237 = state_33218;
(statearr_33237[(11)] = inst_33198__$1);

(statearr_33237[(8)] = inst_33196__$1);

return statearr_33237;
})();
if(inst_33198__$1){
var statearr_33238_34537 = state_33218__$1;
(statearr_33238_34537[(1)] = (15));

} else {
var statearr_33239_34538 = state_33218__$1;
(statearr_33239_34538[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (16))){
var inst_33198 = (state_33218[(11)]);
var state_33218__$1 = state_33218;
var statearr_33240_34539 = state_33218__$1;
(statearr_33240_34539[(2)] = inst_33198);

(statearr_33240_34539[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (10))){
var inst_33190 = (state_33218[(2)]);
var state_33218__$1 = state_33218;
var statearr_33241_34540 = state_33218__$1;
(statearr_33241_34540[(2)] = inst_33190);

(statearr_33241_34540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (18))){
var inst_33201 = (state_33218[(2)]);
var state_33218__$1 = state_33218;
var statearr_33242_34541 = state_33218__$1;
(statearr_33242_34541[(2)] = inst_33201);

(statearr_33242_34541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (8))){
var inst_33187 = cljs.core.async.close_BANG_(to);
var state_33218__$1 = state_33218;
var statearr_33243_34542 = state_33218__$1;
(statearr_33243_34542[(2)] = inst_33187);

(statearr_33243_34542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0 = (function (){
var statearr_33244 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__);

(statearr_33244[(1)] = (1));

return statearr_33244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1 = (function (state_33218){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33218);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33245){var ex__32840__auto__ = e33245;
var statearr_33246_34543 = state_33218;
(statearr_33246_34543[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33218[(4)]))){
var statearr_33247_34544 = state_33218;
(statearr_33247_34544[(1)] = cljs.core.first((state_33218[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34546 = state_33218;
state_33218 = G__34546;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__ = function(state_33218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1.call(this,state_33218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32837__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33248 = f__32920__auto__();
(statearr_33248[(6)] = c__32919__auto__);

return statearr_33248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));

return c__32919__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33250 = arguments.length;
switch (G__33250) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33252 = arguments.length;
switch (G__33252) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33254 = arguments.length;
switch (G__33254) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32919__auto___34551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33280){
var state_val_33281 = (state_33280[(1)]);
if((state_val_33281 === (7))){
var inst_33276 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33282_34552 = state_33280__$1;
(statearr_33282_34552[(2)] = inst_33276);

(statearr_33282_34552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (1))){
var state_33280__$1 = state_33280;
var statearr_33283_34554 = state_33280__$1;
(statearr_33283_34554[(2)] = null);

(statearr_33283_34554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (4))){
var inst_33257 = (state_33280[(7)]);
var inst_33257__$1 = (state_33280[(2)]);
var inst_33258 = (inst_33257__$1 == null);
var state_33280__$1 = (function (){var statearr_33284 = state_33280;
(statearr_33284[(7)] = inst_33257__$1);

return statearr_33284;
})();
if(cljs.core.truth_(inst_33258)){
var statearr_33285_34555 = state_33280__$1;
(statearr_33285_34555[(1)] = (5));

} else {
var statearr_33286_34556 = state_33280__$1;
(statearr_33286_34556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (13))){
var state_33280__$1 = state_33280;
var statearr_33287_34557 = state_33280__$1;
(statearr_33287_34557[(2)] = null);

(statearr_33287_34557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (6))){
var inst_33257 = (state_33280[(7)]);
var inst_33263 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33257) : p.call(null,inst_33257));
var state_33280__$1 = state_33280;
if(cljs.core.truth_(inst_33263)){
var statearr_33288_34558 = state_33280__$1;
(statearr_33288_34558[(1)] = (9));

} else {
var statearr_33289_34559 = state_33280__$1;
(statearr_33289_34559[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (3))){
var inst_33278 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33280__$1,inst_33278);
} else {
if((state_val_33281 === (12))){
var state_33280__$1 = state_33280;
var statearr_33290_34560 = state_33280__$1;
(statearr_33290_34560[(2)] = null);

(statearr_33290_34560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (2))){
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33280__$1,(4),ch);
} else {
if((state_val_33281 === (11))){
var inst_33257 = (state_33280[(7)]);
var inst_33267 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33280__$1,(8),inst_33267,inst_33257);
} else {
if((state_val_33281 === (9))){
var state_33280__$1 = state_33280;
var statearr_33291_34561 = state_33280__$1;
(statearr_33291_34561[(2)] = tc);

(statearr_33291_34561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (5))){
var inst_33260 = cljs.core.async.close_BANG_(tc);
var inst_33261 = cljs.core.async.close_BANG_(fc);
var state_33280__$1 = (function (){var statearr_33292 = state_33280;
(statearr_33292[(8)] = inst_33260);

return statearr_33292;
})();
var statearr_33293_34562 = state_33280__$1;
(statearr_33293_34562[(2)] = inst_33261);

(statearr_33293_34562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (14))){
var inst_33274 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33294_34563 = state_33280__$1;
(statearr_33294_34563[(2)] = inst_33274);

(statearr_33294_34563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (10))){
var state_33280__$1 = state_33280;
var statearr_33295_34568 = state_33280__$1;
(statearr_33295_34568[(2)] = fc);

(statearr_33295_34568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (8))){
var inst_33269 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
if(cljs.core.truth_(inst_33269)){
var statearr_33296_34569 = state_33280__$1;
(statearr_33296_34569[(1)] = (12));

} else {
var statearr_33297_34570 = state_33280__$1;
(statearr_33297_34570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32837__auto__ = null;
var cljs$core$async$state_machine__32837__auto____0 = (function (){
var statearr_33298 = [null,null,null,null,null,null,null,null,null];
(statearr_33298[(0)] = cljs$core$async$state_machine__32837__auto__);

(statearr_33298[(1)] = (1));

return statearr_33298;
});
var cljs$core$async$state_machine__32837__auto____1 = (function (state_33280){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33280);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33299){var ex__32840__auto__ = e33299;
var statearr_33300_34571 = state_33280;
(statearr_33300_34571[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33280[(4)]))){
var statearr_33301_34572 = state_33280;
(statearr_33301_34572[(1)] = cljs.core.first((state_33280[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34573 = state_33280;
state_33280 = G__34573;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$state_machine__32837__auto__ = function(state_33280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32837__auto____1.call(this,state_33280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32837__auto____0;
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32837__auto____1;
return cljs$core$async$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33302 = f__32920__auto__();
(statearr_33302[(6)] = c__32919__auto___34551);

return statearr_33302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32919__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33324){
var state_val_33325 = (state_33324[(1)]);
if((state_val_33325 === (7))){
var inst_33320 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33326_34574 = state_33324__$1;
(statearr_33326_34574[(2)] = inst_33320);

(statearr_33326_34574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (1))){
var inst_33303 = init;
var inst_33304 = inst_33303;
var state_33324__$1 = (function (){var statearr_33327 = state_33324;
(statearr_33327[(7)] = inst_33304);

return statearr_33327;
})();
var statearr_33328_34575 = state_33324__$1;
(statearr_33328_34575[(2)] = null);

(statearr_33328_34575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (4))){
var inst_33307 = (state_33324[(8)]);
var inst_33307__$1 = (state_33324[(2)]);
var inst_33308 = (inst_33307__$1 == null);
var state_33324__$1 = (function (){var statearr_33329 = state_33324;
(statearr_33329[(8)] = inst_33307__$1);

return statearr_33329;
})();
if(cljs.core.truth_(inst_33308)){
var statearr_33330_34576 = state_33324__$1;
(statearr_33330_34576[(1)] = (5));

} else {
var statearr_33331_34577 = state_33324__$1;
(statearr_33331_34577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (6))){
var inst_33307 = (state_33324[(8)]);
var inst_33311 = (state_33324[(9)]);
var inst_33304 = (state_33324[(7)]);
var inst_33311__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33304,inst_33307) : f.call(null,inst_33304,inst_33307));
var inst_33312 = cljs.core.reduced_QMARK_(inst_33311__$1);
var state_33324__$1 = (function (){var statearr_33332 = state_33324;
(statearr_33332[(9)] = inst_33311__$1);

return statearr_33332;
})();
if(inst_33312){
var statearr_33333_34578 = state_33324__$1;
(statearr_33333_34578[(1)] = (8));

} else {
var statearr_33334_34579 = state_33324__$1;
(statearr_33334_34579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (3))){
var inst_33322 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33324__$1,inst_33322);
} else {
if((state_val_33325 === (2))){
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33324__$1,(4),ch);
} else {
if((state_val_33325 === (9))){
var inst_33311 = (state_33324[(9)]);
var inst_33304 = inst_33311;
var state_33324__$1 = (function (){var statearr_33335 = state_33324;
(statearr_33335[(7)] = inst_33304);

return statearr_33335;
})();
var statearr_33336_34580 = state_33324__$1;
(statearr_33336_34580[(2)] = null);

(statearr_33336_34580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (5))){
var inst_33304 = (state_33324[(7)]);
var state_33324__$1 = state_33324;
var statearr_33337_34581 = state_33324__$1;
(statearr_33337_34581[(2)] = inst_33304);

(statearr_33337_34581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (10))){
var inst_33318 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33338_34582 = state_33324__$1;
(statearr_33338_34582[(2)] = inst_33318);

(statearr_33338_34582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (8))){
var inst_33311 = (state_33324[(9)]);
var inst_33314 = cljs.core.deref(inst_33311);
var state_33324__$1 = state_33324;
var statearr_33339_34583 = state_33324__$1;
(statearr_33339_34583[(2)] = inst_33314);

(statearr_33339_34583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32837__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32837__auto____0 = (function (){
var statearr_33340 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33340[(0)] = cljs$core$async$reduce_$_state_machine__32837__auto__);

(statearr_33340[(1)] = (1));

return statearr_33340;
});
var cljs$core$async$reduce_$_state_machine__32837__auto____1 = (function (state_33324){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33324);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33341){var ex__32840__auto__ = e33341;
var statearr_33342_34584 = state_33324;
(statearr_33342_34584[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33324[(4)]))){
var statearr_33343_34585 = state_33324;
(statearr_33343_34585[(1)] = cljs.core.first((state_33324[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34586 = state_33324;
state_33324 = G__34586;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32837__auto__ = function(state_33324){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32837__auto____1.call(this,state_33324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32837__auto____0;
cljs$core$async$reduce_$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32837__auto____1;
return cljs$core$async$reduce_$_state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33344 = f__32920__auto__();
(statearr_33344[(6)] = c__32919__auto__);

return statearr_33344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));

return c__32919__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32919__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33350){
var state_val_33351 = (state_33350[(1)]);
if((state_val_33351 === (1))){
var inst_33345 = cljs.core.async.reduce(f__$1,init,ch);
var state_33350__$1 = state_33350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33350__$1,(2),inst_33345);
} else {
if((state_val_33351 === (2))){
var inst_33347 = (state_33350[(2)]);
var inst_33348 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33347) : f__$1.call(null,inst_33347));
var state_33350__$1 = state_33350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33350__$1,inst_33348);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32837__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32837__auto____0 = (function (){
var statearr_33352 = [null,null,null,null,null,null,null];
(statearr_33352[(0)] = cljs$core$async$transduce_$_state_machine__32837__auto__);

(statearr_33352[(1)] = (1));

return statearr_33352;
});
var cljs$core$async$transduce_$_state_machine__32837__auto____1 = (function (state_33350){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33350);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33353){var ex__32840__auto__ = e33353;
var statearr_33354_34589 = state_33350;
(statearr_33354_34589[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33350[(4)]))){
var statearr_33355_34590 = state_33350;
(statearr_33355_34590[(1)] = cljs.core.first((state_33350[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34591 = state_33350;
state_33350 = G__34591;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32837__auto__ = function(state_33350){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32837__auto____1.call(this,state_33350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32837__auto____0;
cljs$core$async$transduce_$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32837__auto____1;
return cljs$core$async$transduce_$_state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33356 = f__32920__auto__();
(statearr_33356[(6)] = c__32919__auto__);

return statearr_33356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));

return c__32919__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33358 = arguments.length;
switch (G__33358) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32919__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33383){
var state_val_33384 = (state_33383[(1)]);
if((state_val_33384 === (7))){
var inst_33365 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
var statearr_33385_34593 = state_33383__$1;
(statearr_33385_34593[(2)] = inst_33365);

(statearr_33385_34593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (1))){
var inst_33359 = cljs.core.seq(coll);
var inst_33360 = inst_33359;
var state_33383__$1 = (function (){var statearr_33386 = state_33383;
(statearr_33386[(7)] = inst_33360);

return statearr_33386;
})();
var statearr_33387_34594 = state_33383__$1;
(statearr_33387_34594[(2)] = null);

(statearr_33387_34594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (4))){
var inst_33360 = (state_33383[(7)]);
var inst_33363 = cljs.core.first(inst_33360);
var state_33383__$1 = state_33383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33383__$1,(7),ch,inst_33363);
} else {
if((state_val_33384 === (13))){
var inst_33377 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
var statearr_33388_34595 = state_33383__$1;
(statearr_33388_34595[(2)] = inst_33377);

(statearr_33388_34595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (6))){
var inst_33368 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
if(cljs.core.truth_(inst_33368)){
var statearr_33389_34596 = state_33383__$1;
(statearr_33389_34596[(1)] = (8));

} else {
var statearr_33390_34597 = state_33383__$1;
(statearr_33390_34597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (3))){
var inst_33381 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33383__$1,inst_33381);
} else {
if((state_val_33384 === (12))){
var state_33383__$1 = state_33383;
var statearr_33391_34598 = state_33383__$1;
(statearr_33391_34598[(2)] = null);

(statearr_33391_34598[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (2))){
var inst_33360 = (state_33383[(7)]);
var state_33383__$1 = state_33383;
if(cljs.core.truth_(inst_33360)){
var statearr_33392_34599 = state_33383__$1;
(statearr_33392_34599[(1)] = (4));

} else {
var statearr_33393_34601 = state_33383__$1;
(statearr_33393_34601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (11))){
var inst_33374 = cljs.core.async.close_BANG_(ch);
var state_33383__$1 = state_33383;
var statearr_33394_34605 = state_33383__$1;
(statearr_33394_34605[(2)] = inst_33374);

(statearr_33394_34605[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (9))){
var state_33383__$1 = state_33383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33395_34609 = state_33383__$1;
(statearr_33395_34609[(1)] = (11));

} else {
var statearr_33396_34610 = state_33383__$1;
(statearr_33396_34610[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (5))){
var inst_33360 = (state_33383[(7)]);
var state_33383__$1 = state_33383;
var statearr_33397_34611 = state_33383__$1;
(statearr_33397_34611[(2)] = inst_33360);

(statearr_33397_34611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (10))){
var inst_33379 = (state_33383[(2)]);
var state_33383__$1 = state_33383;
var statearr_33398_34612 = state_33383__$1;
(statearr_33398_34612[(2)] = inst_33379);

(statearr_33398_34612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33384 === (8))){
var inst_33360 = (state_33383[(7)]);
var inst_33370 = cljs.core.next(inst_33360);
var inst_33360__$1 = inst_33370;
var state_33383__$1 = (function (){var statearr_33399 = state_33383;
(statearr_33399[(7)] = inst_33360__$1);

return statearr_33399;
})();
var statearr_33400_34613 = state_33383__$1;
(statearr_33400_34613[(2)] = null);

(statearr_33400_34613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32837__auto__ = null;
var cljs$core$async$state_machine__32837__auto____0 = (function (){
var statearr_33401 = [null,null,null,null,null,null,null,null];
(statearr_33401[(0)] = cljs$core$async$state_machine__32837__auto__);

(statearr_33401[(1)] = (1));

return statearr_33401;
});
var cljs$core$async$state_machine__32837__auto____1 = (function (state_33383){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33383);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33402){var ex__32840__auto__ = e33402;
var statearr_33403_34617 = state_33383;
(statearr_33403_34617[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33383[(4)]))){
var statearr_33404_34618 = state_33383;
(statearr_33404_34618[(1)] = cljs.core.first((state_33383[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34619 = state_33383;
state_33383 = G__34619;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$state_machine__32837__auto__ = function(state_33383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32837__auto____1.call(this,state_33383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32837__auto____0;
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32837__auto____1;
return cljs$core$async$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33405 = f__32920__auto__();
(statearr_33405[(6)] = c__32919__auto__);

return statearr_33405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));

return c__32919__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33407 = arguments.length;
switch (G__33407) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34627 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34627(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34628 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34628(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34636 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34636(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34637 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34637(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33408 = (function (ch,cs,meta33409){
this.ch = ch;
this.cs = cs;
this.meta33409 = meta33409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33410,meta33409__$1){
var self__ = this;
var _33410__$1 = this;
return (new cljs.core.async.t_cljs$core$async33408(self__.ch,self__.cs,meta33409__$1));
}));

(cljs.core.async.t_cljs$core$async33408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33410){
var self__ = this;
var _33410__$1 = this;
return self__.meta33409;
}));

(cljs.core.async.t_cljs$core$async33408.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33408.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33408.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33408.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33408.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33409","meta33409",-1323007241,null)], null);
}));

(cljs.core.async.t_cljs$core$async33408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33408");

(cljs.core.async.t_cljs$core$async33408.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33408.
 */
cljs.core.async.__GT_t_cljs$core$async33408 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33408(ch__$1,cs__$1,meta33409){
return (new cljs.core.async.t_cljs$core$async33408(ch__$1,cs__$1,meta33409));
});

}

return (new cljs.core.async.t_cljs$core$async33408(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32919__auto___34644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33543){
var state_val_33544 = (state_33543[(1)]);
if((state_val_33544 === (7))){
var inst_33539 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33545_34645 = state_33543__$1;
(statearr_33545_34645[(2)] = inst_33539);

(statearr_33545_34645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (20))){
var inst_33444 = (state_33543[(7)]);
var inst_33456 = cljs.core.first(inst_33444);
var inst_33457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33456,(0),null);
var inst_33458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33456,(1),null);
var state_33543__$1 = (function (){var statearr_33546 = state_33543;
(statearr_33546[(8)] = inst_33457);

return statearr_33546;
})();
if(cljs.core.truth_(inst_33458)){
var statearr_33547_34649 = state_33543__$1;
(statearr_33547_34649[(1)] = (22));

} else {
var statearr_33548_34650 = state_33543__$1;
(statearr_33548_34650[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (27))){
var inst_33413 = (state_33543[(9)]);
var inst_33488 = (state_33543[(10)]);
var inst_33486 = (state_33543[(11)]);
var inst_33493 = (state_33543[(12)]);
var inst_33493__$1 = cljs.core._nth(inst_33486,inst_33488);
var inst_33494 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33493__$1,inst_33413,done);
var state_33543__$1 = (function (){var statearr_33549 = state_33543;
(statearr_33549[(12)] = inst_33493__$1);

return statearr_33549;
})();
if(cljs.core.truth_(inst_33494)){
var statearr_33550_34651 = state_33543__$1;
(statearr_33550_34651[(1)] = (30));

} else {
var statearr_33551_34652 = state_33543__$1;
(statearr_33551_34652[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (1))){
var state_33543__$1 = state_33543;
var statearr_33552_34653 = state_33543__$1;
(statearr_33552_34653[(2)] = null);

(statearr_33552_34653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (24))){
var inst_33444 = (state_33543[(7)]);
var inst_33463 = (state_33543[(2)]);
var inst_33464 = cljs.core.next(inst_33444);
var inst_33422 = inst_33464;
var inst_33423 = null;
var inst_33424 = (0);
var inst_33425 = (0);
var state_33543__$1 = (function (){var statearr_33553 = state_33543;
(statearr_33553[(13)] = inst_33425);

(statearr_33553[(14)] = inst_33422);

(statearr_33553[(15)] = inst_33463);

(statearr_33553[(16)] = inst_33424);

(statearr_33553[(17)] = inst_33423);

return statearr_33553;
})();
var statearr_33554_34654 = state_33543__$1;
(statearr_33554_34654[(2)] = null);

(statearr_33554_34654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (39))){
var state_33543__$1 = state_33543;
var statearr_33558_34656 = state_33543__$1;
(statearr_33558_34656[(2)] = null);

(statearr_33558_34656[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (4))){
var inst_33413 = (state_33543[(9)]);
var inst_33413__$1 = (state_33543[(2)]);
var inst_33414 = (inst_33413__$1 == null);
var state_33543__$1 = (function (){var statearr_33559 = state_33543;
(statearr_33559[(9)] = inst_33413__$1);

return statearr_33559;
})();
if(cljs.core.truth_(inst_33414)){
var statearr_33560_34657 = state_33543__$1;
(statearr_33560_34657[(1)] = (5));

} else {
var statearr_33561_34658 = state_33543__$1;
(statearr_33561_34658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (15))){
var inst_33425 = (state_33543[(13)]);
var inst_33422 = (state_33543[(14)]);
var inst_33424 = (state_33543[(16)]);
var inst_33423 = (state_33543[(17)]);
var inst_33440 = (state_33543[(2)]);
var inst_33441 = (inst_33425 + (1));
var tmp33555 = inst_33422;
var tmp33556 = inst_33424;
var tmp33557 = inst_33423;
var inst_33422__$1 = tmp33555;
var inst_33423__$1 = tmp33557;
var inst_33424__$1 = tmp33556;
var inst_33425__$1 = inst_33441;
var state_33543__$1 = (function (){var statearr_33562 = state_33543;
(statearr_33562[(13)] = inst_33425__$1);

(statearr_33562[(14)] = inst_33422__$1);

(statearr_33562[(16)] = inst_33424__$1);

(statearr_33562[(18)] = inst_33440);

(statearr_33562[(17)] = inst_33423__$1);

return statearr_33562;
})();
var statearr_33563_34659 = state_33543__$1;
(statearr_33563_34659[(2)] = null);

(statearr_33563_34659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (21))){
var inst_33467 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33567_34660 = state_33543__$1;
(statearr_33567_34660[(2)] = inst_33467);

(statearr_33567_34660[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (31))){
var inst_33493 = (state_33543[(12)]);
var inst_33497 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33493);
var state_33543__$1 = state_33543;
var statearr_33568_34661 = state_33543__$1;
(statearr_33568_34661[(2)] = inst_33497);

(statearr_33568_34661[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (32))){
var inst_33487 = (state_33543[(19)]);
var inst_33485 = (state_33543[(20)]);
var inst_33488 = (state_33543[(10)]);
var inst_33486 = (state_33543[(11)]);
var inst_33499 = (state_33543[(2)]);
var inst_33500 = (inst_33488 + (1));
var tmp33564 = inst_33487;
var tmp33565 = inst_33485;
var tmp33566 = inst_33486;
var inst_33485__$1 = tmp33565;
var inst_33486__$1 = tmp33566;
var inst_33487__$1 = tmp33564;
var inst_33488__$1 = inst_33500;
var state_33543__$1 = (function (){var statearr_33569 = state_33543;
(statearr_33569[(19)] = inst_33487__$1);

(statearr_33569[(20)] = inst_33485__$1);

(statearr_33569[(10)] = inst_33488__$1);

(statearr_33569[(11)] = inst_33486__$1);

(statearr_33569[(21)] = inst_33499);

return statearr_33569;
})();
var statearr_33570_34662 = state_33543__$1;
(statearr_33570_34662[(2)] = null);

(statearr_33570_34662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (40))){
var inst_33512 = (state_33543[(22)]);
var inst_33516 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33512);
var state_33543__$1 = state_33543;
var statearr_33571_34663 = state_33543__$1;
(statearr_33571_34663[(2)] = inst_33516);

(statearr_33571_34663[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (33))){
var inst_33503 = (state_33543[(23)]);
var inst_33505 = cljs.core.chunked_seq_QMARK_(inst_33503);
var state_33543__$1 = state_33543;
if(inst_33505){
var statearr_33572_34664 = state_33543__$1;
(statearr_33572_34664[(1)] = (36));

} else {
var statearr_33573_34665 = state_33543__$1;
(statearr_33573_34665[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (13))){
var inst_33434 = (state_33543[(24)]);
var inst_33437 = cljs.core.async.close_BANG_(inst_33434);
var state_33543__$1 = state_33543;
var statearr_33574_34666 = state_33543__$1;
(statearr_33574_34666[(2)] = inst_33437);

(statearr_33574_34666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (22))){
var inst_33457 = (state_33543[(8)]);
var inst_33460 = cljs.core.async.close_BANG_(inst_33457);
var state_33543__$1 = state_33543;
var statearr_33575_34667 = state_33543__$1;
(statearr_33575_34667[(2)] = inst_33460);

(statearr_33575_34667[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (36))){
var inst_33503 = (state_33543[(23)]);
var inst_33507 = cljs.core.chunk_first(inst_33503);
var inst_33508 = cljs.core.chunk_rest(inst_33503);
var inst_33509 = cljs.core.count(inst_33507);
var inst_33485 = inst_33508;
var inst_33486 = inst_33507;
var inst_33487 = inst_33509;
var inst_33488 = (0);
var state_33543__$1 = (function (){var statearr_33576 = state_33543;
(statearr_33576[(19)] = inst_33487);

(statearr_33576[(20)] = inst_33485);

(statearr_33576[(10)] = inst_33488);

(statearr_33576[(11)] = inst_33486);

return statearr_33576;
})();
var statearr_33577_34668 = state_33543__$1;
(statearr_33577_34668[(2)] = null);

(statearr_33577_34668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (41))){
var inst_33503 = (state_33543[(23)]);
var inst_33518 = (state_33543[(2)]);
var inst_33519 = cljs.core.next(inst_33503);
var inst_33485 = inst_33519;
var inst_33486 = null;
var inst_33487 = (0);
var inst_33488 = (0);
var state_33543__$1 = (function (){var statearr_33578 = state_33543;
(statearr_33578[(19)] = inst_33487);

(statearr_33578[(25)] = inst_33518);

(statearr_33578[(20)] = inst_33485);

(statearr_33578[(10)] = inst_33488);

(statearr_33578[(11)] = inst_33486);

return statearr_33578;
})();
var statearr_33579_34669 = state_33543__$1;
(statearr_33579_34669[(2)] = null);

(statearr_33579_34669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (43))){
var state_33543__$1 = state_33543;
var statearr_33580_34670 = state_33543__$1;
(statearr_33580_34670[(2)] = null);

(statearr_33580_34670[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (29))){
var inst_33527 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33581_34671 = state_33543__$1;
(statearr_33581_34671[(2)] = inst_33527);

(statearr_33581_34671[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (44))){
var inst_33536 = (state_33543[(2)]);
var state_33543__$1 = (function (){var statearr_33582 = state_33543;
(statearr_33582[(26)] = inst_33536);

return statearr_33582;
})();
var statearr_33583_34672 = state_33543__$1;
(statearr_33583_34672[(2)] = null);

(statearr_33583_34672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (6))){
var inst_33477 = (state_33543[(27)]);
var inst_33476 = cljs.core.deref(cs);
var inst_33477__$1 = cljs.core.keys(inst_33476);
var inst_33478 = cljs.core.count(inst_33477__$1);
var inst_33479 = cljs.core.reset_BANG_(dctr,inst_33478);
var inst_33484 = cljs.core.seq(inst_33477__$1);
var inst_33485 = inst_33484;
var inst_33486 = null;
var inst_33487 = (0);
var inst_33488 = (0);
var state_33543__$1 = (function (){var statearr_33584 = state_33543;
(statearr_33584[(19)] = inst_33487);

(statearr_33584[(28)] = inst_33479);

(statearr_33584[(27)] = inst_33477__$1);

(statearr_33584[(20)] = inst_33485);

(statearr_33584[(10)] = inst_33488);

(statearr_33584[(11)] = inst_33486);

return statearr_33584;
})();
var statearr_33585_34673 = state_33543__$1;
(statearr_33585_34673[(2)] = null);

(statearr_33585_34673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (28))){
var inst_33485 = (state_33543[(20)]);
var inst_33503 = (state_33543[(23)]);
var inst_33503__$1 = cljs.core.seq(inst_33485);
var state_33543__$1 = (function (){var statearr_33586 = state_33543;
(statearr_33586[(23)] = inst_33503__$1);

return statearr_33586;
})();
if(inst_33503__$1){
var statearr_33587_34674 = state_33543__$1;
(statearr_33587_34674[(1)] = (33));

} else {
var statearr_33588_34675 = state_33543__$1;
(statearr_33588_34675[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (25))){
var inst_33487 = (state_33543[(19)]);
var inst_33488 = (state_33543[(10)]);
var inst_33490 = (inst_33488 < inst_33487);
var inst_33491 = inst_33490;
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33491)){
var statearr_33589_34676 = state_33543__$1;
(statearr_33589_34676[(1)] = (27));

} else {
var statearr_33590_34677 = state_33543__$1;
(statearr_33590_34677[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (34))){
var state_33543__$1 = state_33543;
var statearr_33591_34678 = state_33543__$1;
(statearr_33591_34678[(2)] = null);

(statearr_33591_34678[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (17))){
var state_33543__$1 = state_33543;
var statearr_33592_34679 = state_33543__$1;
(statearr_33592_34679[(2)] = null);

(statearr_33592_34679[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (3))){
var inst_33541 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33543__$1,inst_33541);
} else {
if((state_val_33544 === (12))){
var inst_33472 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33593_34680 = state_33543__$1;
(statearr_33593_34680[(2)] = inst_33472);

(statearr_33593_34680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (2))){
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33543__$1,(4),ch);
} else {
if((state_val_33544 === (23))){
var state_33543__$1 = state_33543;
var statearr_33594_34681 = state_33543__$1;
(statearr_33594_34681[(2)] = null);

(statearr_33594_34681[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (35))){
var inst_33525 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33595_34682 = state_33543__$1;
(statearr_33595_34682[(2)] = inst_33525);

(statearr_33595_34682[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (19))){
var inst_33444 = (state_33543[(7)]);
var inst_33448 = cljs.core.chunk_first(inst_33444);
var inst_33449 = cljs.core.chunk_rest(inst_33444);
var inst_33450 = cljs.core.count(inst_33448);
var inst_33422 = inst_33449;
var inst_33423 = inst_33448;
var inst_33424 = inst_33450;
var inst_33425 = (0);
var state_33543__$1 = (function (){var statearr_33596 = state_33543;
(statearr_33596[(13)] = inst_33425);

(statearr_33596[(14)] = inst_33422);

(statearr_33596[(16)] = inst_33424);

(statearr_33596[(17)] = inst_33423);

return statearr_33596;
})();
var statearr_33597_34683 = state_33543__$1;
(statearr_33597_34683[(2)] = null);

(statearr_33597_34683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (11))){
var inst_33422 = (state_33543[(14)]);
var inst_33444 = (state_33543[(7)]);
var inst_33444__$1 = cljs.core.seq(inst_33422);
var state_33543__$1 = (function (){var statearr_33598 = state_33543;
(statearr_33598[(7)] = inst_33444__$1);

return statearr_33598;
})();
if(inst_33444__$1){
var statearr_33599_34684 = state_33543__$1;
(statearr_33599_34684[(1)] = (16));

} else {
var statearr_33600_34685 = state_33543__$1;
(statearr_33600_34685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (9))){
var inst_33474 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33601_34688 = state_33543__$1;
(statearr_33601_34688[(2)] = inst_33474);

(statearr_33601_34688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (5))){
var inst_33420 = cljs.core.deref(cs);
var inst_33421 = cljs.core.seq(inst_33420);
var inst_33422 = inst_33421;
var inst_33423 = null;
var inst_33424 = (0);
var inst_33425 = (0);
var state_33543__$1 = (function (){var statearr_33602 = state_33543;
(statearr_33602[(13)] = inst_33425);

(statearr_33602[(14)] = inst_33422);

(statearr_33602[(16)] = inst_33424);

(statearr_33602[(17)] = inst_33423);

return statearr_33602;
})();
var statearr_33603_34692 = state_33543__$1;
(statearr_33603_34692[(2)] = null);

(statearr_33603_34692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (14))){
var state_33543__$1 = state_33543;
var statearr_33604_34693 = state_33543__$1;
(statearr_33604_34693[(2)] = null);

(statearr_33604_34693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (45))){
var inst_33533 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33605_34694 = state_33543__$1;
(statearr_33605_34694[(2)] = inst_33533);

(statearr_33605_34694[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (26))){
var inst_33477 = (state_33543[(27)]);
var inst_33529 = (state_33543[(2)]);
var inst_33530 = cljs.core.seq(inst_33477);
var state_33543__$1 = (function (){var statearr_33606 = state_33543;
(statearr_33606[(29)] = inst_33529);

return statearr_33606;
})();
if(inst_33530){
var statearr_33607_34696 = state_33543__$1;
(statearr_33607_34696[(1)] = (42));

} else {
var statearr_33608_34697 = state_33543__$1;
(statearr_33608_34697[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (16))){
var inst_33444 = (state_33543[(7)]);
var inst_33446 = cljs.core.chunked_seq_QMARK_(inst_33444);
var state_33543__$1 = state_33543;
if(inst_33446){
var statearr_33609_34698 = state_33543__$1;
(statearr_33609_34698[(1)] = (19));

} else {
var statearr_33610_34699 = state_33543__$1;
(statearr_33610_34699[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (38))){
var inst_33522 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33611_34700 = state_33543__$1;
(statearr_33611_34700[(2)] = inst_33522);

(statearr_33611_34700[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (30))){
var state_33543__$1 = state_33543;
var statearr_33612_34702 = state_33543__$1;
(statearr_33612_34702[(2)] = null);

(statearr_33612_34702[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (10))){
var inst_33425 = (state_33543[(13)]);
var inst_33423 = (state_33543[(17)]);
var inst_33433 = cljs.core._nth(inst_33423,inst_33425);
var inst_33434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33433,(0),null);
var inst_33435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33433,(1),null);
var state_33543__$1 = (function (){var statearr_33613 = state_33543;
(statearr_33613[(24)] = inst_33434);

return statearr_33613;
})();
if(cljs.core.truth_(inst_33435)){
var statearr_33614_34704 = state_33543__$1;
(statearr_33614_34704[(1)] = (13));

} else {
var statearr_33615_34705 = state_33543__$1;
(statearr_33615_34705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (18))){
var inst_33470 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33616_34706 = state_33543__$1;
(statearr_33616_34706[(2)] = inst_33470);

(statearr_33616_34706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (42))){
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33543__$1,(45),dchan);
} else {
if((state_val_33544 === (37))){
var inst_33512 = (state_33543[(22)]);
var inst_33413 = (state_33543[(9)]);
var inst_33503 = (state_33543[(23)]);
var inst_33512__$1 = cljs.core.first(inst_33503);
var inst_33513 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33512__$1,inst_33413,done);
var state_33543__$1 = (function (){var statearr_33617 = state_33543;
(statearr_33617[(22)] = inst_33512__$1);

return statearr_33617;
})();
if(cljs.core.truth_(inst_33513)){
var statearr_33618_34707 = state_33543__$1;
(statearr_33618_34707[(1)] = (39));

} else {
var statearr_33619_34708 = state_33543__$1;
(statearr_33619_34708[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (8))){
var inst_33425 = (state_33543[(13)]);
var inst_33424 = (state_33543[(16)]);
var inst_33427 = (inst_33425 < inst_33424);
var inst_33428 = inst_33427;
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33428)){
var statearr_33620_34709 = state_33543__$1;
(statearr_33620_34709[(1)] = (10));

} else {
var statearr_33621_34710 = state_33543__$1;
(statearr_33621_34710[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32837__auto__ = null;
var cljs$core$async$mult_$_state_machine__32837__auto____0 = (function (){
var statearr_33622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33622[(0)] = cljs$core$async$mult_$_state_machine__32837__auto__);

(statearr_33622[(1)] = (1));

return statearr_33622;
});
var cljs$core$async$mult_$_state_machine__32837__auto____1 = (function (state_33543){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33543);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33623){var ex__32840__auto__ = e33623;
var statearr_33624_34711 = state_33543;
(statearr_33624_34711[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33543[(4)]))){
var statearr_33625_34712 = state_33543;
(statearr_33625_34712[(1)] = cljs.core.first((state_33543[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34713 = state_33543;
state_33543 = G__34713;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32837__auto__ = function(state_33543){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32837__auto____1.call(this,state_33543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32837__auto____0;
cljs$core$async$mult_$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32837__auto____1;
return cljs$core$async$mult_$_state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33626 = f__32920__auto__();
(statearr_33626[(6)] = c__32919__auto___34644);

return statearr_33626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33628 = arguments.length;
switch (G__33628) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34715 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34715(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34717 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34717(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34721 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34721(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34724 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34724(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34727 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34727(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34731 = arguments.length;
var i__4819__auto___34732 = (0);
while(true){
if((i__4819__auto___34732 < len__4818__auto___34731)){
args__4824__auto__.push((arguments[i__4819__auto___34732]));

var G__34733 = (i__4819__auto___34732 + (1));
i__4819__auto___34732 = G__34733;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33633){
var map__33634 = p__33633;
var map__33634__$1 = cljs.core.__destructure_map(map__33634);
var opts = map__33634__$1;
var statearr_33635_34738 = state;
(statearr_33635_34738[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33636_34739 = state;
(statearr_33636_34739[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33637_34746 = state;
(statearr_33637_34746[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33629){
var G__33630 = cljs.core.first(seq33629);
var seq33629__$1 = cljs.core.next(seq33629);
var G__33631 = cljs.core.first(seq33629__$1);
var seq33629__$2 = cljs.core.next(seq33629__$1);
var G__33632 = cljs.core.first(seq33629__$2);
var seq33629__$3 = cljs.core.next(seq33629__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33630,G__33631,G__33632,seq33629__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33638 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33639){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33639 = meta33639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33640,meta33639__$1){
var self__ = this;
var _33640__$1 = this;
return (new cljs.core.async.t_cljs$core$async33638(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33639__$1));
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33640){
var self__ = this;
var _33640__$1 = this;
return self__.meta33639;
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33639","meta33639",-1221976122,null)], null);
}));

(cljs.core.async.t_cljs$core$async33638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33638");

(cljs.core.async.t_cljs$core$async33638.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33638.
 */
cljs.core.async.__GT_t_cljs$core$async33638 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33638(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33639){
return (new cljs.core.async.t_cljs$core$async33638(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33639));
});

}

return (new cljs.core.async.t_cljs$core$async33638(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32919__auto___34753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33708){
var state_val_33709 = (state_33708[(1)]);
if((state_val_33709 === (7))){
var inst_33668 = (state_33708[(2)]);
var state_33708__$1 = state_33708;
if(cljs.core.truth_(inst_33668)){
var statearr_33710_34754 = state_33708__$1;
(statearr_33710_34754[(1)] = (8));

} else {
var statearr_33711_34755 = state_33708__$1;
(statearr_33711_34755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (20))){
var inst_33661 = (state_33708[(7)]);
var state_33708__$1 = state_33708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33708__$1,(23),out,inst_33661);
} else {
if((state_val_33709 === (1))){
var inst_33644 = calc_state();
var inst_33645 = cljs.core.__destructure_map(inst_33644);
var inst_33646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33645,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33645,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33645,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33649 = inst_33644;
var state_33708__$1 = (function (){var statearr_33712 = state_33708;
(statearr_33712[(8)] = inst_33646);

(statearr_33712[(9)] = inst_33647);

(statearr_33712[(10)] = inst_33649);

(statearr_33712[(11)] = inst_33648);

return statearr_33712;
})();
var statearr_33713_34756 = state_33708__$1;
(statearr_33713_34756[(2)] = null);

(statearr_33713_34756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (24))){
var inst_33652 = (state_33708[(12)]);
var inst_33649 = inst_33652;
var state_33708__$1 = (function (){var statearr_33714 = state_33708;
(statearr_33714[(10)] = inst_33649);

return statearr_33714;
})();
var statearr_33715_34757 = state_33708__$1;
(statearr_33715_34757[(2)] = null);

(statearr_33715_34757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (4))){
var inst_33663 = (state_33708[(13)]);
var inst_33661 = (state_33708[(7)]);
var inst_33660 = (state_33708[(2)]);
var inst_33661__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33660,(0),null);
var inst_33662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33660,(1),null);
var inst_33663__$1 = (inst_33661__$1 == null);
var state_33708__$1 = (function (){var statearr_33716 = state_33708;
(statearr_33716[(13)] = inst_33663__$1);

(statearr_33716[(7)] = inst_33661__$1);

(statearr_33716[(14)] = inst_33662);

return statearr_33716;
})();
if(cljs.core.truth_(inst_33663__$1)){
var statearr_33717_34764 = state_33708__$1;
(statearr_33717_34764[(1)] = (5));

} else {
var statearr_33718_34765 = state_33708__$1;
(statearr_33718_34765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (15))){
var inst_33682 = (state_33708[(15)]);
var inst_33653 = (state_33708[(16)]);
var inst_33682__$1 = cljs.core.empty_QMARK_(inst_33653);
var state_33708__$1 = (function (){var statearr_33719 = state_33708;
(statearr_33719[(15)] = inst_33682__$1);

return statearr_33719;
})();
if(inst_33682__$1){
var statearr_33720_34766 = state_33708__$1;
(statearr_33720_34766[(1)] = (17));

} else {
var statearr_33721_34767 = state_33708__$1;
(statearr_33721_34767[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (21))){
var inst_33652 = (state_33708[(12)]);
var inst_33649 = inst_33652;
var state_33708__$1 = (function (){var statearr_33722 = state_33708;
(statearr_33722[(10)] = inst_33649);

return statearr_33722;
})();
var statearr_33723_34768 = state_33708__$1;
(statearr_33723_34768[(2)] = null);

(statearr_33723_34768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (13))){
var inst_33675 = (state_33708[(2)]);
var inst_33676 = calc_state();
var inst_33649 = inst_33676;
var state_33708__$1 = (function (){var statearr_33724 = state_33708;
(statearr_33724[(10)] = inst_33649);

(statearr_33724[(17)] = inst_33675);

return statearr_33724;
})();
var statearr_33725_34769 = state_33708__$1;
(statearr_33725_34769[(2)] = null);

(statearr_33725_34769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (22))){
var inst_33702 = (state_33708[(2)]);
var state_33708__$1 = state_33708;
var statearr_33726_34770 = state_33708__$1;
(statearr_33726_34770[(2)] = inst_33702);

(statearr_33726_34770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (6))){
var inst_33662 = (state_33708[(14)]);
var inst_33666 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33662,change);
var state_33708__$1 = state_33708;
var statearr_33727_34771 = state_33708__$1;
(statearr_33727_34771[(2)] = inst_33666);

(statearr_33727_34771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (25))){
var state_33708__$1 = state_33708;
var statearr_33728_34772 = state_33708__$1;
(statearr_33728_34772[(2)] = null);

(statearr_33728_34772[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (17))){
var inst_33662 = (state_33708[(14)]);
var inst_33654 = (state_33708[(18)]);
var inst_33684 = (inst_33654.cljs$core$IFn$_invoke$arity$1 ? inst_33654.cljs$core$IFn$_invoke$arity$1(inst_33662) : inst_33654.call(null,inst_33662));
var inst_33685 = cljs.core.not(inst_33684);
var state_33708__$1 = state_33708;
var statearr_33729_34773 = state_33708__$1;
(statearr_33729_34773[(2)] = inst_33685);

(statearr_33729_34773[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (3))){
var inst_33706 = (state_33708[(2)]);
var state_33708__$1 = state_33708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33708__$1,inst_33706);
} else {
if((state_val_33709 === (12))){
var state_33708__$1 = state_33708;
var statearr_33730_34774 = state_33708__$1;
(statearr_33730_34774[(2)] = null);

(statearr_33730_34774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (2))){
var inst_33649 = (state_33708[(10)]);
var inst_33652 = (state_33708[(12)]);
var inst_33652__$1 = cljs.core.__destructure_map(inst_33649);
var inst_33653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33652__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33652__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33652__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33708__$1 = (function (){var statearr_33731 = state_33708;
(statearr_33731[(12)] = inst_33652__$1);

(statearr_33731[(18)] = inst_33654);

(statearr_33731[(16)] = inst_33653);

return statearr_33731;
})();
return cljs.core.async.ioc_alts_BANG_(state_33708__$1,(4),inst_33655);
} else {
if((state_val_33709 === (23))){
var inst_33693 = (state_33708[(2)]);
var state_33708__$1 = state_33708;
if(cljs.core.truth_(inst_33693)){
var statearr_33732_34775 = state_33708__$1;
(statearr_33732_34775[(1)] = (24));

} else {
var statearr_33733_34776 = state_33708__$1;
(statearr_33733_34776[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (19))){
var inst_33688 = (state_33708[(2)]);
var state_33708__$1 = state_33708;
var statearr_33734_34783 = state_33708__$1;
(statearr_33734_34783[(2)] = inst_33688);

(statearr_33734_34783[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (11))){
var inst_33662 = (state_33708[(14)]);
var inst_33672 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33662);
var state_33708__$1 = state_33708;
var statearr_33735_34784 = state_33708__$1;
(statearr_33735_34784[(2)] = inst_33672);

(statearr_33735_34784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (9))){
var inst_33679 = (state_33708[(19)]);
var inst_33662 = (state_33708[(14)]);
var inst_33653 = (state_33708[(16)]);
var inst_33679__$1 = (inst_33653.cljs$core$IFn$_invoke$arity$1 ? inst_33653.cljs$core$IFn$_invoke$arity$1(inst_33662) : inst_33653.call(null,inst_33662));
var state_33708__$1 = (function (){var statearr_33736 = state_33708;
(statearr_33736[(19)] = inst_33679__$1);

return statearr_33736;
})();
if(cljs.core.truth_(inst_33679__$1)){
var statearr_33737_34785 = state_33708__$1;
(statearr_33737_34785[(1)] = (14));

} else {
var statearr_33738_34786 = state_33708__$1;
(statearr_33738_34786[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (5))){
var inst_33663 = (state_33708[(13)]);
var state_33708__$1 = state_33708;
var statearr_33739_34787 = state_33708__$1;
(statearr_33739_34787[(2)] = inst_33663);

(statearr_33739_34787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (14))){
var inst_33679 = (state_33708[(19)]);
var state_33708__$1 = state_33708;
var statearr_33740_34788 = state_33708__$1;
(statearr_33740_34788[(2)] = inst_33679);

(statearr_33740_34788[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (26))){
var inst_33698 = (state_33708[(2)]);
var state_33708__$1 = state_33708;
var statearr_33741_34789 = state_33708__$1;
(statearr_33741_34789[(2)] = inst_33698);

(statearr_33741_34789[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (16))){
var inst_33690 = (state_33708[(2)]);
var state_33708__$1 = state_33708;
if(cljs.core.truth_(inst_33690)){
var statearr_33742_34790 = state_33708__$1;
(statearr_33742_34790[(1)] = (20));

} else {
var statearr_33743_34791 = state_33708__$1;
(statearr_33743_34791[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (10))){
var inst_33704 = (state_33708[(2)]);
var state_33708__$1 = state_33708;
var statearr_33744_34792 = state_33708__$1;
(statearr_33744_34792[(2)] = inst_33704);

(statearr_33744_34792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (18))){
var inst_33682 = (state_33708[(15)]);
var state_33708__$1 = state_33708;
var statearr_33745_34793 = state_33708__$1;
(statearr_33745_34793[(2)] = inst_33682);

(statearr_33745_34793[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33709 === (8))){
var inst_33661 = (state_33708[(7)]);
var inst_33670 = (inst_33661 == null);
var state_33708__$1 = state_33708;
if(cljs.core.truth_(inst_33670)){
var statearr_33746_34794 = state_33708__$1;
(statearr_33746_34794[(1)] = (11));

} else {
var statearr_33747_34795 = state_33708__$1;
(statearr_33747_34795[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32837__auto__ = null;
var cljs$core$async$mix_$_state_machine__32837__auto____0 = (function (){
var statearr_33748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33748[(0)] = cljs$core$async$mix_$_state_machine__32837__auto__);

(statearr_33748[(1)] = (1));

return statearr_33748;
});
var cljs$core$async$mix_$_state_machine__32837__auto____1 = (function (state_33708){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33708);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33749){var ex__32840__auto__ = e33749;
var statearr_33750_34796 = state_33708;
(statearr_33750_34796[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33708[(4)]))){
var statearr_33751_34797 = state_33708;
(statearr_33751_34797[(1)] = cljs.core.first((state_33708[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34798 = state_33708;
state_33708 = G__34798;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32837__auto__ = function(state_33708){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32837__auto____1.call(this,state_33708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32837__auto____0;
cljs$core$async$mix_$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32837__auto____1;
return cljs$core$async$mix_$_state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33752 = f__32920__auto__();
(statearr_33752[(6)] = c__32919__auto___34753);

return statearr_33752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34799 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34799(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34800 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34800(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34801 = (function() {
var G__34802 = null;
var G__34802__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34802__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34802 = function(p,v){
switch(arguments.length){
case 1:
return G__34802__1.call(this,p);
case 2:
return G__34802__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34802.cljs$core$IFn$_invoke$arity$1 = G__34802__1;
G__34802.cljs$core$IFn$_invoke$arity$2 = G__34802__2;
return G__34802;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33754 = arguments.length;
switch (G__33754) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34801(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34801(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33757 = arguments.length;
switch (G__33757) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33755_SHARP_){
if(cljs.core.truth_((p1__33755_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33755_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33755_SHARP_.call(null,topic)))){
return p1__33755_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33755_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33758 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33759){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33759 = meta33759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33760,meta33759__$1){
var self__ = this;
var _33760__$1 = this;
return (new cljs.core.async.t_cljs$core$async33758(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33759__$1));
}));

(cljs.core.async.t_cljs$core$async33758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33760){
var self__ = this;
var _33760__$1 = this;
return self__.meta33759;
}));

(cljs.core.async.t_cljs$core$async33758.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33758.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33758.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33758.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33758.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33758.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33758.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33759","meta33759",-1136541584,null)], null);
}));

(cljs.core.async.t_cljs$core$async33758.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33758");

(cljs.core.async.t_cljs$core$async33758.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33758");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33758.
 */
cljs.core.async.__GT_t_cljs$core$async33758 = (function cljs$core$async$__GT_t_cljs$core$async33758(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33759){
return (new cljs.core.async.t_cljs$core$async33758(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33759));
});

}

return (new cljs.core.async.t_cljs$core$async33758(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32919__auto___34810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33832){
var state_val_33833 = (state_33832[(1)]);
if((state_val_33833 === (7))){
var inst_33828 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
var statearr_33834_34811 = state_33832__$1;
(statearr_33834_34811[(2)] = inst_33828);

(statearr_33834_34811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (20))){
var state_33832__$1 = state_33832;
var statearr_33835_34812 = state_33832__$1;
(statearr_33835_34812[(2)] = null);

(statearr_33835_34812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (1))){
var state_33832__$1 = state_33832;
var statearr_33836_34813 = state_33832__$1;
(statearr_33836_34813[(2)] = null);

(statearr_33836_34813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (24))){
var inst_33811 = (state_33832[(7)]);
var inst_33820 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33811);
var state_33832__$1 = state_33832;
var statearr_33837_34814 = state_33832__$1;
(statearr_33837_34814[(2)] = inst_33820);

(statearr_33837_34814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (4))){
var inst_33763 = (state_33832[(8)]);
var inst_33763__$1 = (state_33832[(2)]);
var inst_33764 = (inst_33763__$1 == null);
var state_33832__$1 = (function (){var statearr_33838 = state_33832;
(statearr_33838[(8)] = inst_33763__$1);

return statearr_33838;
})();
if(cljs.core.truth_(inst_33764)){
var statearr_33839_34815 = state_33832__$1;
(statearr_33839_34815[(1)] = (5));

} else {
var statearr_33840_34816 = state_33832__$1;
(statearr_33840_34816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (15))){
var inst_33805 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
var statearr_33841_34817 = state_33832__$1;
(statearr_33841_34817[(2)] = inst_33805);

(statearr_33841_34817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (21))){
var inst_33825 = (state_33832[(2)]);
var state_33832__$1 = (function (){var statearr_33842 = state_33832;
(statearr_33842[(9)] = inst_33825);

return statearr_33842;
})();
var statearr_33843_34818 = state_33832__$1;
(statearr_33843_34818[(2)] = null);

(statearr_33843_34818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (13))){
var inst_33787 = (state_33832[(10)]);
var inst_33789 = cljs.core.chunked_seq_QMARK_(inst_33787);
var state_33832__$1 = state_33832;
if(inst_33789){
var statearr_33844_34819 = state_33832__$1;
(statearr_33844_34819[(1)] = (16));

} else {
var statearr_33845_34820 = state_33832__$1;
(statearr_33845_34820[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (22))){
var inst_33817 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
if(cljs.core.truth_(inst_33817)){
var statearr_33846_34821 = state_33832__$1;
(statearr_33846_34821[(1)] = (23));

} else {
var statearr_33847_34822 = state_33832__$1;
(statearr_33847_34822[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (6))){
var inst_33763 = (state_33832[(8)]);
var inst_33811 = (state_33832[(7)]);
var inst_33813 = (state_33832[(11)]);
var inst_33811__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33763) : topic_fn.call(null,inst_33763));
var inst_33812 = cljs.core.deref(mults);
var inst_33813__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33812,inst_33811__$1);
var state_33832__$1 = (function (){var statearr_33848 = state_33832;
(statearr_33848[(7)] = inst_33811__$1);

(statearr_33848[(11)] = inst_33813__$1);

return statearr_33848;
})();
if(cljs.core.truth_(inst_33813__$1)){
var statearr_33849_34824 = state_33832__$1;
(statearr_33849_34824[(1)] = (19));

} else {
var statearr_33850_34825 = state_33832__$1;
(statearr_33850_34825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (25))){
var inst_33822 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
var statearr_33851_34826 = state_33832__$1;
(statearr_33851_34826[(2)] = inst_33822);

(statearr_33851_34826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (17))){
var inst_33787 = (state_33832[(10)]);
var inst_33796 = cljs.core.first(inst_33787);
var inst_33797 = cljs.core.async.muxch_STAR_(inst_33796);
var inst_33798 = cljs.core.async.close_BANG_(inst_33797);
var inst_33799 = cljs.core.next(inst_33787);
var inst_33773 = inst_33799;
var inst_33774 = null;
var inst_33775 = (0);
var inst_33776 = (0);
var state_33832__$1 = (function (){var statearr_33852 = state_33832;
(statearr_33852[(12)] = inst_33775);

(statearr_33852[(13)] = inst_33773);

(statearr_33852[(14)] = inst_33798);

(statearr_33852[(15)] = inst_33774);

(statearr_33852[(16)] = inst_33776);

return statearr_33852;
})();
var statearr_33853_34828 = state_33832__$1;
(statearr_33853_34828[(2)] = null);

(statearr_33853_34828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (3))){
var inst_33830 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33832__$1,inst_33830);
} else {
if((state_val_33833 === (12))){
var inst_33807 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
var statearr_33854_34829 = state_33832__$1;
(statearr_33854_34829[(2)] = inst_33807);

(statearr_33854_34829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (2))){
var state_33832__$1 = state_33832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33832__$1,(4),ch);
} else {
if((state_val_33833 === (23))){
var state_33832__$1 = state_33832;
var statearr_33855_34830 = state_33832__$1;
(statearr_33855_34830[(2)] = null);

(statearr_33855_34830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (19))){
var inst_33763 = (state_33832[(8)]);
var inst_33813 = (state_33832[(11)]);
var inst_33815 = cljs.core.async.muxch_STAR_(inst_33813);
var state_33832__$1 = state_33832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33832__$1,(22),inst_33815,inst_33763);
} else {
if((state_val_33833 === (11))){
var inst_33773 = (state_33832[(13)]);
var inst_33787 = (state_33832[(10)]);
var inst_33787__$1 = cljs.core.seq(inst_33773);
var state_33832__$1 = (function (){var statearr_33856 = state_33832;
(statearr_33856[(10)] = inst_33787__$1);

return statearr_33856;
})();
if(inst_33787__$1){
var statearr_33857_34832 = state_33832__$1;
(statearr_33857_34832[(1)] = (13));

} else {
var statearr_33858_34833 = state_33832__$1;
(statearr_33858_34833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (9))){
var inst_33809 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
var statearr_33859_34835 = state_33832__$1;
(statearr_33859_34835[(2)] = inst_33809);

(statearr_33859_34835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (5))){
var inst_33770 = cljs.core.deref(mults);
var inst_33771 = cljs.core.vals(inst_33770);
var inst_33772 = cljs.core.seq(inst_33771);
var inst_33773 = inst_33772;
var inst_33774 = null;
var inst_33775 = (0);
var inst_33776 = (0);
var state_33832__$1 = (function (){var statearr_33860 = state_33832;
(statearr_33860[(12)] = inst_33775);

(statearr_33860[(13)] = inst_33773);

(statearr_33860[(15)] = inst_33774);

(statearr_33860[(16)] = inst_33776);

return statearr_33860;
})();
var statearr_33861_34836 = state_33832__$1;
(statearr_33861_34836[(2)] = null);

(statearr_33861_34836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (14))){
var state_33832__$1 = state_33832;
var statearr_33865_34837 = state_33832__$1;
(statearr_33865_34837[(2)] = null);

(statearr_33865_34837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (16))){
var inst_33787 = (state_33832[(10)]);
var inst_33791 = cljs.core.chunk_first(inst_33787);
var inst_33792 = cljs.core.chunk_rest(inst_33787);
var inst_33793 = cljs.core.count(inst_33791);
var inst_33773 = inst_33792;
var inst_33774 = inst_33791;
var inst_33775 = inst_33793;
var inst_33776 = (0);
var state_33832__$1 = (function (){var statearr_33866 = state_33832;
(statearr_33866[(12)] = inst_33775);

(statearr_33866[(13)] = inst_33773);

(statearr_33866[(15)] = inst_33774);

(statearr_33866[(16)] = inst_33776);

return statearr_33866;
})();
var statearr_33867_34838 = state_33832__$1;
(statearr_33867_34838[(2)] = null);

(statearr_33867_34838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (10))){
var inst_33775 = (state_33832[(12)]);
var inst_33773 = (state_33832[(13)]);
var inst_33774 = (state_33832[(15)]);
var inst_33776 = (state_33832[(16)]);
var inst_33781 = cljs.core._nth(inst_33774,inst_33776);
var inst_33782 = cljs.core.async.muxch_STAR_(inst_33781);
var inst_33783 = cljs.core.async.close_BANG_(inst_33782);
var inst_33784 = (inst_33776 + (1));
var tmp33862 = inst_33775;
var tmp33863 = inst_33773;
var tmp33864 = inst_33774;
var inst_33773__$1 = tmp33863;
var inst_33774__$1 = tmp33864;
var inst_33775__$1 = tmp33862;
var inst_33776__$1 = inst_33784;
var state_33832__$1 = (function (){var statearr_33868 = state_33832;
(statearr_33868[(12)] = inst_33775__$1);

(statearr_33868[(13)] = inst_33773__$1);

(statearr_33868[(17)] = inst_33783);

(statearr_33868[(15)] = inst_33774__$1);

(statearr_33868[(16)] = inst_33776__$1);

return statearr_33868;
})();
var statearr_33869_34839 = state_33832__$1;
(statearr_33869_34839[(2)] = null);

(statearr_33869_34839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (18))){
var inst_33802 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
var statearr_33870_34840 = state_33832__$1;
(statearr_33870_34840[(2)] = inst_33802);

(statearr_33870_34840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (8))){
var inst_33775 = (state_33832[(12)]);
var inst_33776 = (state_33832[(16)]);
var inst_33778 = (inst_33776 < inst_33775);
var inst_33779 = inst_33778;
var state_33832__$1 = state_33832;
if(cljs.core.truth_(inst_33779)){
var statearr_33871_34841 = state_33832__$1;
(statearr_33871_34841[(1)] = (10));

} else {
var statearr_33872_34842 = state_33832__$1;
(statearr_33872_34842[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32837__auto__ = null;
var cljs$core$async$state_machine__32837__auto____0 = (function (){
var statearr_33873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33873[(0)] = cljs$core$async$state_machine__32837__auto__);

(statearr_33873[(1)] = (1));

return statearr_33873;
});
var cljs$core$async$state_machine__32837__auto____1 = (function (state_33832){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33832);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33874){var ex__32840__auto__ = e33874;
var statearr_33875_34843 = state_33832;
(statearr_33875_34843[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33832[(4)]))){
var statearr_33876_34844 = state_33832;
(statearr_33876_34844[(1)] = cljs.core.first((state_33832[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34845 = state_33832;
state_33832 = G__34845;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$state_machine__32837__auto__ = function(state_33832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32837__auto____1.call(this,state_33832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32837__auto____0;
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32837__auto____1;
return cljs$core$async$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33877 = f__32920__auto__();
(statearr_33877[(6)] = c__32919__auto___34810);

return statearr_33877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33879 = arguments.length;
switch (G__33879) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33881 = arguments.length;
switch (G__33881) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33883 = arguments.length;
switch (G__33883) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32919__auto___34851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33926){
var state_val_33927 = (state_33926[(1)]);
if((state_val_33927 === (7))){
var state_33926__$1 = state_33926;
var statearr_33928_34852 = state_33926__$1;
(statearr_33928_34852[(2)] = null);

(statearr_33928_34852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (1))){
var state_33926__$1 = state_33926;
var statearr_33929_34853 = state_33926__$1;
(statearr_33929_34853[(2)] = null);

(statearr_33929_34853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (4))){
var inst_33887 = (state_33926[(7)]);
var inst_33886 = (state_33926[(8)]);
var inst_33889 = (inst_33887 < inst_33886);
var state_33926__$1 = state_33926;
if(cljs.core.truth_(inst_33889)){
var statearr_33930_34854 = state_33926__$1;
(statearr_33930_34854[(1)] = (6));

} else {
var statearr_33931_34855 = state_33926__$1;
(statearr_33931_34855[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (15))){
var inst_33912 = (state_33926[(9)]);
var inst_33917 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33912);
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33926__$1,(17),out,inst_33917);
} else {
if((state_val_33927 === (13))){
var inst_33912 = (state_33926[(9)]);
var inst_33912__$1 = (state_33926[(2)]);
var inst_33913 = cljs.core.some(cljs.core.nil_QMARK_,inst_33912__$1);
var state_33926__$1 = (function (){var statearr_33932 = state_33926;
(statearr_33932[(9)] = inst_33912__$1);

return statearr_33932;
})();
if(cljs.core.truth_(inst_33913)){
var statearr_33933_34856 = state_33926__$1;
(statearr_33933_34856[(1)] = (14));

} else {
var statearr_33934_34857 = state_33926__$1;
(statearr_33934_34857[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (6))){
var state_33926__$1 = state_33926;
var statearr_33935_34858 = state_33926__$1;
(statearr_33935_34858[(2)] = null);

(statearr_33935_34858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (17))){
var inst_33919 = (state_33926[(2)]);
var state_33926__$1 = (function (){var statearr_33937 = state_33926;
(statearr_33937[(10)] = inst_33919);

return statearr_33937;
})();
var statearr_33938_34859 = state_33926__$1;
(statearr_33938_34859[(2)] = null);

(statearr_33938_34859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (3))){
var inst_33924 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33926__$1,inst_33924);
} else {
if((state_val_33927 === (12))){
var _ = (function (){var statearr_33939 = state_33926;
(statearr_33939[(4)] = cljs.core.rest((state_33926[(4)])));

return statearr_33939;
})();
var state_33926__$1 = state_33926;
var ex33936 = (state_33926__$1[(2)]);
var statearr_33940_34860 = state_33926__$1;
(statearr_33940_34860[(5)] = ex33936);


if((ex33936 instanceof Object)){
var statearr_33941_34861 = state_33926__$1;
(statearr_33941_34861[(1)] = (11));

(statearr_33941_34861[(5)] = null);

} else {
throw ex33936;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (2))){
var inst_33885 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33886 = cnt;
var inst_33887 = (0);
var state_33926__$1 = (function (){var statearr_33942 = state_33926;
(statearr_33942[(7)] = inst_33887);

(statearr_33942[(11)] = inst_33885);

(statearr_33942[(8)] = inst_33886);

return statearr_33942;
})();
var statearr_33943_34862 = state_33926__$1;
(statearr_33943_34862[(2)] = null);

(statearr_33943_34862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (11))){
var inst_33891 = (state_33926[(2)]);
var inst_33892 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33926__$1 = (function (){var statearr_33944 = state_33926;
(statearr_33944[(12)] = inst_33891);

return statearr_33944;
})();
var statearr_33945_34863 = state_33926__$1;
(statearr_33945_34863[(2)] = inst_33892);

(statearr_33945_34863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (9))){
var inst_33887 = (state_33926[(7)]);
var _ = (function (){var statearr_33946 = state_33926;
(statearr_33946[(4)] = cljs.core.cons((12),(state_33926[(4)])));

return statearr_33946;
})();
var inst_33898 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33887) : chs__$1.call(null,inst_33887));
var inst_33899 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33887) : done.call(null,inst_33887));
var inst_33900 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33898,inst_33899);
var ___$1 = (function (){var statearr_33947 = state_33926;
(statearr_33947[(4)] = cljs.core.rest((state_33926[(4)])));

return statearr_33947;
})();
var state_33926__$1 = state_33926;
var statearr_33948_34864 = state_33926__$1;
(statearr_33948_34864[(2)] = inst_33900);

(statearr_33948_34864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (5))){
var inst_33910 = (state_33926[(2)]);
var state_33926__$1 = (function (){var statearr_33949 = state_33926;
(statearr_33949[(13)] = inst_33910);

return statearr_33949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33926__$1,(13),dchan);
} else {
if((state_val_33927 === (14))){
var inst_33915 = cljs.core.async.close_BANG_(out);
var state_33926__$1 = state_33926;
var statearr_33950_34866 = state_33926__$1;
(statearr_33950_34866[(2)] = inst_33915);

(statearr_33950_34866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (16))){
var inst_33922 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
var statearr_33951_34867 = state_33926__$1;
(statearr_33951_34867[(2)] = inst_33922);

(statearr_33951_34867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (10))){
var inst_33887 = (state_33926[(7)]);
var inst_33903 = (state_33926[(2)]);
var inst_33904 = (inst_33887 + (1));
var inst_33887__$1 = inst_33904;
var state_33926__$1 = (function (){var statearr_33952 = state_33926;
(statearr_33952[(7)] = inst_33887__$1);

(statearr_33952[(14)] = inst_33903);

return statearr_33952;
})();
var statearr_33953_34868 = state_33926__$1;
(statearr_33953_34868[(2)] = null);

(statearr_33953_34868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (8))){
var inst_33908 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
var statearr_33954_34873 = state_33926__$1;
(statearr_33954_34873[(2)] = inst_33908);

(statearr_33954_34873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32837__auto__ = null;
var cljs$core$async$state_machine__32837__auto____0 = (function (){
var statearr_33955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33955[(0)] = cljs$core$async$state_machine__32837__auto__);

(statearr_33955[(1)] = (1));

return statearr_33955;
});
var cljs$core$async$state_machine__32837__auto____1 = (function (state_33926){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33926);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e33956){var ex__32840__auto__ = e33956;
var statearr_33957_34874 = state_33926;
(statearr_33957_34874[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33926[(4)]))){
var statearr_33958_34875 = state_33926;
(statearr_33958_34875[(1)] = cljs.core.first((state_33926[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34876 = state_33926;
state_33926 = G__34876;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$state_machine__32837__auto__ = function(state_33926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32837__auto____1.call(this,state_33926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32837__auto____0;
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32837__auto____1;
return cljs$core$async$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_33959 = f__32920__auto__();
(statearr_33959[(6)] = c__32919__auto___34851);

return statearr_33959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33962 = arguments.length;
switch (G__33962) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32919__auto___34878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_33994){
var state_val_33995 = (state_33994[(1)]);
if((state_val_33995 === (7))){
var inst_33973 = (state_33994[(7)]);
var inst_33974 = (state_33994[(8)]);
var inst_33973__$1 = (state_33994[(2)]);
var inst_33974__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33973__$1,(0),null);
var inst_33975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33973__$1,(1),null);
var inst_33976 = (inst_33974__$1 == null);
var state_33994__$1 = (function (){var statearr_33996 = state_33994;
(statearr_33996[(7)] = inst_33973__$1);

(statearr_33996[(8)] = inst_33974__$1);

(statearr_33996[(9)] = inst_33975);

return statearr_33996;
})();
if(cljs.core.truth_(inst_33976)){
var statearr_33997_34879 = state_33994__$1;
(statearr_33997_34879[(1)] = (8));

} else {
var statearr_33998_34880 = state_33994__$1;
(statearr_33998_34880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (1))){
var inst_33963 = cljs.core.vec(chs);
var inst_33964 = inst_33963;
var state_33994__$1 = (function (){var statearr_33999 = state_33994;
(statearr_33999[(10)] = inst_33964);

return statearr_33999;
})();
var statearr_34000_34881 = state_33994__$1;
(statearr_34000_34881[(2)] = null);

(statearr_34000_34881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (4))){
var inst_33964 = (state_33994[(10)]);
var state_33994__$1 = state_33994;
return cljs.core.async.ioc_alts_BANG_(state_33994__$1,(7),inst_33964);
} else {
if((state_val_33995 === (6))){
var inst_33990 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34001_34882 = state_33994__$1;
(statearr_34001_34882[(2)] = inst_33990);

(statearr_34001_34882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (3))){
var inst_33992 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33994__$1,inst_33992);
} else {
if((state_val_33995 === (2))){
var inst_33964 = (state_33994[(10)]);
var inst_33966 = cljs.core.count(inst_33964);
var inst_33967 = (inst_33966 > (0));
var state_33994__$1 = state_33994;
if(cljs.core.truth_(inst_33967)){
var statearr_34003_34887 = state_33994__$1;
(statearr_34003_34887[(1)] = (4));

} else {
var statearr_34004_34891 = state_33994__$1;
(statearr_34004_34891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (11))){
var inst_33964 = (state_33994[(10)]);
var inst_33983 = (state_33994[(2)]);
var tmp34002 = inst_33964;
var inst_33964__$1 = tmp34002;
var state_33994__$1 = (function (){var statearr_34005 = state_33994;
(statearr_34005[(11)] = inst_33983);

(statearr_34005[(10)] = inst_33964__$1);

return statearr_34005;
})();
var statearr_34006_34892 = state_33994__$1;
(statearr_34006_34892[(2)] = null);

(statearr_34006_34892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (9))){
var inst_33974 = (state_33994[(8)]);
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33994__$1,(11),out,inst_33974);
} else {
if((state_val_33995 === (5))){
var inst_33988 = cljs.core.async.close_BANG_(out);
var state_33994__$1 = state_33994;
var statearr_34007_34893 = state_33994__$1;
(statearr_34007_34893[(2)] = inst_33988);

(statearr_34007_34893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (10))){
var inst_33986 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34008_34894 = state_33994__$1;
(statearr_34008_34894[(2)] = inst_33986);

(statearr_34008_34894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (8))){
var inst_33973 = (state_33994[(7)]);
var inst_33974 = (state_33994[(8)]);
var inst_33975 = (state_33994[(9)]);
var inst_33964 = (state_33994[(10)]);
var inst_33978 = (function (){var cs = inst_33964;
var vec__33969 = inst_33973;
var v = inst_33974;
var c = inst_33975;
return (function (p1__33960_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33960_SHARP_);
});
})();
var inst_33979 = cljs.core.filterv(inst_33978,inst_33964);
var inst_33964__$1 = inst_33979;
var state_33994__$1 = (function (){var statearr_34009 = state_33994;
(statearr_34009[(10)] = inst_33964__$1);

return statearr_34009;
})();
var statearr_34010_34898 = state_33994__$1;
(statearr_34010_34898[(2)] = null);

(statearr_34010_34898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32837__auto__ = null;
var cljs$core$async$state_machine__32837__auto____0 = (function (){
var statearr_34011 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34011[(0)] = cljs$core$async$state_machine__32837__auto__);

(statearr_34011[(1)] = (1));

return statearr_34011;
});
var cljs$core$async$state_machine__32837__auto____1 = (function (state_33994){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_33994);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e34012){var ex__32840__auto__ = e34012;
var statearr_34013_34902 = state_33994;
(statearr_34013_34902[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_33994[(4)]))){
var statearr_34014_34903 = state_33994;
(statearr_34014_34903[(1)] = cljs.core.first((state_33994[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34904 = state_33994;
state_33994 = G__34904;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$state_machine__32837__auto__ = function(state_33994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32837__auto____1.call(this,state_33994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32837__auto____0;
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32837__auto____1;
return cljs$core$async$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_34015 = f__32920__auto__();
(statearr_34015[(6)] = c__32919__auto___34878);

return statearr_34015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34017 = arguments.length;
switch (G__34017) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32919__auto___34909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_34041){
var state_val_34042 = (state_34041[(1)]);
if((state_val_34042 === (7))){
var inst_34023 = (state_34041[(7)]);
var inst_34023__$1 = (state_34041[(2)]);
var inst_34024 = (inst_34023__$1 == null);
var inst_34025 = cljs.core.not(inst_34024);
var state_34041__$1 = (function (){var statearr_34043 = state_34041;
(statearr_34043[(7)] = inst_34023__$1);

return statearr_34043;
})();
if(inst_34025){
var statearr_34044_34914 = state_34041__$1;
(statearr_34044_34914[(1)] = (8));

} else {
var statearr_34045_34915 = state_34041__$1;
(statearr_34045_34915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (1))){
var inst_34018 = (0);
var state_34041__$1 = (function (){var statearr_34046 = state_34041;
(statearr_34046[(8)] = inst_34018);

return statearr_34046;
})();
var statearr_34047_34916 = state_34041__$1;
(statearr_34047_34916[(2)] = null);

(statearr_34047_34916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (4))){
var state_34041__$1 = state_34041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34041__$1,(7),ch);
} else {
if((state_val_34042 === (6))){
var inst_34036 = (state_34041[(2)]);
var state_34041__$1 = state_34041;
var statearr_34048_34917 = state_34041__$1;
(statearr_34048_34917[(2)] = inst_34036);

(statearr_34048_34917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (3))){
var inst_34038 = (state_34041[(2)]);
var inst_34039 = cljs.core.async.close_BANG_(out);
var state_34041__$1 = (function (){var statearr_34049 = state_34041;
(statearr_34049[(9)] = inst_34038);

return statearr_34049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34041__$1,inst_34039);
} else {
if((state_val_34042 === (2))){
var inst_34018 = (state_34041[(8)]);
var inst_34020 = (inst_34018 < n);
var state_34041__$1 = state_34041;
if(cljs.core.truth_(inst_34020)){
var statearr_34050_34918 = state_34041__$1;
(statearr_34050_34918[(1)] = (4));

} else {
var statearr_34051_34919 = state_34041__$1;
(statearr_34051_34919[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (11))){
var inst_34018 = (state_34041[(8)]);
var inst_34028 = (state_34041[(2)]);
var inst_34029 = (inst_34018 + (1));
var inst_34018__$1 = inst_34029;
var state_34041__$1 = (function (){var statearr_34052 = state_34041;
(statearr_34052[(10)] = inst_34028);

(statearr_34052[(8)] = inst_34018__$1);

return statearr_34052;
})();
var statearr_34053_34920 = state_34041__$1;
(statearr_34053_34920[(2)] = null);

(statearr_34053_34920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (9))){
var state_34041__$1 = state_34041;
var statearr_34054_34921 = state_34041__$1;
(statearr_34054_34921[(2)] = null);

(statearr_34054_34921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (5))){
var state_34041__$1 = state_34041;
var statearr_34055_34922 = state_34041__$1;
(statearr_34055_34922[(2)] = null);

(statearr_34055_34922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (10))){
var inst_34033 = (state_34041[(2)]);
var state_34041__$1 = state_34041;
var statearr_34056_34923 = state_34041__$1;
(statearr_34056_34923[(2)] = inst_34033);

(statearr_34056_34923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (8))){
var inst_34023 = (state_34041[(7)]);
var state_34041__$1 = state_34041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34041__$1,(11),out,inst_34023);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32837__auto__ = null;
var cljs$core$async$state_machine__32837__auto____0 = (function (){
var statearr_34057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34057[(0)] = cljs$core$async$state_machine__32837__auto__);

(statearr_34057[(1)] = (1));

return statearr_34057;
});
var cljs$core$async$state_machine__32837__auto____1 = (function (state_34041){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_34041);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e34058){var ex__32840__auto__ = e34058;
var statearr_34059_34924 = state_34041;
(statearr_34059_34924[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_34041[(4)]))){
var statearr_34060_34925 = state_34041;
(statearr_34060_34925[(1)] = cljs.core.first((state_34041[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34926 = state_34041;
state_34041 = G__34926;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$state_machine__32837__auto__ = function(state_34041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32837__auto____1.call(this,state_34041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32837__auto____0;
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32837__auto____1;
return cljs$core$async$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_34061 = f__32920__auto__();
(statearr_34061[(6)] = c__32919__auto___34909);

return statearr_34061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34063 = (function (f,ch,meta34064){
this.f = f;
this.ch = ch;
this.meta34064 = meta34064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34065,meta34064__$1){
var self__ = this;
var _34065__$1 = this;
return (new cljs.core.async.t_cljs$core$async34063(self__.f,self__.ch,meta34064__$1));
}));

(cljs.core.async.t_cljs$core$async34063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34065){
var self__ = this;
var _34065__$1 = this;
return self__.meta34064;
}));

(cljs.core.async.t_cljs$core$async34063.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34063.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34063.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34066 = (function (f,ch,meta34064,_,fn1,meta34067){
this.f = f;
this.ch = ch;
this.meta34064 = meta34064;
this._ = _;
this.fn1 = fn1;
this.meta34067 = meta34067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34068,meta34067__$1){
var self__ = this;
var _34068__$1 = this;
return (new cljs.core.async.t_cljs$core$async34066(self__.f,self__.ch,self__.meta34064,self__._,self__.fn1,meta34067__$1));
}));

(cljs.core.async.t_cljs$core$async34066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34068){
var self__ = this;
var _34068__$1 = this;
return self__.meta34067;
}));

(cljs.core.async.t_cljs$core$async34066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34062_SHARP_){
var G__34069 = (((p1__34062_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34062_SHARP_) : self__.f.call(null,p1__34062_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34069) : f1.call(null,G__34069));
});
}));

(cljs.core.async.t_cljs$core$async34066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34064","meta34064",925596681,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34063","cljs.core.async/t_cljs$core$async34063",-2092195163,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34067","meta34067",-983136899,null)], null);
}));

(cljs.core.async.t_cljs$core$async34066.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34066");

(cljs.core.async.t_cljs$core$async34066.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34066");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34066.
 */
cljs.core.async.__GT_t_cljs$core$async34066 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34066(f__$1,ch__$1,meta34064__$1,___$2,fn1__$1,meta34067){
return (new cljs.core.async.t_cljs$core$async34066(f__$1,ch__$1,meta34064__$1,___$2,fn1__$1,meta34067));
});

}

return (new cljs.core.async.t_cljs$core$async34066(self__.f,self__.ch,self__.meta34064,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34070 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34070) : self__.f.call(null,G__34070));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34063.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34064","meta34064",925596681,null)], null);
}));

(cljs.core.async.t_cljs$core$async34063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34063");

(cljs.core.async.t_cljs$core$async34063.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34063.
 */
cljs.core.async.__GT_t_cljs$core$async34063 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34063(f__$1,ch__$1,meta34064){
return (new cljs.core.async.t_cljs$core$async34063(f__$1,ch__$1,meta34064));
});

}

return (new cljs.core.async.t_cljs$core$async34063(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34071 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34071 = (function (f,ch,meta34072){
this.f = f;
this.ch = ch;
this.meta34072 = meta34072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34073,meta34072__$1){
var self__ = this;
var _34073__$1 = this;
return (new cljs.core.async.t_cljs$core$async34071(self__.f,self__.ch,meta34072__$1));
}));

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34073){
var self__ = this;
var _34073__$1 = this;
return self__.meta34072;
}));

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34072","meta34072",982248307,null)], null);
}));

(cljs.core.async.t_cljs$core$async34071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34071");

(cljs.core.async.t_cljs$core$async34071.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34071.
 */
cljs.core.async.__GT_t_cljs$core$async34071 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34071(f__$1,ch__$1,meta34072){
return (new cljs.core.async.t_cljs$core$async34071(f__$1,ch__$1,meta34072));
});

}

return (new cljs.core.async.t_cljs$core$async34071(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34074 = (function (p,ch,meta34075){
this.p = p;
this.ch = ch;
this.meta34075 = meta34075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34076,meta34075__$1){
var self__ = this;
var _34076__$1 = this;
return (new cljs.core.async.t_cljs$core$async34074(self__.p,self__.ch,meta34075__$1));
}));

(cljs.core.async.t_cljs$core$async34074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34076){
var self__ = this;
var _34076__$1 = this;
return self__.meta34075;
}));

(cljs.core.async.t_cljs$core$async34074.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34074.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34074.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34074.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34074.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34074.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34074.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34075","meta34075",576507689,null)], null);
}));

(cljs.core.async.t_cljs$core$async34074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34074");

(cljs.core.async.t_cljs$core$async34074.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34074.
 */
cljs.core.async.__GT_t_cljs$core$async34074 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34074(p__$1,ch__$1,meta34075){
return (new cljs.core.async.t_cljs$core$async34074(p__$1,ch__$1,meta34075));
});

}

return (new cljs.core.async.t_cljs$core$async34074(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34078 = arguments.length;
switch (G__34078) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32919__auto___34944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_34099){
var state_val_34100 = (state_34099[(1)]);
if((state_val_34100 === (7))){
var inst_34095 = (state_34099[(2)]);
var state_34099__$1 = state_34099;
var statearr_34101_34945 = state_34099__$1;
(statearr_34101_34945[(2)] = inst_34095);

(statearr_34101_34945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (1))){
var state_34099__$1 = state_34099;
var statearr_34102_34946 = state_34099__$1;
(statearr_34102_34946[(2)] = null);

(statearr_34102_34946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (4))){
var inst_34081 = (state_34099[(7)]);
var inst_34081__$1 = (state_34099[(2)]);
var inst_34082 = (inst_34081__$1 == null);
var state_34099__$1 = (function (){var statearr_34103 = state_34099;
(statearr_34103[(7)] = inst_34081__$1);

return statearr_34103;
})();
if(cljs.core.truth_(inst_34082)){
var statearr_34104_34947 = state_34099__$1;
(statearr_34104_34947[(1)] = (5));

} else {
var statearr_34105_34948 = state_34099__$1;
(statearr_34105_34948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (6))){
var inst_34081 = (state_34099[(7)]);
var inst_34086 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34081) : p.call(null,inst_34081));
var state_34099__$1 = state_34099;
if(cljs.core.truth_(inst_34086)){
var statearr_34106_34949 = state_34099__$1;
(statearr_34106_34949[(1)] = (8));

} else {
var statearr_34107_34950 = state_34099__$1;
(statearr_34107_34950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (3))){
var inst_34097 = (state_34099[(2)]);
var state_34099__$1 = state_34099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34099__$1,inst_34097);
} else {
if((state_val_34100 === (2))){
var state_34099__$1 = state_34099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34099__$1,(4),ch);
} else {
if((state_val_34100 === (11))){
var inst_34089 = (state_34099[(2)]);
var state_34099__$1 = state_34099;
var statearr_34108_34951 = state_34099__$1;
(statearr_34108_34951[(2)] = inst_34089);

(statearr_34108_34951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (9))){
var state_34099__$1 = state_34099;
var statearr_34109_34952 = state_34099__$1;
(statearr_34109_34952[(2)] = null);

(statearr_34109_34952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (5))){
var inst_34084 = cljs.core.async.close_BANG_(out);
var state_34099__$1 = state_34099;
var statearr_34110_34953 = state_34099__$1;
(statearr_34110_34953[(2)] = inst_34084);

(statearr_34110_34953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (10))){
var inst_34092 = (state_34099[(2)]);
var state_34099__$1 = (function (){var statearr_34111 = state_34099;
(statearr_34111[(8)] = inst_34092);

return statearr_34111;
})();
var statearr_34112_34954 = state_34099__$1;
(statearr_34112_34954[(2)] = null);

(statearr_34112_34954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (8))){
var inst_34081 = (state_34099[(7)]);
var state_34099__$1 = state_34099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34099__$1,(11),out,inst_34081);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32837__auto__ = null;
var cljs$core$async$state_machine__32837__auto____0 = (function (){
var statearr_34113 = [null,null,null,null,null,null,null,null,null];
(statearr_34113[(0)] = cljs$core$async$state_machine__32837__auto__);

(statearr_34113[(1)] = (1));

return statearr_34113;
});
var cljs$core$async$state_machine__32837__auto____1 = (function (state_34099){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_34099);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e34114){var ex__32840__auto__ = e34114;
var statearr_34115_34955 = state_34099;
(statearr_34115_34955[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_34099[(4)]))){
var statearr_34116_34956 = state_34099;
(statearr_34116_34956[(1)] = cljs.core.first((state_34099[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34957 = state_34099;
state_34099 = G__34957;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$state_machine__32837__auto__ = function(state_34099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32837__auto____1.call(this,state_34099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32837__auto____0;
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32837__auto____1;
return cljs$core$async$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_34117 = f__32920__auto__();
(statearr_34117[(6)] = c__32919__auto___34944);

return statearr_34117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34119 = arguments.length;
switch (G__34119) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32919__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_34181){
var state_val_34182 = (state_34181[(1)]);
if((state_val_34182 === (7))){
var inst_34177 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34183_34959 = state_34181__$1;
(statearr_34183_34959[(2)] = inst_34177);

(statearr_34183_34959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (20))){
var inst_34147 = (state_34181[(7)]);
var inst_34158 = (state_34181[(2)]);
var inst_34159 = cljs.core.next(inst_34147);
var inst_34133 = inst_34159;
var inst_34134 = null;
var inst_34135 = (0);
var inst_34136 = (0);
var state_34181__$1 = (function (){var statearr_34184 = state_34181;
(statearr_34184[(8)] = inst_34158);

(statearr_34184[(9)] = inst_34136);

(statearr_34184[(10)] = inst_34135);

(statearr_34184[(11)] = inst_34134);

(statearr_34184[(12)] = inst_34133);

return statearr_34184;
})();
var statearr_34185_34960 = state_34181__$1;
(statearr_34185_34960[(2)] = null);

(statearr_34185_34960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (1))){
var state_34181__$1 = state_34181;
var statearr_34186_34961 = state_34181__$1;
(statearr_34186_34961[(2)] = null);

(statearr_34186_34961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (4))){
var inst_34122 = (state_34181[(13)]);
var inst_34122__$1 = (state_34181[(2)]);
var inst_34123 = (inst_34122__$1 == null);
var state_34181__$1 = (function (){var statearr_34187 = state_34181;
(statearr_34187[(13)] = inst_34122__$1);

return statearr_34187;
})();
if(cljs.core.truth_(inst_34123)){
var statearr_34188_34962 = state_34181__$1;
(statearr_34188_34962[(1)] = (5));

} else {
var statearr_34189_34963 = state_34181__$1;
(statearr_34189_34963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (15))){
var state_34181__$1 = state_34181;
var statearr_34193_34964 = state_34181__$1;
(statearr_34193_34964[(2)] = null);

(statearr_34193_34964[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (21))){
var state_34181__$1 = state_34181;
var statearr_34194_34965 = state_34181__$1;
(statearr_34194_34965[(2)] = null);

(statearr_34194_34965[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (13))){
var inst_34136 = (state_34181[(9)]);
var inst_34135 = (state_34181[(10)]);
var inst_34134 = (state_34181[(11)]);
var inst_34133 = (state_34181[(12)]);
var inst_34143 = (state_34181[(2)]);
var inst_34144 = (inst_34136 + (1));
var tmp34190 = inst_34135;
var tmp34191 = inst_34134;
var tmp34192 = inst_34133;
var inst_34133__$1 = tmp34192;
var inst_34134__$1 = tmp34191;
var inst_34135__$1 = tmp34190;
var inst_34136__$1 = inst_34144;
var state_34181__$1 = (function (){var statearr_34195 = state_34181;
(statearr_34195[(9)] = inst_34136__$1);

(statearr_34195[(10)] = inst_34135__$1);

(statearr_34195[(11)] = inst_34134__$1);

(statearr_34195[(12)] = inst_34133__$1);

(statearr_34195[(14)] = inst_34143);

return statearr_34195;
})();
var statearr_34196_34967 = state_34181__$1;
(statearr_34196_34967[(2)] = null);

(statearr_34196_34967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (22))){
var state_34181__$1 = state_34181;
var statearr_34197_34968 = state_34181__$1;
(statearr_34197_34968[(2)] = null);

(statearr_34197_34968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (6))){
var inst_34122 = (state_34181[(13)]);
var inst_34131 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34122) : f.call(null,inst_34122));
var inst_34132 = cljs.core.seq(inst_34131);
var inst_34133 = inst_34132;
var inst_34134 = null;
var inst_34135 = (0);
var inst_34136 = (0);
var state_34181__$1 = (function (){var statearr_34198 = state_34181;
(statearr_34198[(9)] = inst_34136);

(statearr_34198[(10)] = inst_34135);

(statearr_34198[(11)] = inst_34134);

(statearr_34198[(12)] = inst_34133);

return statearr_34198;
})();
var statearr_34199_34969 = state_34181__$1;
(statearr_34199_34969[(2)] = null);

(statearr_34199_34969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (17))){
var inst_34147 = (state_34181[(7)]);
var inst_34151 = cljs.core.chunk_first(inst_34147);
var inst_34152 = cljs.core.chunk_rest(inst_34147);
var inst_34153 = cljs.core.count(inst_34151);
var inst_34133 = inst_34152;
var inst_34134 = inst_34151;
var inst_34135 = inst_34153;
var inst_34136 = (0);
var state_34181__$1 = (function (){var statearr_34200 = state_34181;
(statearr_34200[(9)] = inst_34136);

(statearr_34200[(10)] = inst_34135);

(statearr_34200[(11)] = inst_34134);

(statearr_34200[(12)] = inst_34133);

return statearr_34200;
})();
var statearr_34201_34973 = state_34181__$1;
(statearr_34201_34973[(2)] = null);

(statearr_34201_34973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (3))){
var inst_34179 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34181__$1,inst_34179);
} else {
if((state_val_34182 === (12))){
var inst_34167 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34202_34974 = state_34181__$1;
(statearr_34202_34974[(2)] = inst_34167);

(statearr_34202_34974[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (2))){
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34181__$1,(4),in$);
} else {
if((state_val_34182 === (23))){
var inst_34175 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34203_34975 = state_34181__$1;
(statearr_34203_34975[(2)] = inst_34175);

(statearr_34203_34975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (19))){
var inst_34162 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34204_34976 = state_34181__$1;
(statearr_34204_34976[(2)] = inst_34162);

(statearr_34204_34976[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (11))){
var inst_34147 = (state_34181[(7)]);
var inst_34133 = (state_34181[(12)]);
var inst_34147__$1 = cljs.core.seq(inst_34133);
var state_34181__$1 = (function (){var statearr_34205 = state_34181;
(statearr_34205[(7)] = inst_34147__$1);

return statearr_34205;
})();
if(inst_34147__$1){
var statearr_34206_34977 = state_34181__$1;
(statearr_34206_34977[(1)] = (14));

} else {
var statearr_34207_34978 = state_34181__$1;
(statearr_34207_34978[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (9))){
var inst_34169 = (state_34181[(2)]);
var inst_34170 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34181__$1 = (function (){var statearr_34208 = state_34181;
(statearr_34208[(15)] = inst_34169);

return statearr_34208;
})();
if(cljs.core.truth_(inst_34170)){
var statearr_34209_34979 = state_34181__$1;
(statearr_34209_34979[(1)] = (21));

} else {
var statearr_34210_34980 = state_34181__$1;
(statearr_34210_34980[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (5))){
var inst_34125 = cljs.core.async.close_BANG_(out);
var state_34181__$1 = state_34181;
var statearr_34211_34981 = state_34181__$1;
(statearr_34211_34981[(2)] = inst_34125);

(statearr_34211_34981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (14))){
var inst_34147 = (state_34181[(7)]);
var inst_34149 = cljs.core.chunked_seq_QMARK_(inst_34147);
var state_34181__$1 = state_34181;
if(inst_34149){
var statearr_34212_34982 = state_34181__$1;
(statearr_34212_34982[(1)] = (17));

} else {
var statearr_34213_34983 = state_34181__$1;
(statearr_34213_34983[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (16))){
var inst_34165 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34214_34984 = state_34181__$1;
(statearr_34214_34984[(2)] = inst_34165);

(statearr_34214_34984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (10))){
var inst_34136 = (state_34181[(9)]);
var inst_34134 = (state_34181[(11)]);
var inst_34141 = cljs.core._nth(inst_34134,inst_34136);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34181__$1,(13),out,inst_34141);
} else {
if((state_val_34182 === (18))){
var inst_34147 = (state_34181[(7)]);
var inst_34156 = cljs.core.first(inst_34147);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34181__$1,(20),out,inst_34156);
} else {
if((state_val_34182 === (8))){
var inst_34136 = (state_34181[(9)]);
var inst_34135 = (state_34181[(10)]);
var inst_34138 = (inst_34136 < inst_34135);
var inst_34139 = inst_34138;
var state_34181__$1 = state_34181;
if(cljs.core.truth_(inst_34139)){
var statearr_34215_34985 = state_34181__$1;
(statearr_34215_34985[(1)] = (10));

} else {
var statearr_34216_34986 = state_34181__$1;
(statearr_34216_34986[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32837__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32837__auto____0 = (function (){
var statearr_34217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34217[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32837__auto__);

(statearr_34217[(1)] = (1));

return statearr_34217;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32837__auto____1 = (function (state_34181){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_34181);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e34218){var ex__32840__auto__ = e34218;
var statearr_34219_34987 = state_34181;
(statearr_34219_34987[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_34181[(4)]))){
var statearr_34220_34988 = state_34181;
(statearr_34220_34988[(1)] = cljs.core.first((state_34181[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34989 = state_34181;
state_34181 = G__34989;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32837__auto__ = function(state_34181){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32837__auto____1.call(this,state_34181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32837__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32837__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_34221 = f__32920__auto__();
(statearr_34221[(6)] = c__32919__auto__);

return statearr_34221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));

return c__32919__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34223 = arguments.length;
switch (G__34223) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34225 = arguments.length;
switch (G__34225) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34227 = arguments.length;
switch (G__34227) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32919__auto___34994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_34251){
var state_val_34252 = (state_34251[(1)]);
if((state_val_34252 === (7))){
var inst_34246 = (state_34251[(2)]);
var state_34251__$1 = state_34251;
var statearr_34253_34995 = state_34251__$1;
(statearr_34253_34995[(2)] = inst_34246);

(statearr_34253_34995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (1))){
var inst_34228 = null;
var state_34251__$1 = (function (){var statearr_34254 = state_34251;
(statearr_34254[(7)] = inst_34228);

return statearr_34254;
})();
var statearr_34255_34996 = state_34251__$1;
(statearr_34255_34996[(2)] = null);

(statearr_34255_34996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (4))){
var inst_34231 = (state_34251[(8)]);
var inst_34231__$1 = (state_34251[(2)]);
var inst_34232 = (inst_34231__$1 == null);
var inst_34233 = cljs.core.not(inst_34232);
var state_34251__$1 = (function (){var statearr_34256 = state_34251;
(statearr_34256[(8)] = inst_34231__$1);

return statearr_34256;
})();
if(inst_34233){
var statearr_34257_34997 = state_34251__$1;
(statearr_34257_34997[(1)] = (5));

} else {
var statearr_34258_34998 = state_34251__$1;
(statearr_34258_34998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (6))){
var state_34251__$1 = state_34251;
var statearr_34259_34999 = state_34251__$1;
(statearr_34259_34999[(2)] = null);

(statearr_34259_34999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (3))){
var inst_34248 = (state_34251[(2)]);
var inst_34249 = cljs.core.async.close_BANG_(out);
var state_34251__$1 = (function (){var statearr_34260 = state_34251;
(statearr_34260[(9)] = inst_34248);

return statearr_34260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34251__$1,inst_34249);
} else {
if((state_val_34252 === (2))){
var state_34251__$1 = state_34251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34251__$1,(4),ch);
} else {
if((state_val_34252 === (11))){
var inst_34231 = (state_34251[(8)]);
var inst_34240 = (state_34251[(2)]);
var inst_34228 = inst_34231;
var state_34251__$1 = (function (){var statearr_34261 = state_34251;
(statearr_34261[(10)] = inst_34240);

(statearr_34261[(7)] = inst_34228);

return statearr_34261;
})();
var statearr_34262_35004 = state_34251__$1;
(statearr_34262_35004[(2)] = null);

(statearr_34262_35004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (9))){
var inst_34231 = (state_34251[(8)]);
var state_34251__$1 = state_34251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34251__$1,(11),out,inst_34231);
} else {
if((state_val_34252 === (5))){
var inst_34231 = (state_34251[(8)]);
var inst_34228 = (state_34251[(7)]);
var inst_34235 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34231,inst_34228);
var state_34251__$1 = state_34251;
if(inst_34235){
var statearr_34264_35006 = state_34251__$1;
(statearr_34264_35006[(1)] = (8));

} else {
var statearr_34265_35007 = state_34251__$1;
(statearr_34265_35007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (10))){
var inst_34243 = (state_34251[(2)]);
var state_34251__$1 = state_34251;
var statearr_34266_35008 = state_34251__$1;
(statearr_34266_35008[(2)] = inst_34243);

(statearr_34266_35008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (8))){
var inst_34228 = (state_34251[(7)]);
var tmp34263 = inst_34228;
var inst_34228__$1 = tmp34263;
var state_34251__$1 = (function (){var statearr_34267 = state_34251;
(statearr_34267[(7)] = inst_34228__$1);

return statearr_34267;
})();
var statearr_34268_35009 = state_34251__$1;
(statearr_34268_35009[(2)] = null);

(statearr_34268_35009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32837__auto__ = null;
var cljs$core$async$state_machine__32837__auto____0 = (function (){
var statearr_34269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34269[(0)] = cljs$core$async$state_machine__32837__auto__);

(statearr_34269[(1)] = (1));

return statearr_34269;
});
var cljs$core$async$state_machine__32837__auto____1 = (function (state_34251){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_34251);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e34270){var ex__32840__auto__ = e34270;
var statearr_34271_35010 = state_34251;
(statearr_34271_35010[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_34251[(4)]))){
var statearr_34272_35011 = state_34251;
(statearr_34272_35011[(1)] = cljs.core.first((state_34251[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35013 = state_34251;
state_34251 = G__35013;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$state_machine__32837__auto__ = function(state_34251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32837__auto____1.call(this,state_34251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32837__auto____0;
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32837__auto____1;
return cljs$core$async$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_34273 = f__32920__auto__();
(statearr_34273[(6)] = c__32919__auto___34994);

return statearr_34273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34275 = arguments.length;
switch (G__34275) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32919__auto___35016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_34313){
var state_val_34314 = (state_34313[(1)]);
if((state_val_34314 === (7))){
var inst_34309 = (state_34313[(2)]);
var state_34313__$1 = state_34313;
var statearr_34315_35020 = state_34313__$1;
(statearr_34315_35020[(2)] = inst_34309);

(statearr_34315_35020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34314 === (1))){
var inst_34276 = (new Array(n));
var inst_34277 = inst_34276;
var inst_34278 = (0);
var state_34313__$1 = (function (){var statearr_34316 = state_34313;
(statearr_34316[(7)] = inst_34278);

(statearr_34316[(8)] = inst_34277);

return statearr_34316;
})();
var statearr_34317_35021 = state_34313__$1;
(statearr_34317_35021[(2)] = null);

(statearr_34317_35021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34314 === (4))){
var inst_34281 = (state_34313[(9)]);
var inst_34281__$1 = (state_34313[(2)]);
var inst_34282 = (inst_34281__$1 == null);
var inst_34283 = cljs.core.not(inst_34282);
var state_34313__$1 = (function (){var statearr_34318 = state_34313;
(statearr_34318[(9)] = inst_34281__$1);

return statearr_34318;
})();
if(inst_34283){
var statearr_34319_35022 = state_34313__$1;
(statearr_34319_35022[(1)] = (5));

} else {
var statearr_34320_35023 = state_34313__$1;
(statearr_34320_35023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34314 === (15))){
var inst_34303 = (state_34313[(2)]);
var state_34313__$1 = state_34313;
var statearr_34321_35024 = state_34313__$1;
(statearr_34321_35024[(2)] = inst_34303);

(statearr_34321_35024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34314 === (13))){
var state_34313__$1 = state_34313;
var statearr_34322_35025 = state_34313__$1;
(statearr_34322_35025[(2)] = null);

(statearr_34322_35025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34314 === (6))){
var inst_34278 = (state_34313[(7)]);
var inst_34299 = (inst_34278 > (0));
var state_34313__$1 = state_34313;
if(cljs.core.truth_(inst_34299)){
var statearr_34323_35026 = state_34313__$1;
(statearr_34323_35026[(1)] = (12));

} else {
var statearr_34324_35027 = state_34313__$1;
(statearr_34324_35027[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34314 === (3))){
var inst_34311 = (state_34313[(2)]);
var state_34313__$1 = state_34313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34313__$1,inst_34311);
} else {
if((state_val_34314 === (12))){
var inst_34277 = (state_34313[(8)]);
var inst_34301 = cljs.core.vec(inst_34277);
var state_34313__$1 = state_34313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34313__$1,(15),out,inst_34301);
} else {
if((state_val_34314 === (2))){
var state_34313__$1 = state_34313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34313__$1,(4),ch);
} else {
if((state_val_34314 === (11))){
var inst_34293 = (state_34313[(2)]);
var inst_34294 = (new Array(n));
var inst_34277 = inst_34294;
var inst_34278 = (0);
var state_34313__$1 = (function (){var statearr_34325 = state_34313;
(statearr_34325[(10)] = inst_34293);

(statearr_34325[(7)] = inst_34278);

(statearr_34325[(8)] = inst_34277);

return statearr_34325;
})();
var statearr_34326_35028 = state_34313__$1;
(statearr_34326_35028[(2)] = null);

(statearr_34326_35028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34314 === (9))){
var inst_34277 = (state_34313[(8)]);
var inst_34291 = cljs.core.vec(inst_34277);
var state_34313__$1 = state_34313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34313__$1,(11),out,inst_34291);
} else {
if((state_val_34314 === (5))){
var inst_34286 = (state_34313[(11)]);
var inst_34278 = (state_34313[(7)]);
var inst_34281 = (state_34313[(9)]);
var inst_34277 = (state_34313[(8)]);
var inst_34285 = (inst_34277[inst_34278] = inst_34281);
var inst_34286__$1 = (inst_34278 + (1));
var inst_34287 = (inst_34286__$1 < n);
var state_34313__$1 = (function (){var statearr_34327 = state_34313;
(statearr_34327[(11)] = inst_34286__$1);

(statearr_34327[(12)] = inst_34285);

return statearr_34327;
})();
if(cljs.core.truth_(inst_34287)){
var statearr_34328_35029 = state_34313__$1;
(statearr_34328_35029[(1)] = (8));

} else {
var statearr_34329_35030 = state_34313__$1;
(statearr_34329_35030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34314 === (14))){
var inst_34306 = (state_34313[(2)]);
var inst_34307 = cljs.core.async.close_BANG_(out);
var state_34313__$1 = (function (){var statearr_34331 = state_34313;
(statearr_34331[(13)] = inst_34306);

return statearr_34331;
})();
var statearr_34332_35031 = state_34313__$1;
(statearr_34332_35031[(2)] = inst_34307);

(statearr_34332_35031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34314 === (10))){
var inst_34297 = (state_34313[(2)]);
var state_34313__$1 = state_34313;
var statearr_34333_35032 = state_34313__$1;
(statearr_34333_35032[(2)] = inst_34297);

(statearr_34333_35032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34314 === (8))){
var inst_34286 = (state_34313[(11)]);
var inst_34277 = (state_34313[(8)]);
var tmp34330 = inst_34277;
var inst_34277__$1 = tmp34330;
var inst_34278 = inst_34286;
var state_34313__$1 = (function (){var statearr_34334 = state_34313;
(statearr_34334[(7)] = inst_34278);

(statearr_34334[(8)] = inst_34277__$1);

return statearr_34334;
})();
var statearr_34335_35033 = state_34313__$1;
(statearr_34335_35033[(2)] = null);

(statearr_34335_35033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32837__auto__ = null;
var cljs$core$async$state_machine__32837__auto____0 = (function (){
var statearr_34336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34336[(0)] = cljs$core$async$state_machine__32837__auto__);

(statearr_34336[(1)] = (1));

return statearr_34336;
});
var cljs$core$async$state_machine__32837__auto____1 = (function (state_34313){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_34313);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e34337){var ex__32840__auto__ = e34337;
var statearr_34338_35034 = state_34313;
(statearr_34338_35034[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_34313[(4)]))){
var statearr_34339_35035 = state_34313;
(statearr_34339_35035[(1)] = cljs.core.first((state_34313[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35036 = state_34313;
state_34313 = G__35036;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$state_machine__32837__auto__ = function(state_34313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32837__auto____1.call(this,state_34313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32837__auto____0;
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32837__auto____1;
return cljs$core$async$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_34340 = f__32920__auto__();
(statearr_34340[(6)] = c__32919__auto___35016);

return statearr_34340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34342 = arguments.length;
switch (G__34342) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32919__auto___35038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32920__auto__ = (function (){var switch__32836__auto__ = (function (state_34387){
var state_val_34388 = (state_34387[(1)]);
if((state_val_34388 === (7))){
var inst_34383 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34389_35039 = state_34387__$1;
(statearr_34389_35039[(2)] = inst_34383);

(statearr_34389_35039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (1))){
var inst_34343 = [];
var inst_34344 = inst_34343;
var inst_34345 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34387__$1 = (function (){var statearr_34390 = state_34387;
(statearr_34390[(7)] = inst_34345);

(statearr_34390[(8)] = inst_34344);

return statearr_34390;
})();
var statearr_34391_35040 = state_34387__$1;
(statearr_34391_35040[(2)] = null);

(statearr_34391_35040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (4))){
var inst_34348 = (state_34387[(9)]);
var inst_34348__$1 = (state_34387[(2)]);
var inst_34349 = (inst_34348__$1 == null);
var inst_34350 = cljs.core.not(inst_34349);
var state_34387__$1 = (function (){var statearr_34392 = state_34387;
(statearr_34392[(9)] = inst_34348__$1);

return statearr_34392;
})();
if(inst_34350){
var statearr_34393_35042 = state_34387__$1;
(statearr_34393_35042[(1)] = (5));

} else {
var statearr_34394_35043 = state_34387__$1;
(statearr_34394_35043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (15))){
var inst_34344 = (state_34387[(8)]);
var inst_34375 = cljs.core.vec(inst_34344);
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34387__$1,(18),out,inst_34375);
} else {
if((state_val_34388 === (13))){
var inst_34370 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34395_35044 = state_34387__$1;
(statearr_34395_35044[(2)] = inst_34370);

(statearr_34395_35044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (6))){
var inst_34344 = (state_34387[(8)]);
var inst_34372 = inst_34344.length;
var inst_34373 = (inst_34372 > (0));
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34373)){
var statearr_34396_35048 = state_34387__$1;
(statearr_34396_35048[(1)] = (15));

} else {
var statearr_34397_35049 = state_34387__$1;
(statearr_34397_35049[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (17))){
var inst_34380 = (state_34387[(2)]);
var inst_34381 = cljs.core.async.close_BANG_(out);
var state_34387__$1 = (function (){var statearr_34398 = state_34387;
(statearr_34398[(10)] = inst_34380);

return statearr_34398;
})();
var statearr_34399_35050 = state_34387__$1;
(statearr_34399_35050[(2)] = inst_34381);

(statearr_34399_35050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (3))){
var inst_34385 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34387__$1,inst_34385);
} else {
if((state_val_34388 === (12))){
var inst_34344 = (state_34387[(8)]);
var inst_34363 = cljs.core.vec(inst_34344);
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34387__$1,(14),out,inst_34363);
} else {
if((state_val_34388 === (2))){
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34387__$1,(4),ch);
} else {
if((state_val_34388 === (11))){
var inst_34344 = (state_34387[(8)]);
var inst_34352 = (state_34387[(11)]);
var inst_34348 = (state_34387[(9)]);
var inst_34360 = inst_34344.push(inst_34348);
var tmp34400 = inst_34344;
var inst_34344__$1 = tmp34400;
var inst_34345 = inst_34352;
var state_34387__$1 = (function (){var statearr_34401 = state_34387;
(statearr_34401[(7)] = inst_34345);

(statearr_34401[(12)] = inst_34360);

(statearr_34401[(8)] = inst_34344__$1);

return statearr_34401;
})();
var statearr_34402_35051 = state_34387__$1;
(statearr_34402_35051[(2)] = null);

(statearr_34402_35051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (9))){
var inst_34345 = (state_34387[(7)]);
var inst_34356 = cljs.core.keyword_identical_QMARK_(inst_34345,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34387__$1 = state_34387;
var statearr_34403_35052 = state_34387__$1;
(statearr_34403_35052[(2)] = inst_34356);

(statearr_34403_35052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (5))){
var inst_34345 = (state_34387[(7)]);
var inst_34353 = (state_34387[(13)]);
var inst_34352 = (state_34387[(11)]);
var inst_34348 = (state_34387[(9)]);
var inst_34352__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34348) : f.call(null,inst_34348));
var inst_34353__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34352__$1,inst_34345);
var state_34387__$1 = (function (){var statearr_34404 = state_34387;
(statearr_34404[(13)] = inst_34353__$1);

(statearr_34404[(11)] = inst_34352__$1);

return statearr_34404;
})();
if(inst_34353__$1){
var statearr_34405_35053 = state_34387__$1;
(statearr_34405_35053[(1)] = (8));

} else {
var statearr_34406_35054 = state_34387__$1;
(statearr_34406_35054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (14))){
var inst_34352 = (state_34387[(11)]);
var inst_34348 = (state_34387[(9)]);
var inst_34365 = (state_34387[(2)]);
var inst_34366 = [];
var inst_34367 = inst_34366.push(inst_34348);
var inst_34344 = inst_34366;
var inst_34345 = inst_34352;
var state_34387__$1 = (function (){var statearr_34407 = state_34387;
(statearr_34407[(7)] = inst_34345);

(statearr_34407[(8)] = inst_34344);

(statearr_34407[(14)] = inst_34365);

(statearr_34407[(15)] = inst_34367);

return statearr_34407;
})();
var statearr_34408_35055 = state_34387__$1;
(statearr_34408_35055[(2)] = null);

(statearr_34408_35055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (16))){
var state_34387__$1 = state_34387;
var statearr_34409_35056 = state_34387__$1;
(statearr_34409_35056[(2)] = null);

(statearr_34409_35056[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (10))){
var inst_34358 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34358)){
var statearr_34410_35057 = state_34387__$1;
(statearr_34410_35057[(1)] = (11));

} else {
var statearr_34411_35058 = state_34387__$1;
(statearr_34411_35058[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (18))){
var inst_34377 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34412_35059 = state_34387__$1;
(statearr_34412_35059[(2)] = inst_34377);

(statearr_34412_35059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (8))){
var inst_34353 = (state_34387[(13)]);
var state_34387__$1 = state_34387;
var statearr_34413_35060 = state_34387__$1;
(statearr_34413_35060[(2)] = inst_34353);

(statearr_34413_35060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32837__auto__ = null;
var cljs$core$async$state_machine__32837__auto____0 = (function (){
var statearr_34414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34414[(0)] = cljs$core$async$state_machine__32837__auto__);

(statearr_34414[(1)] = (1));

return statearr_34414;
});
var cljs$core$async$state_machine__32837__auto____1 = (function (state_34387){
while(true){
var ret_value__32838__auto__ = (function (){try{while(true){
var result__32839__auto__ = switch__32836__auto__(state_34387);
if(cljs.core.keyword_identical_QMARK_(result__32839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32839__auto__;
}
break;
}
}catch (e34415){var ex__32840__auto__ = e34415;
var statearr_34416_35062 = state_34387;
(statearr_34416_35062[(2)] = ex__32840__auto__);


if(cljs.core.seq((state_34387[(4)]))){
var statearr_34417_35063 = state_34387;
(statearr_34417_35063[(1)] = cljs.core.first((state_34387[(4)])));

} else {
throw ex__32840__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35064 = state_34387;
state_34387 = G__35064;
continue;
} else {
return ret_value__32838__auto__;
}
break;
}
});
cljs$core$async$state_machine__32837__auto__ = function(state_34387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32837__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32837__auto____1.call(this,state_34387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32837__auto____0;
cljs$core$async$state_machine__32837__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32837__auto____1;
return cljs$core$async$state_machine__32837__auto__;
})()
})();
var state__32921__auto__ = (function (){var statearr_34418 = f__32920__auto__();
(statearr_34418[(6)] = c__32919__auto___35038);

return statearr_34418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32921__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
