(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t])})(e,t)};return function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),BarViewController=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return __extends(e,o),e.prototype.viewDidLoad=function(){var e=this;o.prototype.viewDidLoad.call(this),this.view.addGestureRecognizer((new UITapGestureRecognizer).on("touch",function(){e.dismissViewController()})),this.view.backgroundColor=UIColor.green},e}(UIViewController),FooViewController=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.aView=new UIView,e}return __extends(e,o),e.prototype.viewDidLoad=function(){o.prototype.viewDidLoad.call(this),this.aView.backgroundColor=UIColor.white,this.aView.addGestureRecognizer((new UITapGestureRecognizer).on("touch",function(){var o=new UIActionSheet;o.message="退出后不会删除任何历史数据，下次登录依然可以使用本帐号。",o.addDangerAction("退出登录",function(){console.log("vvv")}),o.addCancelAction("取消",function(){console.log("ccc")}),o.show()})),this.view.addSubview(this.aView)},e.prototype.viewWillLayoutSubviews=function(){o.prototype.viewWillLayoutSubviews.call(this),this.aView.frame=this.view.bounds},e}(UIViewController),fooWindow=new UIWindow;fooWindow.rootViewController=new FooViewController,global.fooWindow=fooWindow;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
