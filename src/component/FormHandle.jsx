import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FormHandle = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
   
     setTimeout(() => {
      setLoading(false); 
    }, 1000);

    
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = {};
  
    if (title.length < 5) {
      errors.title = "Title must be at least 5 characters";
    }
  
    if (body.length > 500) {
      errors.body = "Maximum 500 characters";
    }
  
    if (parseInt(id) <= 0) {
      errors.id = "ID must be a positive number";
    }
  
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: 1,
        }
      );
  
      if (response.status === 201) {
        console.log("Post added successfully:", response.data);
        setTitle("");
        setBody("");
        setId("");
      }
    } catch (error) {
      console.error("Error adding post:", error.message);
    }

    setLoading(false); 
  };

  return (
    <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            role="status"
            style={{ width: 200, height: 200, color: "#66BB81" }}
          ></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
             {errors.title && <div className="text-danger">{errors.title}</div>}
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Body
            </label>
            <textarea
              className="form-control"
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              />
           
              {errors.body && <div className="text-danger">{errors.body}</div>}
          </div>
          <div className="mb-3">
          <label>
              id
            </label>
            <input type="text"  className="form-control" value={id}
            onChange={(e)=> setId(e.target.value)}
            required />
          </div>
          {errors.id && <div className="text-danger">{errors.id}</div>}
          <button type="submit" className="planner">
            Add Post
          </button>
          <Link to="/" className="planner">Back</Link>
        </form>
      )}
    </div>
  );
};

export default FormHandle;
