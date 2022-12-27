
import React from "react";

import { Link } from "react-router-dom";

const WorkoutCard = function WorkoutCard ({ workout }) {
  const { description, id, thumbnail, title } = workout;

  return (
    <div className="card">
      <img src={thumbnail} className="card-img-top" alt="..."  />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/workouts/${id}`} className="stretched-link"></Link>
      </div>
    </div>
  );
};

export default WorkoutCard;
