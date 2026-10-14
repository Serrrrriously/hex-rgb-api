/**
 * Unit tests for hexToRgb, written with Mocha and the Chai expect style.
 * Run with: npm run test:unit
 */
import { expect } from "chai";
import { hexToRgb } from "../../src/hexToRgb.js";

describe("hexToRgb() unit tests", function () {
  describe("valid input", function () {
    it("converts #ff8800 to { r: 255, g: 136, b: 0 }", function () {
      expect(hexToRgb("#ff8800")).to.deep.equal({ r: 255, g: 136, b: 0 });
    });

    it("converts black #000000 and white #ffffff (lowest and highest values)", function () {
      expect(hexToRgb("#000000")).to.deep.equal({ r: 0, g: 0, b: 0 });
      expect(hexToRgb("#ffffff")).to.deep.equal({ r: 255, g: 255, b: 255 });
    });

    it("accepts a hex code without the # sign", function () {
      expect(hexToRgb("1a2b3c")).to.deep.equal({ r: 26, g: 43, b: 60 });
    });

    it("accepts upper case letters", function () {
      expect(hexToRgb("#FF8800")).to.deep.equal(hexToRgb("#ff8800"));
    });
  });

  describe("invalid input", function () {
    it("throws an error for a code that is too short", function () {
      expect(() => hexToRgb("#fff")).to.throw(Error, "Invalid hex color");
    });

    it("throws an error for a character that is not a hex digit", function () {
      expect(() => hexToRgb("#gg0000")).to.throw(Error, "Invalid hex color");
    });

    it("throws an error for an empty string", function () {
      expect(() => hexToRgb("")).to.throw(Error, "Invalid hex color");
    });

    it("throws an error when the input is not a string", function () {
      expect(() => hexToRgb(123456)).to.throw(Error, "Invalid hex color");
    });
  });
});
