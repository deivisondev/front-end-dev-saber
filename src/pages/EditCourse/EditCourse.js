import "./EditCourse.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import { getCourseById } from "../../slices/courseSlice";
import { useNavigate } from "react-router-dom";

const EditCourse = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [classLink, setClassLink] = useState([]);

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { course, loading } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getCourseById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (course) {
      setTitle(course.title);
      setCategory(course.category);
      setDescription(course.description);
      setClassLink(course.classLink);
    }
  }, [course]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      title,
      category,
      description,
      classLink,
    };

    dispatch(getCourseById("638ff138a51f3bdead042e71"));
    navigate("/manager");
  };

  return (
    <div>
      <Navbar />
      <div className="register-course-container">
        <div className="">
          <h1>Editar curso</h1>
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
            <input id="auth-submit" type="submit" value="Salvar" />
          ) : (
            <input id="auth-submit" type="submit" value="Aguarde..." disabled />
          )}
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
