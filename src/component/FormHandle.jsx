import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormHandle = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const[id,setId]=useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.length>5) {
      alert("Must be 5 Characters")
      return
    }
    if (body.length>500) {
      alert("Maximum Characters will 500")
      return
    }
    if (id.length<0) {
      alert(" Id Numbers must be Positive")
      return
    }
    else{
      alert("Form Submitted Successfully")
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
      
      if (response.status === 200) {
        setTitle("");
        setBody("");
        setId("");
      } 
    } catch (error) {
      console.error("Error adding post:", error.message);
    }
  };

  return (
    <div className="container">
    
      { (
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
           
          </div>
          <div className="mb-3">
          <label>
              id
            </label>
            <input type="text"  className="form-control" value={id}
            onChange={(e)=> setId(e.target.value)}
            required />
          </div>
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
