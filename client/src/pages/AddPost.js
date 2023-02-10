import React, {useState} from "react";
import axios from '../axios'
import { useNavigate } from "react-router-dom";
const AddPost = () => { 

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault()
    await axios.post('/api/add', {
      title, 
      text,
      image,
    })
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 mt-5">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          onChange={(e => setTitle(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          onChange={(e => setText(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image URL:
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          onChange={(e => setImage(e.target.value))}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
