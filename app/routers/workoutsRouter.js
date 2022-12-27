
const workouts = require("../../data/workouts.json");

const waitFn = () => new Promise(res => setTimeout(res, 500));

const buildWorkoutsRouter = function buildWorkoutsRouter () {

  const getWorkout = async function getWorkout (req, res) {
    try {
      await waitFn() // FIXME: Remove this, just to show loading animation
      res.json(workouts.find(w => w.id === req.params.id))
    } catch (err) {
      console.error(err); // FIXME: log missing
      res.status(500).json(err);
    }
  };

  const getAllWorkouts = async function getAllWorkouts (req, res) {
    try {
      await waitFn() // FIXME: Remove this, just to show loading animation
      const trainerId = req.query.trainerId;
      res.json(workouts.filter(w => trainerId === "all" || w.trainerId === trainerId));
    } catch (err) {
      console.error(err); // FIXME: log missing
      res.status(500).json(err);
    }
  };

  return {
    getAllWorkouts,
    getWorkout
  }
};

module.exports = buildWorkoutsRouter;
