
  // Constants
  const piForRad = Math.PI/180
  // Functors
  const degToRad = degree => degree * piForRad

  const thrustVector = (angle) => {
    let rad = degToRad(angle)
    return {
      x: Math.sin(rad) * 2,
      y: Math.cos(rad) * -2
    }
  }
  const fire = (angle) => {
    let rad = degToRad(angle)
    const left = (Math.sin(rad) * 21) -3
    const top = (Math.cos(rad) * -21) -3
    const x = Math.sin(rad) * 100
    const y = Math.cos(rad) * -100
    return {
      left,
      top,
      x,
      y
    }
  }
  const ship = () => {
    return {
      fire,
      thrustVector
    }
  }

  module.exports = ship