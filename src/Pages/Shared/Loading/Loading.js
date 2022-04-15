import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="spinnerContainer">
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default Loading;
