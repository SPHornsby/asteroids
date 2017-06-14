const ship = require('../public/js/ship.js')()
const assert = require('chai').assert



describe('Ship function tests:', () => {
  describe('Thrust', () => {
    it('should return an object with x = 0 and y = -2 when ship angle is 0', () => {
      let thrust = ship.thrustVector(0)
      assert.deepEqual({x: 0, y: -2}, thrust)
    })
    it('should return an object with x = 2 when ship angle is 90', () => {
      let thrust = ship.thrustVector(90)
      assert.deepEqual(2, thrust.x)
    })
    it('should return an object with y = 0.1 when ship angle is 90', () => {
      let thrust = ship.thrustVector(90)
      assert.equal(Math.round(thrust.y), 0)
    })
    it('should return an object with x = -2 when ship angle is 270', () => {
      let thrust = ship.thrustVector(270)
      assert.deepEqual(-2, thrust.x)
    })
    it('should return an object with y = 2, x=~0 when ship angle is 180', () => {
      let thrust = ship.thrustVector(180)
      assert.deepEqual([2, 0], [thrust.y, Math.round(thrust.x)])
    })
  })
  describe('Fire', () => {
    it('should return -100 for fire.y when ship angle is 0', () => {
      let fire = ship.fire(0)
      assert.equal(-100, fire.y)
    })
    it('should return 100 for fire.x when ship angle is 90', () => {
      let fire = ship.fire(90)
      assert.equal(100, fire.x)
    })
  })
})
// /Users/SPHornsby/Documents/code/asteroids/public/js/rotationCorrection.js