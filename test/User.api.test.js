/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../app");
const dotenv = require("dotenv");
dotenv.config();

describe("API Login", () => {
  it("success login", async () => {
    const user = {
      email: "fikri@binar.co.id",
      password: "123456"
    };
    const response = await request(app).post("/v1/auth/login").send(user);
    expect(response.statusCode).toBe(201);
  });

  it("failed login: wrong password", async () => {
    const failedUser = {
      email: "fikri@binar.co.id",
      password: "1234656"
    };
    const response = await request(app).post("/v1/auth/login").send(failedUser);
    expect(response.statusCode).toBe(401);
  });

  it("failed login: email is not found", async () => {
    const failedUser = {
      email: "parapiribem@gmail.com",
      password: "1234656",
    };
    const response = await request(app).post("/v1/auth/login").send(failedUser);
    expect(response.statusCode).toBe(404);
  });
});

describe("API Register", () => {
  it("success register", async () => {
    const user = {
      name: "Dilan Cemek",
      email: "dilancemek@gmail.com",
      password: "123456"
    };

    const response = await request(app).post("/v1/auth/register").send(user);
    expect(response.statusCode).toBe(201);
  });
});

describe("API Who Am I", () => {
  it("success get user", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZpa3JpIiwiZW1haWwiOiJmaWtyaUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQ1VTVE9NRVIifSwiaWF0IjoxNjY4NTA4NzAyfQ.s_PWW5VoU1zaYE2ESRYqIbOptgqbsPG0IzViN0oIdPQ";
    const response = await request(app).get("/v1/auth/whoami").set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
});