
import Icon from "./Icon";
import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

const LEVEL_CLASS = {
  beginner: "info",
  intermediate: "warning",
  advanced: "danger"
};
const IMPACT_CLASS = {
  low: "info",
  medium: "warning",
  high: "danger"
};

const Workout = function Workout () {
  const [workout, setWorkout] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/workouts/${id}`).then(res => res.json()).then(data => {
      setWorkout(data);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="card">
          <div className="card-body">
            { workout && !isLoading ? (
              <React.Fragment>
                <h3 className="card-title">{workout.title}</h3>
                <p className="card-text">{workout.description}</p>
                <div className="row">
                  <div className="col-md-8 mb-4">
                    <span className="badge text-bg-secondary me-2">Duration: {workout.duration} mins</span>
                    <span className={`badge text-bg-${LEVEL_CLASS[workout.levelTag]} me-2`}>
                      Level: {workout.levelTag}
                    </span>
                    <span className={`badge text-bg-${IMPACT_CLASS[workout.impactTag]}`}>
                      Impact: {workout.impactTag}
                    </span>
                  </div>
                  <div className="col text-end mb-4">
                    <Link to={`/dashboard?trainerId=${workout.trainerId}`} className="btn btn-dark btn-sm">
                      <Icon icon="person-video2"/>&nbsp;
                      Other videos from this trainer
                    </Link>
                  </div>
                </div>
                <video controls className="card-img-top">
                  <source src={workout.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder placeholder-lg col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder placeholder-sm col-7"></span>
                  <span className="placeholder placeholder-sm col-4"></span>
                  <span className="placeholder placeholder-sm col-4"></span>
                </p>
                <video width="100%" className="bg-secondary">
                </video>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
