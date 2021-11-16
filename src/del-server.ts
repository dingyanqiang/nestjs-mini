/*
 * @Author: dingyanqiang
 * @Date: 2021-10-28 16:13:58
 * @LastEditors: dingyanqiang
 * @LastEditTime: 2021-10-28 18:26:33
 * @Description: file content
 */


import express from "express";

const app = express()
const port = 3000;




function f() {
    console.log("f():evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}
function g() {
    console.log("g():evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {
        console.log('this is method run()')
    }
}
new C().method();


app.get('/', (req, res) => {
  res.send('Hello World!!!!!11111')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

export default app;
