import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { blogs } from "../../../data/blogsData";
import type { Blog } from "../../../types/blog";

interface BlogDetailsState {
  blog: Blog | null;
}

const initialState: BlogDetailsState = {
  blog: null,
};

const blogDetailsSlice = createSlice({
  name: "blogDetails",
  initialState,
  reducers: {
    displayBlogById: (state, action: PayloadAction<number>) => {
      const blogId = action.payload;
      const foundBlog = blogs.find((b) => b.id === blogId) || null;
      state.blog = foundBlog;
    },
    //note: This action is used to clear the blog from the state to avoid showing old data when switching between pages quickly.
    clearBlog: (state) => {
      state.blog = null;
    }
  },
});

export const { displayBlogById, clearBlog } = blogDetailsSlice.actions;
export default blogDetailsSlice.reducer;
