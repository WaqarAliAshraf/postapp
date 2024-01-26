import React, { useState, useEffect } from "react";
import axios from "axios";

const PersonList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const Data = async () => {
        const result = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
        if (result.status === 200) {
          const Posts = result.data;
          setPosts(Posts);
        } 
    };

    Data();
  }, []); 

  return (
    <div className="container">
      {posts.map((post) => (
        <div className="text-center" key={post.id}>
          <p>{post.title}</p>
          <p>{post.id}</p>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
