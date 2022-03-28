// 用于测试commonjs导出
const EventEmitter = require("../lib/bundle");
const event = new EventEmitter();

event.addEventListener("hao", (args) => {
  console.log("chile", ...args);
});

event.emit("hao", "aaam", "kjewr");
