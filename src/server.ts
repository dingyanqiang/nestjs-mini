/*
 * @Author: dingyanqiang
 * @Date: 2021-10-28 16:13:58
 * @LastEditors: dingyanqiang
 * @LastEditTime: 2021-10-28 16:45:50
 * @Description: file content
 */
import app from "./app";
/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;
