import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios  from '../axios';

const UpdatePost = () => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const {id} = useParams()
  const navigate = useNavigate()

  const fetchData = async () => {
    const { data } = await axios.get(`/api/post/${id}`);
    setTitle(data.getOne.title)
    setText(data.getOne.text)
    setImage(data.getOne.image)
  };

  const handleUpdate = async(e) => {
    e.preventDefault()
    await axios.put(`/api/post/${id}`, {
      title,text, image
    })
    navigate('/')
  }

  useEffect(() => {
    fetchData()
    //eslint-disable-next-line 
  }, [])

  return (
    <form onSubmit={handleUpdate}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          onChange={e => setTitle(e.target.value)}
          value={title}
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
          onChange={e => setText(e.target.value)}
          value={text}
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
          onChange={e => setImage(e.target.value)}
          value={image}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Update Post
      </button>
    </form>
  );
};

export default UpdatePost;
