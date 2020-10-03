import { Exception } from 'exception-tree'

export default class Result<T> {
	error: Exception | void
	value: T | void
	warning: Exception | void
	e: Exception | void
	v: T | void
	w: Exception | void

	#index:number = -1

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

	get it (): Iterable<T | Exception | void> {
		const context = this
		const result = Object.create(null)
		let index = -1

		result.next = function () : IteratorResult<T | Exception | void, void> {
			index++
			switch (index) {
				case 0:
					return {
						done: false,
						value: context.value
					}
				case 1:
					return {
						done: false,
						value: context.error
					}
				case 2:
					return {
						done: false,
						value: context.warning
					}
			}
			return {
				done: true,
				value: undefined
			}
		}
	
		result[Symbol.iterator] = function () {
			return this
		}

		return result
	}

	next () : IteratorResult<T | Exception | void, void> {
		this.#index++
		switch (this.#index) {
			case 0:
				return {
					done: false,
					value: this.value
				}
			case 1:
				return {
					done: false,
					value: this.error
				}
			case 2:
				return {
					done: false,
					value: this.warning
				}
		}
		return {
			done: true,
			value: undefined
		}
	}

	[Symbol.iterator] () {
		return this
	}
}
