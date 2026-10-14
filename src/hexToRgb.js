/**
 * hexToRgb - converts a hex color code to RGB values.
 */

/**
 * Converts a 6-digit hex color code to an RGB object.
 * The leading "#" is optional and letters can be upper or lower case.
 * @param {string} hex - For example "#ff8800" or "FF8800".
 * @returns {{r: number, g: number, b: number}} Each value is 0-255.
 * @throws {Error} If hex is not a string with exactly 6 hex digits.
 */
export function hexToRgb(hex) {
  if (typeof hex !== "string" || !/^#?[0-9a-fA-F]{6}$/.test(hex)) {
    throw new Error(`Invalid hex color: ${hex}`);
  }

  const digits = hex.replace("#", "");
  return {
    r: parseInt(digits.slice(0, 2), 16),
    g: parseInt(digits.slice(2, 4), 16),
    b: parseInt(digits.slice(4, 6), 16),
  };
}
