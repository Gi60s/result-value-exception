import { Exception } from 'exception-tree'

export {
	Exception
}

export class Result <T> {
	error: Exception | void
	value: T | void
	warning: Exception | void
	e: Exception | void
	v: T | void
	w: Exception | void

	constructor (value: T|void, error?: Exception, warning?: Exception) {
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