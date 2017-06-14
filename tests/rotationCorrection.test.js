const rotationCorrection = require('../public/js/rotationCorrection.js')
const assert = require('chai').assert

describe('Rotation correction tests:', () => {
  describe('rotation between -135 and 45', () => {
    it('should offset rotation by -45 degrees and then return an angle from 0-360', () => {
      let corrected = rotationCorrection(-55)
      assert.equal(260, corrected)
    })
  })
  describe('rotation between -135 (inclusive) and 180', () => {
    it('should offset rotation by +315 degrees', () => {
      let corrected = rotationCorrection(110)
      assert.equal(110-45, corrected)
    })
  })
})