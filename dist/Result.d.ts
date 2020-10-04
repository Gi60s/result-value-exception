import { Exception } from 'exception-tree';
export declare class Result<T> {
    error: Exception | void;
    value: T | void;
    warning: Exception | void;
    e: Exception | void;
    v: T | void;
    w: Exception | void;
    constructor(value: T | void, error?: Exception, warning?: Exception);
    [Symbol.iterator](): Generator<void | T | Exception, void, unknown>;
}
export default Result;
