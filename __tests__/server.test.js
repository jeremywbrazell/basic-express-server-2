"use strict";

const { server } = require("../src/server.js");
const supertest = require("supertest");
const mockRequest = supertest(server);

describe("web server", () => {
  it("should respond with a 404 invalid route", () => {
    return mockRequest.get("/foo").then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it("invalid method", () => {
    return mockRequest.get("/foo").then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it("it should respond with a 500 error", () => {
    return mockRequest.get("/person").then((results) => {
      expect(results.status).toBe(500);
      console.log(results);
    });
  });

  it("should respond with a 200", () => {
    return mockRequest.get("/person").then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it("object output is correct", () => {
    return mockRequest.get("/person?name=joe").then((results) => {
    //   console.log(results);
      expect(results.text).toBe('{"name":"joe"}');
    });
  });
});
