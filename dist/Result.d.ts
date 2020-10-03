import { Exception } from 'exception-tree';
export default class Result<T> {
    #private;
    error: Exception | void;
    value: T | void;
    warning: Exception | void;
    e: Exception | void;
    v: T | void;
    w: Exception | void;
    constructor(value: T | void, error?: Exception, warning?: Exception);
    next(): IteratorResult<T | Exception | void, void>;
    [Symbol.iterator](): this;
}
