import EventEmitter from "./EventEmitter";
export default EventEmitter;

// const txt: string = "hello world";
// console.log("txt:", txt);

const event = new EventEmitter();

const fn = () => {};
event.addEventListener("heheh", fn);
event.addEventListener("heheh", fn);
event.on("xx", () => {
  console.log("heelwer");
});
event.print();

event.removeEventListener("heheh", fn);
const AA = () => {
  console.log("aa");
};
const BB = () => {
  console.log("bb");
};
event.once("first", AA);

event.emit("first");
event.print();
