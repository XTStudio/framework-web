(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";var scrollView=new UIScrollView;scrollView.frame={x:0,y:0,width:UIScreen.main.bounds.width,height:UIScreen.main.bounds.height};var img=new UIImage({base64:"iVBORw0KGgoAAAANSUhEUgAAAEAAAAAXCAMAAACMPLmjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpcQ///+dozAHT5P8gzxxteBXA1/8Axv8A/wD///8AqQD//+xYyf8AsOsAWwHS4wCf3gnT5P8AtP8Auf8Ar8+Fxv8AwP8Fu4nA0v8MvP8ArhrR5P8Acf////8LvQvS4/8AlP8AvuRn1th0ye1DyP8Bvudi0PwSxKaj1+layf8ACP8AE1rH4ednz+88wiDQ4/8H17Ka1fNOy/8Avj/M4gPS4yzP47aW1QbS5P4Awv8AACTQ49x50Iq23lzF4FPJ4P8AiSjP40LL4jnN43u83sKR1BfR4+dexhrR4/FMyehq1b+c29Z1zw/S5Ia63dV50THP4lHH4RnR40XL4jXP4pOv286A0xzQ40zJ4SnP42HF4BvR5MWL0fBAyHu83hXR40rK4SzO4qSm1w3R4w3S45yr23634ZKw22zB4GrB35Gy3Iyz3E/I4kfJ4rmV1KOl2RPS5I2z3Kqi2Iq11PA7yBrS4+ZUzC7P4izP4819z0DN4aOm2IS53f8AwCDQ41jF4FPJ4CDQ42++3/8AxBDR41PI4G2/3zvN4yLQ4zDP4zXN4na/3tp5zlvG4CXQ5H+73grR5BTR5CrP40HO5VvG4DbO4nu94R3R4yjP5ONmzpO13D3N48SM1SvQ5OZazQjR4/8AoBjR5Ii23VTJ4Kqf2HO+34G53DPN4iPP48eC0UfM46Cp217H4QDS5GbD4GrB32PD3ynP4jrM47qX1bmU1FfH3yzP4z/M4pKz3aeh0x/Q4rKY1GTD32m/3SrR5BTR5Hm83mXB3v8ApmrB3rSX1Xy53vglxz3N4fcrxyLQ46am16ud1gfS49d3zzTN4Xu63Xi33UHN4sx/0FPF4FrF4f8AABXR4wbR5BTQ4zbO40LL4cWL0G6+3YW53T/L4STP4+JjzkzJ4IK73lHJ4VrG4HLC4EvI4VXI4FHI4QDe8ADW5wDX6ADZ6gLa7ADc7gDV5gDh8gDn+ADr/QDj9ADq/ADg8QDY6QDf8ADm+ADh8wDd7wDu/wDk9gDx/wD9/wDT5MXOgB8AAADodFJOUwADFPwFAQQBAgEDAg0aAv4C/AgUHAkbIgQSGPAKAQz8DB4DBQsZCw4UFwcEjBAJxAYvGCbP++gf+i8D1RtWbwYGu7jCYyjHErQeEgxF+YsWWrmoPYN1SYQx4ibODiJU9au+Ocj1RRVJa5hMcZmdKzHIhmkMNa88rG04W2VPF/C2YIujONd+fpvr4dhNKnfbSd7itESaqSPkvx9EsULJM/gQ3DiSPIsv0lYyaD+G9VmGs+yeVmBJuN49KZlhm0ROfI2eF41PhSmuQG4aWc4gTZGWfEI6kgyN5u3dxixza5TdMbF9rzt2o56yKIh1AAAEQUlEQVQ4y6WUdVTbSRDHJ8mPbIwkEJIgaQKBAEGDBJfg7u6U4lr3Uvert1cvdZfTnru7W0/a8wchCTQCBNpc6C9B7t/O27dvdr8zn9k3894CzDAqPI4RyNZtythsi0SgA5AJM/lU9v+q0SdjmbOubB4xCFMY82HWW9lkwnSwufCBl1OrUgvzZ+SjwvW4W7Q+ff78JcsXAd1aDoo+LbfWwPObl6iGJoaHR8eLgWwt97HyDBz4Pss7fXCoX63un0jNsnbJEb56uA7K8q0EOjRv0ipJoQVrQ0WbzaoFEB5xEhIe7kzQkSIi5CS5XLvOCneEzbra8Af7mBT8LIZlWtP2VyJDQiJXrLFHFgBKkScJjiX/MtZnZ1CZRCy5etc04Lou1rV1j0KMNxleM2i2ZdvWZGTwOF4yGwKZTKUS6CjFlHhaAL/rRaqwF1gjGlZ/LJDZZDKdSoiH66PtrqDwZFo6sFWvLOHECGWyAC7maG00StHUw832JLVyw4cbn3uq11DA85yDaxTw015zuupNm4NHekVrd4Q4yZj4c7ifL89vbr4cD90D/8C8fxOHf4rk89342c+GcABef+OjSu7lZvAbutLDehIfLBtectG+6pqFzEM3j7Zor1H34EbV6F8QZDgIgbf+1IW6EYWZwRJOsG/lvLkfuJgCdVfhnPqJhh/CERWfwYs5Q1t8F5Ef4S726TV32u7oI86aAX4Q+EfbcG83TUyTeVYrvPfGgY8kcWLgJnQqa67ti6FR8RYcExkTJ73ysjL7rWOaNr6b84UbKb5BhlsQ2NExYoyDeEDIEYqjo2JiOCf6NC3QyeI1nZEqLC9oyDEplz2/Mt2kv388Sbs9kn/U7d6lbkWP8m8I/PUUafBwHsSz6fGwf7cPo1p4pY7VxOyq47REO2F4u7GMCoPcqDb2myI02y7pd/C8qhU/35VCz0ArOpL8XYFRdRuP9NPFmfdzatF56PrRtf2k0B0fCldwcDQngkQisVia3i8HVa0AikMTv10M0iQzE2oFJ1wMqqqV5ZXfxG1hGfcXJyg1I8cbug77rD5ibwG4e90LnVCy7ER2oqGwjV8YxlILN4nuuuwKMsVGzd0jcP6k12hU5zSKxis6Gu+P65R1Fb3fdu5m1t6OsgCQJ2fxhqeV6hG1IWwVn//uO/V+sStO8QXnB1p8D51Fec7Za+sG9XpV4wWH0vfeenNV6dL3feqjYeczYAEAjSFxW7pwQe6ChYslwcFrTgt8XNdIOE5Hkz/zCvdXyIi2/NKS3NySryU1vLdtbR3ceBJO02rXvHB7sQWAMA8pz8FstpI0exmDSMz0Z3gEBAijhB4KmZiJMYJtzeYskQoZRKk0zawx7BXmhaGp34OCefgTiUT/AAwhJg2jURACJsbFaO5iBIgmY2QSiWkMjEKZ1JgI0bhcTCye9YMhCo1mzpt1hdCUR5kt2kxrj2v/AUo5WrrUGB3AAAAAAElFTkSuQmCC"}),iv=new UIImageView;iv.loadImageWithURLString("https://file.calicali.cc/7e4e1072ef957f231ebc.jpg",img),iv.frame={x:44,y:44,width:300,height:300},iv.contentMode=UIViewContentMode.scaleAspectFill,scrollView.addSubview(iv),global.aView=scrollView;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
