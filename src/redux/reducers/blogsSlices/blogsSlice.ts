import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { blogs } from "../../../data/blogsData";
import type { Blog } from "../../../types/blog";

const BLOGS_PER_PAGE = 6;
interface BlogsState {
  currentPage: number;
  blogs: Blog[];
  totalPages: number;
}
const initialState: BlogsState = {
  currentPage: 1,
  blogs: blogs.slice(0, BLOGS_PER_PAGE),
  totalPages: Math.ceil(blogs.length / BLOGS_PER_PAGE),
};
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    handlePage: (state, action: PayloadAction<number>) => {
      const page = action.payload;
      const startPoint = (page - 1) * BLOGS_PER_PAGE;
      const endPoint = startPoint + BLOGS_PER_PAGE;
      state.currentPage = page;
      state.blogs = blogs.slice(startPoint, endPoint);
    },
  },
});

export const { handlePage } = blogSlice.actions;
export default blogSlice.reducer;
