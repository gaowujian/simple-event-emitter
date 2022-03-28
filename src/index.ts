import EventEmitter from "./EventEmitter";

const event = new EventEmitter();

const fn = () => {
  console.log("this:", this);
  console.log("我应该要吃早饭了");
};
event.addEventListener("breakfast", fn);
// event.print();
// // event.removeEventListener("breakfast", fn);
// event.emit("breakfast");

// event.print();

// console.log("==============");

// event.once("breakfast", fn);
// event.print();
// event.removeEventListener("breakfast", fn);
event.emit("breakfast");

event.print();

// export default EventEmitter;
