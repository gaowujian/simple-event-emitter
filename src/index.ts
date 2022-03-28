import EventEmitter from "./EventEmitter";
export default EventEmitter;

const event = new EventEmitter();

const fn = () => {
  console.log("我应该要吃早饭了");
};
// event.addEventListener("breakfast", fn);
// event.print();
// // event.removeEventListener("breakfast", fn);
// event.emit("breakfast");

// event.print();

// console.log("==============");

event.once("breakfast", fn);
event.print();
event.removeEventListener("breakfast", fn);
event.emit("breakfast");

event.print();
