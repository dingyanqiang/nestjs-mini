/*
 * @Author: dingyanqiang
 * @Date: 2021-10-28 16:13:58
 * @LastEditors: dingyanqiang
 * @LastEditTime: 2021-10-28 16:45:29
 * @Description: file content
 */
import express from "express";
// Create Express server
const app = express();

app.set("port", process.env.PORT || 3000);

export default app;
