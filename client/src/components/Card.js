import React, { useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";

const Card = () => {
  const [getAll, setGetAll] = useState([]);
  const [id, setId] = useState("");
  
  const fetchData = async () => {
    const { data } = await axios.get("/api");
    console.log(data);
    setGetAll(data.getAll);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`/api/remove/${id}`);
    fetchData()
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {getAll.map((allPosts) => (
        <div key={allPosts._id} className="card mb-3 mt-4">
          <img
            src={allPosts.image}
            className="card-img-top"
            alt={allPosts.title}
          />
          <div className="card-body">
            <h5 className="card-title">{allPosts.title}</h5>
            <p className="card-text">{allPosts.text}</p>
            <div className="d-flex justify-content-start">
              <Link to={`/update/${allPosts._id}`}>
                <button type="button" className="btn btn-primary">
                  Update
                </button>
              </Link>
              <form onSubmit={handleDelete}>
                <button
                  type="submit"
                  className="btn btn-danger mx-4"
                  onClick={() => setId(allPosts._id)}
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
