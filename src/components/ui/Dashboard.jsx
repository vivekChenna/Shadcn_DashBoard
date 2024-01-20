import React from "react";
import ComboBox from "./ComboBox";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardContainer from "./DashBoardContainer";

const Dashboard = () => {
  return (
    <div className=" mb-3">
      <DashBoardHeader />
      <DashBoardContainer />
    </div>
  );
};

export default Dashboard;
