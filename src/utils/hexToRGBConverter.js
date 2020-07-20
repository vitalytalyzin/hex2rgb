export const hexToRGBConverter = h => {
  let r, g, b, result;

  r = Number("0x" + h[1] + h[2]);
  g = Number("0x" + h[3] + h[4]);
  b = Number("0x" + h[5] + h[6]);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    result = null;
  } else {
    result = `rgb(${r}, ${g}, ${b})`;
  }

  return result;
}
