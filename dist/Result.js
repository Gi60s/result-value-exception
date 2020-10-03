var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "exception-tree"], factory);
    }
})(function (require, exports) {
    "use strict";
    var _index;
    Object.defineProperty(exports, "__esModule", { value: true });
    const exception_tree_1 = require("exception-tree");
    const e = new exception_tree_1.Exception();
    console.log(e);
    class Result {
        constructor(value, error, warning) {
            _index.set(this, -1);
            if (!error || !error.hasException)
                error = undefined;
            if (!warning || !warning.hasException)
                warning = undefined;
            if (error)
                value = undefined;
            this.error = error;
            this.value = value;
            this.warning = warning;
            this.e = error;
            this.v = value;
            this.w = warning;
        }
        next() {
            __classPrivateFieldSet(this, _index, +__classPrivateFieldGet(this, _index) + 1);
            switch (__classPrivateFieldGet(this, _index)) {
                case 0:
                    return {
                        done: false,
                        value: this.value
                    };
                case 1:
                    return {
                        done: false,
                        value: this.error
                    };
                case 2:
                    return {
                        done: false,
                        value: this.warning
                    };
            }
            return {
                done: true,
                value: undefined
            };
        }
        [(_index = new WeakMap(), Symbol.iterator)]() {
            return this;
        }
    }
    exports.default = Result;
});
//# sourceMappingURL=Result.js.map