# Result Value Exception

This library allows you to combine a success value, an error value, and a warning value into a single variable that can easily be returned from functions and allows easy array and object destructuring to extract the values. 

This library uses the [exception-tree](https://www.npmjs.com/package/exception-tree) package to generate errors and warnings.

## Examples

### Success Example

In the below example the error and warning exceptions never get a message, so these values become undefined when passed into the Result object.

```js
const { Exception, Result } = require('result-value-exception')

const err = new Exception('This operation failed')
const warn = new Exception('There are some warnings')

const result = new Result('the result', err, warn)

// destructure into new variable names
const [ a, b, c ] = result
console.log(a, b, c) // "the result" undefined undefined

// object destructure
const { value, error, warning } = result
console.log(value, error, warning) // "the result" undefined undefined
```

### Error Example

```js
const { Exception, Result } = require('result-value-exception')

const err = new Exception('This operation failed')
err.message('I am a teapot')

const warn = new Exception('There are some warnings')
err.message('Warning 1')
err.message('Warning 2')

const result = new Result('the result', err, warn)

// destructure into new variable names
const [ a, b, c ] = result
console.log(a, b, c) // a is undefined because the error has messages

// object destructure
const { value, error, warning } = result
console.log(value, error, warning) // value is undefined because the error has messages


```

# API

## Constructor

`Result ( value [, error [, warning ] ] )`

Create a Result instance.

**Parameters:**

| Parameter | Description | Type | Default |
| --------- | ----------- | ---- | ------- |
| **value** | The success value for the Result instance. | any | |
| error | An [Exception](https://www.npmjs.com/package/exception-tree) instance that may or may not have any messages. If an message does exist for this object then the Result value will be `undefined`. | [Exception](https://www.npmjs.com/package/exception-tree) | undefined |
| warning | An [Exception](https://www.npmjs.com/package/exception-tree) instance that may or may not have any messages. If a message does exist the Result value will not be converted to `undefined`. | [Exception](https://www.npmjs.com/package/exception-tree) | undefined |

**Returns** an Result instance.

# Reading the Result

A Result is an object that allows destructuring from an iterable or a plain object. 

The object has the properties:

- *error* - An [Exception object](https://www.npmjs.com/package/exception-tree). If the exception has no message then this value will be `undefined`.

- *e* - An alias for the `error` property.

- *value* - The success value. This value will be `undefined` if the error exception has a message.

- *v* - An alias for the `value` property.

- *warning* - An [Exception object](https://www.npmjs.com/package/exception-tree) with warnings that do not prevent successful operation. If there is no warning message then this value will be `undefined`.

The iterable has the same values as the object in order of:

1) *value*

2) *error*

3) *warning*

## Read Entire Object

Probably the most wellknown method for reading a result, you can get the entire object and then access the properties off of that object.

```js
const result = new Result('value', error, warning)
console.log(result.error)
console.log(result.value)
console.log(result.warning)
```

## Destructure by Properties

Default destructuring requires the original property names to be used. You can specify as many or as few properties as you'd like to extract. It is also possible to specify the name of the extracted property.

**Specify all Properties**

```js
const { error, value, warning } = new Result('value', error, warning)
console.log(error)
console.log(value)
console.log(warning)
```

**Specify some Properties**

```js
const { value } = new Result('value', error, warning)
console.log(value)
```

**Specify Properties with Different Name**

In this example:

- `error` is renamed to `e`
- `value` is renamed to `schema`
- `warning` is not renamed

```js
const { error: e, value: schema, warning } = new Result('value', error, warning)
console.log(e)
console.log(schema)
console.log(warning)
```

## Destructure by Index

You can choose the names of the value, but the order is important. The order is 1) the value, 2) the error, 3) the warning.

It is not a requirement to get all three values.

**Get All Three Properties**

```js
const [ val, err, warning ] = new Result('value', error, warning)
console.log(err)
console.log(val)
console.log(warning)
```

**Get Just the Value**

```js
const [ value ] = new Result('value', error, warning)
console.log(value)
```

**Get Just the Error**

```js
const [ , err ] = new Result('value', error, warning)
console.log(err)
```

**Get Just the Warning**

```js
const [ , , warning ] = new Result('value', error, warning)
console.log(warning)
```