import { Exception as ExceptionClass } from 'exception-tree';
export interface Exception extends ExceptionClass {
}
export declare const Exception: typeof ExceptionClass;
export declare class Result<T> {
    error: ExceptionClass | void;
    value: T | void;
    warning: ExceptionClass | void;
    e: ExceptionClass | void;
    v: T | void;
    w: ExceptionClass | void;
    constructor(value: T | void, error?: ExceptionClass, warning?: ExceptionClass);
    [Symbol.iterator](): Generator<void | ExceptionClass | T, void, unknown>;
}
export default Result;
