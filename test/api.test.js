
const buildApp = require("../app/server");
const request = require("supertest");

const { expect } = require("chai");

describe("API", function () {
  let app;

  before(function () {
    app = buildApp();
  });

  it("should get all workouts", async function () {
    const { body, status } = await request(app).get("/api/workouts?trainerId=all");
    expect(status).to.eq(200);
    expect(body).to.have.lengthOf.above(0);
    const [workout] = body;
    expect(workout).to.haveOwnProperty("description");
    expect(workout).to.haveOwnProperty("title");
  });

  it("should get one specific workout", async function () {
    const { body: workout, status } = await request(app).get("/api/workouts/3");
    expect(status).to.eq(200);
    expect(workout).to.deep.eq({
      "description": "Enjoy a fun and high energy workout with Amber. We will engage a full body workout and get your heart rate up!",
      "thumbnail": "https://cgcdn.s3.amazonaws.com/nation/users/UID-W1405610919UID-53c7eba7a992b.png",
      "levelTag": "beginner",
      "media": "https://virtual-library.s3.amazonaws.com/Week2-AmberAutrey.mp4",
      "title": "Strength and Agility by Amber Autrey",
      "impactTag": "high",
      "id": "3",
      "trainerId": "3",
      "duration": 60
    });
  });
});