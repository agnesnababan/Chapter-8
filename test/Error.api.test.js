/* eslint-disable no-undef */
import request from "supertest";
import app from "../app";
import { config } from "dotenv";
import { EmailNotRegisteredError, InsufficientAccessError } from "../app/errors";
config();

describe("API error: email is not registered", () => {
  const emailError = new EmailNotRegisteredError('lalamupon@gmail.com');

  test("defines details()", () => {
    expect(typeof emailError.details).toBe("object");
  });

  test("display error message", () => {
    expect(emailError.message).toBe('lalamupon@gmail.com is not registered!');
  });
});

describe("API error: not found", () => {
  test("should response with a 404 status code", async () => {
    const response = await request(app).post("/v1/auth/loginzz");
    expect(response.statusCode).toBe(404);
  });
});

describe("API error: Insufficient Access", () => {
  const role = "GUEST";
  const err = new InsufficientAccessError(role);
  test("should response with a 404 status code", async () => {
    expect(err.message).toBe("Access forbidden!");
    expect(err.details.reason).toBe(`${role} is not allowed to perform this operation.`);
  });
});
