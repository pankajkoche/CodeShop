import React from "react";
import ProblemCard from "./ProblemCard";
import { problemsData } from "../../utils/problemsData";
import { useLocation } from 'react-router-dom';

const Post = () => {

    const location = useLocation();
    const path= location.pathname.split("/")[2]

    const selectedProblem = problemsData.find((problem) => problem.url === path);

  if (!selectedProblem) {
    return <div>Problem not found.</div>;
  }
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-9/12 lg:w-70">

        <div className="p-4">         
            <ProblemCard problem={selectedProblem} />
        </div>
      
      </div>
      <div className="w-full md:w-3/12 lg:w-75 py-4">
            fvg
      </div>
    </div>
  );
}; 

export default Post;
