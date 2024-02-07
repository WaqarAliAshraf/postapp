import React, { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";
import axios from "axios";
const Blogdetail = () => {
  const [posts, setPosts] = useState([]);
  let {id}=useParams()

  useEffect(() => {
    const Data = async () => {
        const result = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
        if (result.status === 200) {
          const Posts = result.data;
          setPosts(Posts);
        } 
    };

    Data();
  }, []); 
  return (
    <div className="detail">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>{posts.title}</h1>
          </div>
          <div className="card-body">
            <h1>{posts.body}</h1>
          </div>
          <div className="card-footer">
            <h1>{posts.id}</h1>
            <Link to="/" className="planner">Back</Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Blogdetail;
