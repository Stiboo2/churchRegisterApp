import React from "react";

const InitSetUp = ({ date, church_branch_id, pastor_id }) => {
  return (
    <div>
      <p>Date : {date}</p>
      <p>Church Branch : {church_branch_id}</p>
      <p>Pastor : {pastor_id}</p>
    </div>
  );
};

export default InitSetUp;
