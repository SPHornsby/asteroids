
// Phaser sets heading as 0 for up, 90 for right, -90 for left and 180 or -180 for down

const rotationCorrection = (rotation) => {
  let direction
  if (rotation < 45 && rotation > -135) {
    direction =  rotation -45
  } else if (rotation <=-135 && rotation < 180){
    direction = rotation + 315
  }
  else direction = Math.abs(rotation - 45)
  return (direction + 360) % 360
}
module.exports = rotationCorrection