import "./Manager.css";
import Navbar from "../../components/Navbar";
import EditIcon from "../../assets/icons/edit-icon.svg";
import TrashIcon from "../../assets/icons/trash-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  deleteCourse,
  getCourses,
  updateCourse,
} from "../../slices/courseSlice";

const Manager = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [classLink, setClassLink] = useState([]);
  const [courseSelected, setCourseSelected] = useState("");
  const [openEdit, setOpenEdit] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { courses, loading } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const isEvenNumber = (num) => {
    if (num % 2 === 0) return true;
    return false;
  };

  const goToRegisterCourse = () => {
    navigate("/register-course");
  };

  const goToEditCourse = () => {
    navigate("/edit-course");
  };

  const handleEditCourse = (courseId) => {
    setCourseSelected(courseId);
    setOpenEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (courseSelected) {
      const courseData = {
        title,
        category,
        description,
        classLink,
        id: courseSelected,
      };

      dispatch(updateCourse(courseData));
    }
    setOpenEdit(false);
  };

  const handleDelete = (courseId) => {
    if (courseId) dispatch(deleteCourse(courseId));
  };

  return (
    <div>
      {!openEdit ? (
        <div className="manager-container">
          <Navbar />
          <h1>Gerenciar</h1>
          <div className="manager-table">
            <div className="manager-table-header">
              <h2>Cursos cadastrados</h2>
              <button onClick={goToRegisterCourse}>Cadastrar</button>
            </div>
            {courses.map((course, key) => (
              <div
                id={
                  isEvenNumber(key)
                    ? "manager-table-primary-color"
                    : "manager-table-secondary-color"
                }
                className="manager-table-row"
              >
                <h3>{course.title}</h3>
                <div>
                  <button onClick={() => handleEditCourse(course._id)}>
                    <img src={EditIcon} />
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(course._id);
                    }}
                  >
                    <img src={TrashIcon} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
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
                <input
                  id="auth-submit"
                  type="submit"
                  value="Aguarde..."
                  disabled
                />
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manager;
