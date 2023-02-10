import { Route, Routes } from "react-router-dom";
import AddPost from "./pages/AddPost";
import Main from "./pages/Main";
import UpdatePost from "./pages/UpdatePost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="raw">
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/addpost" element={<AddPost />} />
              <Route path="/update/:id" element={<UpdatePost />} />
            </Routes> 
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
