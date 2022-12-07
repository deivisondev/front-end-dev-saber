import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "../services/courseService";

const initialState = {
  courses: [],
  course: {},
  error: false,
  sucesss: false,
  loading: false,
  message: null,
};

export const registerCourse = createAsyncThunk(
  "course/register",
  async (course, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await courseService.registerCourse(course, token);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const getCourseById = createAsyncThunk(
  "course/getCourseById",
  async (courseId, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await courseService.getCourseById(courseId, token);

    return data;
  }
);

export const getCourses = createAsyncThunk("course/getall", async () => {
  const data = await courseService.getCourses();

  return data;
});

export const updateCourse = createAsyncThunk(
  "course/update",
  async (courseData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await courseService.updateCourse(
      courseData,
      courseData.id,
      token
    );

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const deleteCourse = createAsyncThunk(
  "course/delete",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await courseService.deleteCourse(id, token);

    console.log(data.errors);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCourse.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.course = action.payload;
        state.courses.unshift(state.course);
        state.message = "Curso cadastrado com sucesso!";
      })
      .addCase(registerCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
        state.course = {};
      })
      .addCase(getCourseById.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.course = action.payload;
      })
      .addCase(getCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
        state.course = {};
      })
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.courses = action.payload;
      })
      .addCase(updateCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.course = null;
      })
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.course = null;
      });
  },
});

export const { resetMessage } = courseSlice.actions;
export default courseSlice.reducer;
