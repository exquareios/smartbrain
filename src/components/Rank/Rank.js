import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white  tc f3">
        {`${name}, your current entry count is...`}
      </div>
      <div className="tc white f1">{entries}</div>
    </div>
  );
};

export default Rank;
