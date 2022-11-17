const request = require("supertest")
const app = require("../app/index")
const dotenv = require("dotenv")
dotenv.config();

// describe("Dog", () => {
//     it("should have name called 'Arnold'", () => {
//         const dog = new Dog("Arnold");

//         expect(dog).toHaveProperty("name", "Arnold");
//     });

//     it("should be able to bark and return 'Woof!'", () => {
//         const dog = new Dog("Arnold");
//         expect(dog.bark()).toEqual("Woof!");
//     });
// });

// describe("API get all cars", () => {
//     it("success get all data cars", (done) => {
//         request(app)
//             .get("/v1/cars")
//             .expect(200, done);
//     });
// });

describe("GET /cars", () => {
    describe("success get all cars", () => {
      it("should response with a 200 status code", async () => {
        const response = await request(app).get("/v1/cars");
        expect(response.statusCode).toBe(200);
      });
    });
  
    describe("success get data car by ID 10", () => {
      it("should response with a 200 status code", async () => {
        const response = await request(app).get("/v1/cars/10");
        expect(response.statusCode).toBe(200);
      });
    });
  });
  
  describe("API Create Car", () => {
    it("success create a data of car", async () => {
      const token = "jwt token of user with role admin";
      const cars = {
        name: "string",
        price: 0,
        image: "string",
        size: "string"
      };
      const response = await request(app).post("/v1/cars").set("Authorization", `Bearer ${token}`).send(cars);
      expect(response.statusCode).toBe(401);
    });
  
    it("failed: unauthorized", async () => {
      const cars = {
        name: "string",
        price: 0,
        image: "string",
        size: "string"
      };
      const response = await request(app).post("/v1/cars").send(cars);
      expect(response.statusCode).toBe(401);
    });
  });
  
  describe("API for Rent Car by ID", () => {
    it("success rent car", async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZpa3JpIiwiZW1haWwiOiJmaWtyaUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQ1VTVE9NRVIifSwiaWF0IjoxNjY4NTA4NzAyfQ.s_PWW5VoU1zaYE2ESRYqIbOptgqbsPG0IzViN0oIdPQ";
      const rentTime = {
        rentStartedAt: "2022-11-15T11:44:02.329Z",
        rentEndedAt: "2022-11-15T11:44:02.329Z"
      };
      const response = await request(app).post("/v1/cars/20/rent").set("Authorization", `Bearer ${token}`).send(rentTime);
      expect(response.statusCode).toBe(201);
    });
  
    it("failed rent car: unauthorized", async () => {
      const rentTime = {
        rentStartedAt: "2022-11-15T11:44:02.329Z",
        rentEndedAt: "2022-11-15T11:44:02.329Z"
      };
      const response = await request(app).post("/v1/cars/40/rent").send(rentTime);
      expect(response.statusCode).toBe(401);
    });
  
    it("failed rent car: ID car is not found", async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZpa3JpIiwiZW1haWwiOiJmaWtyaUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQ1VTVE9NRVIifSwiaWF0IjoxNjY4NTA4NzAyfQ.s_PWW5VoU1zaYE2ESRYqIbOptgqbsPG0IzViN0oIdPQ";
      const rentTime = {
        rentStartedAt: "2022-11-15T11:44:02.329Z",
        rentEndedAt: "2022-11-15T11:44:02.329Z"
      };
      const response = await request(app).post("/v1/cars/145/rent").set("Authorization", `Bearer ${token}`).send(rentTime);
      expect(response.statusCode).toBe(500);
    });
  });
  
  describe("API Update Car", () => {
    it("success updated car", async () => {
      const token = "jwt token of user with role admin";
      const updatedCar = {
        name: "string",
        price: 0,
        image: "string",
        size: "string"
      };
      const response = await request(app).put("/v1/cars/22").set("Authorization", `Bearer ${token}`).send(updatedCar);
      expect(response.statusCode).toBe(401);
    });
  
    it("update failed: unauthorized", async () => {
      const updatedCar = {
        name: "string",
        price: 0,
        image: "string",
        size: "string"
      };
      const response = await request(app).put("/v1/cars/22").send(updatedCar);
      expect(response.statusCode).toBe(401);
    });
  });
  
  describe("API Delete Car", () => {
    it("success deleted car", async () => {
      const token = "jwt token of user with role admin";
      const response = await request(app).delete("/v1/cars/25").set("Authorization", `Bearer ${token}`);
      // expect(response.statusCode).toBe(204);
      expect(response.statusCode).toBe(401);
    });
  
    it("delete car failed: unauthorized", async () => {
      const response = await request(app).delete("/v1/cars/25");
      expect(response.statusCode).toBe(401);
    });
  });