(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)t.hasOwnProperty(e)&&(o[e]=t[e])})(t,e)};return function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),BarViewController=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return __extends(t,o),t.prototype.viewDidLoad=function(){var t=this;o.prototype.viewDidLoad.call(this),this.view.addGestureRecognizer((new UITapGestureRecognizer).on("touch",function(){t.dismissViewController()})),this.view.backgroundColor=UIColor.green},t}(UIViewController),FooViewController=function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.aView=new UIView,t}return __extends(t,o),t.prototype.viewDidLoad=function(){o.prototype.viewDidLoad.call(this),this.vv()},t.prototype.vv=function(){var o=new CAGradientLayer;o.frame={x:44,y:44,width:88,height:88},o.colors=[UIColor.black,UIColor.red,UIColor.clear],o.locations=[0,.3,1],o.startPoint={x:0,y:0},o.endPoint={x:0,y:1},this.view.layer.addSublayer(o),DispatchQueue.main.asyncAfter(2,function(){o.frame={x:44,y:44,width:88,height:200}})},t.prototype.tt=function(){this.aView.backgroundColor=UIColor.white,this.aView.addGestureRecognizer((new UITapGestureRecognizer).on("touch",function(){var o=new UIActionSheet;o.message="退出后不会删除任何历史数据，下次登录依然可以使用本帐号。",o.addDangerAction("退出登录",function(){console.log("vvv")}),o.addCancelAction("取消",function(){console.log("ccc")}),o.show()})),this.view.addSubview(this.aView)},t.prototype.viewWillLayoutSubviews=function(){o.prototype.viewWillLayoutSubviews.call(this),this.aView.frame=this.view.bounds},t}(UIViewController),fooWindow=new UIWindow;fooWindow.rootViewController=new FooViewController,global.fooWindow=fooWindow;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
