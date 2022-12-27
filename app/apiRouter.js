
const express = require("express");
const buildWorkoutsRouter = require("./routers/workoutsRouter");

const buildAPIRouter = function buildAPIRouter () {
  
  const router = express.Router();
  
  const workoutsRouter = buildWorkoutsRouter();

  router.get("/workouts/:id", workoutsRouter.getWorkout);
  router.get("/workouts", workoutsRouter.getAllWorkouts); // TODO: Add auth middleware

  return router;
};

module.exports = buildAPIRouter;
