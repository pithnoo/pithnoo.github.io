export function normalize(v){
  const mag = Math.sqrt(v[0] ** 2 + v[1] ** 2);

  if (mag === 0) return [0, 0]; // avoid division by zero

  return [v[0] / mag, v[1] / mag];
}

export function distance(v1, v2){
  let dx = v1[0] - v2[0];
  let dy = v1[1] - v2[1];

  // calculate euclidean distance
  return Math.sqrt( (dx ** 2) + (dy ** 2) );
}
