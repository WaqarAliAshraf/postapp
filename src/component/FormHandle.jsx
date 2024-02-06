import axios from "axios";
import React, { useState } from "react";

const FormHandle = (setPosts) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: 1,
        }
      );

      const newPost = response.data;
      handlePostAdded(newPost);
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error adding post:", error.message);
    }
  };

  const handlePostAdded = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setShowAddForm(false);
    console.log(newPost);
  };

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={() => setShowAddForm(true)}
      >
        Add New Post
      </button>
      {showAddForm && (
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
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <textarea
              className="form-control"
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Post
          </button>
        </form>
      )}
    </div>
  );
};

export default FormHandle;
