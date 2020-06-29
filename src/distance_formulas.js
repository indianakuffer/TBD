function coordToXYZ(lat, lon, rad) {
  let result = []

  // convert lat and lon to radians
  const phi = (lon + 90) / 180 * Math.PI
  const theta = (90 - lat) / 180 * Math.PI

  // calculate position on unit circle
  result.push(Math.sin(theta) * Math.sin(phi))
  result.push(Math.cos(theta))
  result.push(Math.sin(theta) * Math.cos(phi))

  // multiply by radius
  result = result.map(num => num * rad)

  return result
}

function distance(coord1, coord2) {
  // declare coordinate variables from arrays
  const [x1, y1, z1] = coord1
  const [x2, y2, z2] = coord2

  // euclidean distance formula w/o sqrt
  const base = (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2

  return Math.sqrt(base)
}

function getAngleSSS(a, b, c) {
  let base = ((a ** 2) + (c ** 2) - (b ** 2)) / (2 * a * c)

  // answer in radians
  let radian = Math.acos(base)

  // convert back to degrees before returning
  return radian * 180 / Math.PI
}

function getSideSAS(s1, a, s2) {
  // convert degrees to radians before beginning
  let radian = a / 180 * Math.PI
  let base = (s1 ** 2) + (s2 ** 2) - (2 * s1 * s2 * Math.cos(radian))

  return Math.sqrt(base)
}

export function distanceToISS(lon1, lat1, lon2, lat2) {
  // distances in meters
  const earthRadius = 6371000
  const issHeight = 408000

  // convert coordinates from spherical to cartesian
  const cartesian1 = coordToXYZ(lon1, lat1, earthRadius)
  const cartesian2 = coordToXYZ(lon2, lat2, earthRadius)

  // calculate direct distance between coordinates
  const coordDistance = distance(cartesian1, cartesian2)

  // solve for angle between direct line and ISS
  const insideAngle = getAngleSSS(coordDistance, earthRadius, earthRadius)
  const outsideAngle = 180 - insideAngle

  // use angle to calculate distance!
  return getSideSAS(coordDistance, outsideAngle, issHeight)
}