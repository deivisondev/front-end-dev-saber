import "./Home.css";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../../slices/courseSlice";
import Card from "../../components/Card";

const Home = () => {
  const { courses, loading } = useSelector((state) => state.course);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        {courses.map((course) => (
          <div>
            <Card
              title={course.title || ""}
              description={course.description || ""}
              url={course.classLink || ""}
            />
            {console.log(course)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
