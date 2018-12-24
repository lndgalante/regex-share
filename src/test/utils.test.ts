import * as assert from 'assert'
import isValidRegex from '../utils'

suite('Extension Tests', function() {
  test('Something 1', function() {
    assert.equal(true, isValidRegex('/w/g'))
  })
})
