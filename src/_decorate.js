/*
 * @Author: dingyanqiang
 * @Date: 2021-10-29 16:11:07
 * @LastEditors: dingyanqiang
 * @LastEditTime: 2021-10-29 16:22:39
 * @Description: file content
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var __decorateFormat = (this && this.__decorate) || function (decorators, target, key, desc) {
        //参数数量
    var argLen = arguments.length, 
        //小于3个参数时r为target; 大于3时r为desc
        r = argLen < 3 ? target : (desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc),
        d;
        
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        //存在Reflect,r为
        r = Reflect.decorate(decorators, target, key, desc);
    }
    else {
        for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) {
                r = (
                        argLen < 3 ? d(r) : 
                        (c > 3 ? d(target, key, r) : d(target, key))
                    ) 
                    || r;
            }
        }
    }
    return argLen > 3 && r && Object.defineProperty(target, key, r), r;
};