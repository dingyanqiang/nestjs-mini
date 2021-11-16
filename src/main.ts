/*
 * @Author: dingyanqiang
 * @Date: 2021-11-11 14:41:11
 * @LastEditors: dingyanqiang
 * @LastEditTime: 2021-11-16 16:37:28
 * @Description: file content
 */

const http = require('http');

import { Factory, mapRoute, Route } from './common/index';
import { UserController } from './user/user.controller';


let controller = mapRoute(UserController);
console.log('controller:', controller);

http.createServer((req, res) => {
    for(let routeItem of controller.routes) {
        let routeName = routeItem.route;
        if(req.url === routeName) {
            res.setHeader('Content-Type', 'text/palin');
            let func = routeItem.func;
            let resData = func();
            res.end(resData);
        }
    }
    res.setHeader('Content-Type', 'text/palin');
    res.end('没有匹配路径');
    
}).listen(3000, () => {
    console.log(`Port 3000 is listening`);
});






// let User = Factory(UserController);
// http.createServer((req, res) => {
//     let methods = User.getUserServiceMethods();
//     res.end(methods);
// }).listen(3000, () => {
//     console.log(`Port 3000 is listening`);
// });