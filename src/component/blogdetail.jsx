import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Blogdetail = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const Data = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (response.status === 200) {
          setPost(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };

    Data();

   
    return () => {
      setLoading(false);
    };
  }, [id]);

  return (
    <div className="detail">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            role="status"
            style={{ width: 200, height: 200, color: "#66BB81" }}
          ></div>
        </div>
      ) : (
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h1>{post.title}</h1>
            </div>
            <div className="card-body">
              <p>{post.body}</p>
            </div>
            <div className="card-footer">
              <p>Post ID: {post.id}</p>
              <Link to="/" className="planner">Back</Link>
              <Link to="/FormHandle" className="planner">
      Add Post
    </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogdetail;
