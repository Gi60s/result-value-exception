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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Result = exports.Exception = void 0;
    const exception_tree_1 = require("exception-tree");
    exports.Exception = exception_tree_1.Exception;
    class Result {
        constructor(value, error, warning) {
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
        *[Symbol.iterator]() {
            yield this.value;
            yield this.error;
            yield this.warning;
        }
    }
    exports.Result = Result;
    exports.default = Result;
});
//# sourceMappingURL=Result.js.map