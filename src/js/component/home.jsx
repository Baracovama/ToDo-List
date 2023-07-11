import React from "react";
import List from "./list.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <div className="container col-9 mb-3 text-center">
        <List />
      </div>
    </>
  );
};

export default Home;
