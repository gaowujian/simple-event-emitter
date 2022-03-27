import EventEmitter from "./EventEmitter";
export default EventEmitter;

const event = new EventEmitter();

const fn = () => {
  console.log("我应该要吃早饭了");
};
event.addEventListener("breakfast", fn);
event.addEventListener("breakfast", fn);

event.addEventListener("breakfast", fn);
event.print();

event.removeAllEventListeners("breakfast");
event.print();
