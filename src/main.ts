/*
 * @Author: dingyanqiang
 * @Date: 2021-11-11 14:41:11
 * @LastEditors: dingyanqiang
 * @LastEditTime: 2021-11-16 19:07:08
 * @Description: file content
 */

import * as express from "express";

import { Factory, mapRoute, Route } from './common/index';
import { UserController } from './user/user.controller';

const app = express()
const port = 3000;

// 手段调用
// import { UserService } from './user/user.service';
// let instanceController = new UserController(new UserService)

// 控制反转
let instanceController = Factory(UserController)


let controller = mapRoute(UserController);
console.log('controller:', controller);


app.get('/*', (req, res) => {
    for(let routeItem of controller.routes) {
        let routeName = routeItem.route;
        if(req.url === routeName) {
            //let func = routeItem.func.bind(instanceController);
            //为方法重新绑定this指向
            let resData = routeItem.func.apply(instanceController);
            res.end(resData);
        }
    }
    res.send('没有匹配路径')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// http.createServer((req, res) => {
//     for(let routeItem of controller.routes) {
//         let routeName = routeItem.route;
//         if(req.url === routeName) {
//             //res.setHeader('Content-Type', 'text/palin');
//             //let func = routeItem.func.bind(instanceController);
//             //为方法重新绑定this指向
//             let resData = routeItem.func.apply(instanceController);
//             res.end(resData);
//         }
//     }
//     //res.setHeader('Content-Type', 'text/palin');
//     res.end('没有匹配路径');
    
// }).listen(3000, () => {
//     console.log(`Port 3000 is listening`);
// });






// let User = Factory(UserController);
// http.createServer((req, res) => {
//     let methods = User.getUserServiceMethods();
//     res.end(methods);
// }).listen(3000, () => {
//     console.log(`Port 3000 is listening`);
// });