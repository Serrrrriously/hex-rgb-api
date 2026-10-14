/**
 * Integration tests for the Express route GET /api/hex-to-rgb.
 * Supertest sends real HTTP requests to the app, so these tests check
 * the route, the hexToRgb library and the JSON response together.
 * Run with: npm run test:integration
 */
import { expect } from "chai";
import request from "supertest";
import app from "../../src/app.js";

describe("GET /api/hex-to-rgb integration tests", function () {
  describe("valid request", function () {
    it("returns 200 and the RGB values as JSON", async function () {
      const res = await request(app).get("/api/hex-to-rgb?hex=ff8800");

      expect(res.status).to.equal(200);
      expect(res.headers["content-type"]).to.include("application/json");
      expect(res.body).to.deep.equal({
        hex: "#ff8800",
        rgb: { r: 255, g: 136, b: 0 },
      });
    });

    it("accepts a URL-encoded # sign (%23) and upper case letters", async function () {
      const res = await request(app).get("/api/hex-to-rgb?hex=%23FF8800");

      expect(res.status).to.equal(200);
      expect(res.body.hex).to.equal("#ff8800");
      expect(res.body.rgb).to.deep.equal({ r: 255, g: 136, b: 0 });
    });
  });

  describe("invalid request", function () {
    it("returns 400 when the hex parameter is missing", async function () {
      const res = await request(app).get("/api/hex-to-rgb");

      expect(res.status).to.equal(400);
      expect(res.body.error).to.equal("Query parameter 'hex' is required");
    });

    it("returns 400 when the hex value is invalid", async function () {
      const res = await request(app).get("/api/hex-to-rgb?hex=zzzzzz");

      expect(res.status).to.equal(400);
      expect(res.body.error).to.include("Invalid hex color");
    });

    it("returns 404 for a route that does not exist", async function () {
      const res = await request(app).get("/api/rgb-to-hex?hex=ff8800");

      expect(res.status).to.equal(404);
    });
  });
});
