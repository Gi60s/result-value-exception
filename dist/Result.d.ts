import { Exception } from 'exception-tree';
export { Exception };
export declare class Result<T> {
    error: Exception | void;
    value: T | void;
    warning: Exception | void;
    e: Exception | void;
    v: T | void;
    w: Exception | void;
    constructor(value: T | void, error?: Exception, warning?: Exception);
    [Symbol.iterator](): Generator<void | Exception | T, void, unknown>;
}
export default Result;
