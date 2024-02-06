import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const PersonList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
 
  let { id } = useParams();
  useEffect(() => {
    const Data = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (result.status === 200) {
          const fetchedPosts = result.data;
          setPosts(fetchedPosts);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    Data();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const update = posts.filter((post) => post.id !== id);
      setPosts(update);
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };

 

  return (
    <div className="container">
     <Link to="/FormHandle">
      Add Post
    </Link>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            role="status"
            style={{ width: 300, height: 300, color: "#66BB81" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        posts.map((items) => (
          <div className="card mt-5" key={items.id}>
            <div className="card-header">
              <h3>{items.id}</h3>
              <h2>{items.title}</h2>
            </div>
            <div className="card-body">
              <p>
                {items.body}{" "}
                <span>
                  <Link to={`/readmore/${items.id}`}>Read more</Link>
                </span>
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Delete
              </button>

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
                        onClick={() => handleDelete(items.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PersonList;
