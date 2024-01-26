import React, { useState } from "react";
import img from "../images/banner-image.png";
import data from "./data";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Banner = () => {
  const [post, setPost] = useState(data);
  const [deleteId, setDeleteId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (deleteId !== null) {
      const updatedPost = post.filter((item) => item.id !== deleteId);
      setPost(updatedPost);
      setDeleteId(null);
    }
    setShowModal(false);
  };

  const handleCancel = () => {
    setDeleteId(null);
    setShowModal(false);
  };

  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <h1>
              Articles for <br />
              <span>front-end devs</span>
            </h1>
            <p>Articles on web performance, responsive web design and more</p>
          </div>
          <div className="col-sm-12 col-md-7">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="container">
          {post.map((items) => (
            <div className="card mt-5" key={items.id}>
              <div className="card-header">
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
                  onClick={() => handleDelete(items.id)}
                  className="btn btn-danger"
                  style={{ marginLeft: 10 }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <Modal show={showModal} onHide={handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete this Post?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body..</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Close
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Banner;
