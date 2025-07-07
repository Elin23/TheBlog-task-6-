import { useSelector, useDispatch } from "react-redux";
import TitleComponent from "../components/global/TitleComponent";
import type { RootState } from "../redux/store/store";
import { handlePage } from "../redux/reducers/blogsSlices/blogsSlice";
import CardComponent from "../components/card/CardComponent";
import Pagination from "../components/global/Pagination";

export default function AllBlogs() {
  const dispatch = useDispatch();
  const { blogs, currentPage, totalPages } = useSelector(
    (state: RootState) => state.blog
  );

  const handlePageChange = (page: number) => {
    dispatch(handlePage(page));
  };

  return (
    <section className="pt-[30px] text-black dark:text-white font-inter">
      <TitleComponent title="All blog posts" />
      <div className="grid gap-x-8 gap-y-8 xl:gap-x-8 md:gap-x-4 md:gap-y-6 md:grid-rows-2 lg:grid-rows-1 xl:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {blogs.map((blog) => (
          <CardComponent key={blog.id} blog={blog} size="square" />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
