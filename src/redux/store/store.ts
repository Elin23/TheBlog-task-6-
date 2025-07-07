import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../reducers/themeSlice';
import filterBlogsReducer from '../reducers/blogsSlices/filterBlogsSlice';
import blogDetailsReducer from '../reducers/blogsSlices/blogDetailsSlice';
import blogReducer from '../reducers/blogsSlices/blogsSlice';
export const store = configureStore({
    reducer: {
        theme: themeReducer,
        blogDetails: blogDetailsReducer,
        blog: blogReducer,
        filterBlogs: filterBlogsReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;