import { Exception as ExceptionClass } from 'exception-tree'

export interface Exception extends ExceptionClass {}

export const Exception = ExceptionClass

export class Result <T> {
	error: ExceptionClass | void
	value: T | void
	warning: ExceptionClass | void
	e: ExceptionClass | void
	v: T | void
	w: ExceptionClass | void

	constructor (value: T|void, error?: ExceptionClass, warning?: ExceptionClass) {
		if (!error || !error.hasException) error = undefined
		if (!warning || !warning.hasException) warning = undefined
		if (error) value = undefined

		this.error = error
		this.value = value
		this.warning = warning
		this.e = error
		this.v = value
		this.w = warning
	}

	*[Symbol.iterator] () {
		yield this.value
		yield this.error
		yield this.warning
	}
}

export default Result