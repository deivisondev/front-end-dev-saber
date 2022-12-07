import "./RegisterCourse.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { registerCourse } from "../../slices/courseSlice";
import { useNavigate } from "react-router-dom";

const RegisterCourse = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [classLink, setClassLink] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.course);

  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      title,
      category,
      description,
      classLink,
    };

    dispatch(registerCourse(courseData));
    navigate("/manager");
  };

  return (
    <div>
      <Navbar />
      <div className="register-course-container">
        <div className="">
          <h1>Cadastrar curso</h1>
        </div>
        <form className="register-course-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título do curso"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
          <input
            type="text"
            placeholder="Categoria"
            onChange={(e) => setCategory(e.target.value)}
            value={category || ""}
          />
          <input
            type="text"
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
            value={description || ""}
          />
          <input
            type="text"
            placeholder="Link da aula"
            onChange={(e) => setClassLink(e.target.value)}
            value={classLink || ""}
          />
          {!loading ? (
            <input id="auth-submit" type="submit" value="Cadastrar" />
          ) : (
            <input id="auth-submit" type="submit" value="Aguarde..." disabled />
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterCourse;
