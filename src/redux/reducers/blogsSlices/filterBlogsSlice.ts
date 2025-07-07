import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { blogs } from "../../../data/blogsData";
import type { Blog } from "../../../types/blog";

interface FilterBlogsState {
  relatedBlogs: Blog[];
  recentBlogsByPage: Record<string, Blog[]>;
}

const initialState: FilterBlogsState = {
  relatedBlogs: [],
  recentBlogsByPage: {},
};

const filterBlogsSlice = createSlice({
  name: "filterBlogs",
  initialState,
  reducers: {
    filterBlogsByCategory: (state, action: PayloadAction<{ blogId: number }>) => {
      const { blogId } = action.payload;
    
      const blog = blogs.find((b) => b.id === blogId);
      if (!blog) {
        state.relatedBlogs = [];
        return;
      }
    
      const blogCategoryNames = blog.categories.map((cat) => cat.name);
    
      const related = blogs
        .filter(
          (b) =>
            b.id !== blogId &&
            b.categories.some((cat) => blogCategoryNames.includes(cat.name))
        )
        .sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA; 
        });
    
      state.relatedBlogs = related.slice(0, 9);
    },
    

    fetchRecentBlogsByPage: (
      state,
      action: PayloadAction<{ page: string; startIndex: number; count: number }>
    ) => {
      const { page, startIndex, count } = action.payload;
      const sortedBlogs = blogs.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      const pageBlogs = sortedBlogs.slice(startIndex, startIndex + count);
      state.recentBlogsByPage[page] = pageBlogs;
    },
    
  },
});

export const { filterBlogsByCategory, fetchRecentBlogsByPage } = filterBlogsSlice.actions;
export default filterBlogsSlice.reducer;
