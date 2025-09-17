const request = require("supertest");
const app = require("./server");

describe("API Tests", () => {
  it("GET /api should return welcome message", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "hooray! welcome to our api!");
  });

  it("Math sanity check", () => {
    expect(2 + 2).toBe(4);
  });
});
