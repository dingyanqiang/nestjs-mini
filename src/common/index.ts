/*
 * @Author: dingyanqiang
 * @Date: 2021-11-11 14:06:01
 * @LastEditors: dingyanqiang
 * @LastEditTime: 2021-11-16 18:50:59
 * @Description: file content
 */
import "reflect-metadata";

type Construct<T = any> = new (...args: Array<any>) => T;

export interface Route {
    route: string;
    method: string;
    func: Function;
    methodName: string;
}

//声明Injectable修饰器，当为类声明该修饰器时，则表示该类是可注入的类
function Injectable<T>(constructor: Construct<T>) {}
//声明Controller修饰器，当为类声明该装饰器时，则表示该类是控制器模块
//function Controller<T>(constructor: Construct<T>) {
function Controller(path: string): Function {
    //修饰器传参
    return function<T>(constructor: Construct<T>) {
        Reflect.defineMetadata('path', `/${path}`, constructor);
    }
}

// 一个工厂函数，根据传入的请求方法类型来返回一个该类型的装饰器工厂函数
function createMethodsDecorator(method: string): Function {
    return function(routeName: string): Function {
        return function(target: any, propertyName: string, descriptor: PropertyDescriptor) {
            Reflect.defineMetadata('route', `/${routeName}`, target, propertyName);
            Reflect.defineMetadata('method', method, target, propertyName);
        }
    }
}

// 路径信息解析函数，传入的参数为控制器类，返回该路由器所有路由信息
function mapRoute<T>(constructor: Construct<T>) {
    let pathName = Reflect.getMetadata('path', constructor);
    let routes: Array<Route> = [];
    let proto = constructor.prototype;
    //获取原型所有函数
    let funcs = Object.keys(proto).filter(item => (typeof proto[item] === 'function'));
    funcs.forEach(funcName => {
        let route = Reflect.getMetadata('route', proto, funcName);
        route = pathName + route;
        console.log('route:', route);
        let method = Reflect.getMetadata('method', proto, funcName);
        let func = proto[funcName];
        let routeData: Route = {
            route,
            method,
            func,
            methodName: funcName
        };
        routes.push(routeData);
    });
    return {
        pathName,
        routes
    }
}

//声明简单的IOC容器，用来将对象创建的控制器反转
function Factory<T>(constructor: Construct<T>) {
    let paramtypes = Reflect.getMetadata('design:paramtypes', constructor);
    console.log('paramtypes:', paramtypes);
    let providers = paramtypes.map((provider: Construct<T>) => new provider());
    console.log('providers:', providers);
    let instanceController = new constructor(...providers);
    return instanceController;
}


const Get = createMethodsDecorator('GET');
const Post = createMethodsDecorator('POST');
const Put = createMethodsDecorator('PUT');
const Delete = createMethodsDecorator('DELETE');

export {
    Injectable,
    Controller,
    mapRoute,
    Factory,
    Get,
    Post,
    Put,
    Delete
}
