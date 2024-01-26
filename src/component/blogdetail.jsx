import React from "react";
import {  useParams } from "react-router-dom";
import data from "./data";

const Blogdetail = () => {
  let {id}=useParams();
  const cardData=data.find(cardData=>String(cardData.id)===id);
  return (
    <div className="detail">
      <div className="container">
        <div className="card">
          <div className="card-header">
            {/* <h1>{state.key1.userId}</h1> */}
            <h1>{cardData.title}</h1>
          </div>
          <div className="card-body">
            <h1>{cardData.body}</h1>
          </div>
          <div className="card-footer">
            <h1>{cardData.id}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetail;
