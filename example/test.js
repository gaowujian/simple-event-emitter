// 用于测试commonjs导出
const EventEmitter = require("../lib/bundle");
const event = new EventEmitter();
event.addEventListener("test", (args) => {
  console.log("chile", ...args);
});

event.emit("test", "aa", "bb");
