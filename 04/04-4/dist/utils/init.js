"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
// Example of Callback-Function
var f = function (callback) { return callback(); };
// Real Code
var init = function (callback) {
    console.log("Default Initialization Finished.");
    callback();
    console.log("All Initialization Finished.");
};
exports.init = init;
//# sourceMappingURL=init.js.map