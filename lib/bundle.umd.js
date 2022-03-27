(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = require("tslib");
	const EventEmitter_1 = tslib_1.__importDefault(require("./EventEmitter"));
	exports.default = EventEmitter_1.default;
	const txt = "hello world";
	console.log("txt:", txt);

}));
