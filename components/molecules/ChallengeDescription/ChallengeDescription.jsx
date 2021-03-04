import React from "react";

const ChallengeDescription = ({
  name,
  description,
  attemps,
  timesSolved,
  ...props
}) => {
  return (
    <div className="grid-cols-3 p-5 bg-secondary-darker text-light">
      <div className="flex justify-between pb-4">
        <h1 className="font-bold text-4xl">{name}</h1>
        <span>Button</span>
      </div>
      <p className="pb-4">{description}</p>
      <div className="flex justify-between font-bold">
        <p className="text-2xl">Your attemps: {attemps}</p>
        <p className="text-sm">Times solved: {timesSolved}</p>
      </div>
    </div>
  );
};

export default ChallengeDescription;

ChallengeDescription.defaultProps = {
  name: "My first challenge",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  attemps: 14,
  timesSolved: 198,
};
