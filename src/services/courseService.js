import { api, requestConfig } from "../utils/config";

const registerCourse = async (data, token) => {
  const config = requestConfig("POST", data, token, true);

  try {
    const res = await fetch(api + "/courses", config)
      .then((res) => res.json())
      .catch((error) => error);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getCourseById = async (id, token) => {
  const config = requestConfig("GET", token);

  try {
    const res = await fetch(api + "/courses" + id, config)
      .then((res) => res.json())
      .catch((error) => error);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getCourses = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/courses", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const updateCourse = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/courses/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const deleteCourse = async (id, token) => {
  const config = requestConfig("DELETE", "", token);

  try {
    const res = await fetch(api + "/courses/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const courseService = {
  registerCourse,
  getCourseById,
  getCourses,
  updateCourse,
  deleteCourse,
};

export default courseService;
