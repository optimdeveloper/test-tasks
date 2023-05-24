import React from "react";
import { withRouter } from "react-router-dom";
import "./index.css";
import DetailCard from "../../Components/DetailCard";

function Accept(props) {
  const { numero } = (props.location && props.location.state) || {};
  return <DetailCard numero={numero}/>;
}
export default withRouter(Accept);
