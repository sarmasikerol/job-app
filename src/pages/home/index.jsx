import React from "react";
import Filter from "../../components/filter";
import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import "./home.scss"

const Home = () => {
  const { error, jobs, isLoading } = useSelector((store) => store.jobReducer);
  return (
    <div className="home-page">
      <Filter />

      {isLoading ? (
        <Loader />
      ) : error ? ( 
        <Error />
      ) : (
        <div className="cards-wrapper">
          {jobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
