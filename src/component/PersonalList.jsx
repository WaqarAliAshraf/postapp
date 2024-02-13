import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PersonList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); 
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const endpoint = "posts";
  const limit = 10;
  const apiUrl = `${baseUrl}/${endpoint}?_start=${(currentPage - 1) * limit}&_limit=${limit}`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiUrl]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${endpoint}/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <Link to="/FormHandle" className="planner">
        Add Post
      </Link>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            role="status"
            style={{ width: 200, height: 200, color: "#66BB81" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          {posts.map((post) => (
            <div className="card mt-5" key={post.id}>
              <div className="card-header">
                <h3>{post.id}</h3>
                <h2>{post.title}</h2>
              </div>
              <div className="card-body">
                <p>{post.body}</p>
                <button
                  type="button"
                  className="planner"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Delete
                </button>
                <span>
                  <Link to={`/readmore/${post.id}`} className="planner">
                    Read more
                  </Link>
                </span>
                <span>
                  <Link to={`/edit/${post.id}`} state={{ posts: post }} className="planner">
                    Edit
                  </Link>
                </span>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Delete post
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to delete the post
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                          onClick={() => handleDelete(post.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between mt-4">
            <button
              className="planner"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
            <button
              className="planner"
              onClick={handleNextPage}
              disabled={posts.length < limit}
            >
              Next Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonList;
