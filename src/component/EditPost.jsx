import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const [userId, setUserId] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setFetchedData(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => console.log(error.message));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleUserIdChange = (e) => {
    const value = e.target.value;
    if (value <= 0 || isNaN(value)) {
      setUserIdError("Please enter a positive number for User ID");
    } else {
      setUserIdError("");
    }
    setUserId(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true while submitting form

    if (title.length < 5) {
      setErrorMessage("Title must be at least 5 characters long");
      setLoading(false); 
      return;
    }

    if (body.length > 500) {
      setErrorMessage("Body can have maximum 500 characters");
      setLoading(false); 
      return;
    }

    if (userIdError) {
      setErrorMessage("Please enter a valid User ID");
      setLoading(false); // Reset loading state
      return;
    }

    const data = { title: title, body: body, userId: userId };
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  useEffect(() => {
    if (fetchedData) {
      setTitle(fetchedData.title);
      setBody(fetchedData.body);
      setUserId(fetchedData.userId);
    }
  }, [fetchedData]);

  return (
    <div className="container">
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
          <h1 className="text-center">Edit Post</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Body</label>
              <textarea
                className="form-control"
                rows="3"
                value={body}
                onChange={handleBodyChange}
              />
              <p>Your words: {body.length}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">User ID</label>
              <input
                type="number"
                className="form-control"
                value={userId}
                onChange={handleUserIdChange}
              />
              {userIdError && <p style={{ color: "red" }}>{userIdError}</p>}
            </div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <button className="planner" onClick={handleSubmit}>
              Update
            </button>
            <Link to="/">
              <button className="planner m-2">Back</button>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditPost;
