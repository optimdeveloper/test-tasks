import React from "react";
import { withRouter } from "react-router-dom";
import "./index.css";
import Card from "../../Components/Card";
import { useSelector } from "react-redux";

function Home() {
  const tasks = useSelector((state) => state.users.tasks);
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1">
      {tasks.map((item) => (
        <Card key={item.numero} task={item}></Card>
      ))}
    </div>
  );
}
export default withRouter(Home);
