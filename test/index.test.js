const { Exception } = require('exception-tree')
const { default: Result, R2 } = require('../dist/Result')
const { expect } = require('chai')

describe('result-value-exception', function () {

  describe('value', () => {
    it('can get value property', function () {
      const exception = new Exception('')
      const result = new Result('foo', exception)
      expect(result.value).to.equal('foo')
    })

    it('can get v property', function () {
      const exception = new Exception('')
      const result = new Result('foo', exception)
      expect(result.v).to.equal('foo')
    })

    it('can use iterator', function () {
      const exception = new Exception('')
      const result = new Result('foo', exception)
      const [ v ] = result
      const [ x ] = result
      expect(v).to.equal('foo')
      expect(x).to.equal('foo')
    })

    it('will have exception as undefined', function () {
      const exception = new Exception('')
      const result = new Result('foo', exception)
      const { e, error } = result
      const [ , err ] = result
      expect(e).to.be.undefined
      expect(error).to.be.undefined
      expect(err).to.be.undefined
    })

    it('can have warning as undefined when value is set', function () {
      const exception = new Exception('')
      const exception2 = new Exception('')
      const result = new Result('foo', exception, exception2)
      const { w, warning } = result
      const [ , , warn ] = result
      expect(w).to.be.undefined
      expect(warn).to.be.undefined
      expect(warning).to.be.undefined
    })

    it('can have warning as exception when value is set', function () {
      const exception = new Exception('')
      const exception2 = new Exception('')
      exception2.message('warn')
      const result = new Result('foo', exception, exception2)
      const { w, warning } = result
      const [ , , warn ] = result
      expect(w).to.match(/warn/)
      expect(warn).to.match(/warn/)
      expect(warning).to.match(/warn/)
    })
  })

  it('will have undefined value if there is an exception', function () {
    const exception = new Exception('')
    exception.message('error')
    const result = new Result('foo', exception)
    const [ value, err ] = result
    expect(value).to.be.undefined
    expect(err).to.match(/error/)
  })
})