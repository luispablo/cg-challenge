
import React, { useEffect, useState } from "react";
import useQuery from "./useQuery";
import WorkoutCard from "./WorkoutCard";

import { useParams } from "react-router-dom";

const PlaceholderCard = function PlaceholderCard () {
  return (
    <div className="card" aria-hidden="true">
      <div className="card-img-top bg-secondary img-placeholder">
      </div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
        </p>
      </div>
    </div>
  );
};

const placeholderCards = Array(4).fill().map(i => <PlaceholderCard key={i} />);

const Dashboard = function Dashboard () {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] =  useState(false);

  const query = useQuery();
  const trainerId = query.get("trainerId");

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/workouts?trainerId=${trainerId || "all"}`).then(res => res.json()).then(data => {
      setWorkouts(data);
      setIsLoading(false);
    });
  }, [trainerId]);

  const items = isLoading ? placeholderCards : workouts.map(w => <WorkoutCard key={w.id} workout={w} />);

  return (
    <React.Fragment>
      <h3>Showing videos from {trainerId ? `trainer #${trainerId}` : "all trainers"}</h3>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {items.map((item, i) => <div className="col" key={i}>{item}</div>)}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
