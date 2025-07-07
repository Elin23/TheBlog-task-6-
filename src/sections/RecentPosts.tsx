import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import type { AppDispatch, RootState } from "../redux/store/store";

import { fetchRecentBlogsByPage, filterBlogsByCategory } from "../redux/reducers/blogsSlices/filterBlogsSlice";
import TitleComponent from "../components/global/TitleComponent";
import CardComponent from "../components/card/CardComponent";


type LayoutType = "home" | "grid";

interface RecentPostsSectionProps {
  title: string;
  pageKey: string;
  count: number;
  layout: LayoutType;
  isRelated?: boolean;
  startIndex?: number;
}

function RecentPosts({ title, pageKey, count, layout, startIndex = 0, isRelated = false }: RecentPostsSectionProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const blogId = Number(id);

  useEffect(() => {
    if (isRelated && blogId) {
      dispatch(filterBlogsByCategory({ blogId: blogId }));
    } else {
      dispatch(fetchRecentBlogsByPage({ page: pageKey, startIndex: startIndex ,count }));
    }
  }, [dispatch, pageKey, count, isRelated, blogId]);

  const blogs = useSelector((state: RootState) =>
    isRelated
      ? state.filterBlogs.relatedBlogs
      : state.filterBlogs.recentBlogsByPage[pageKey] || []
  );

  return (
    <section
      className={`${layout === "home"
          ? "pt-[60px]"
          : isRelated
            ? ""
            : "pt-[30px]"
        } text-black dark:text-white`}
    >
      <TitleComponent title={title} />

      {layout === "home" ? (
        <>
          <div className="grid gap-[1.4%] pb-30 xl:grid-cols-2">
            {blogs[0] && <CardComponent blog={blogs[0]} size="medium" />}
            <div className="flex flex-col gap-8">
              {blogs[1] && <CardComponent blog={blogs[1]} size="small" />}
              {blogs[2] && <CardComponent blog={blogs[2]} size="small" />}
            </div>
          </div>
          {blogs[3] && <CardComponent blog={blogs[3]} size="large" customStyle="w-full" />}
        </>
      ) : (
        <div className="grid gap-x-8 gap-y-8 xl:gap-x-8 md:gap-x-4 md:gap-y-6 md:grid-rows-2 lg:grid-rows-1 xl:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <CardComponent key={blog.id} blog={blog} size="square" imgStyle={isRelated ? "sm:[200px] md:h-[204px]" : ""}
              customStyle={
                isRelated
                  ? "col-span-full w-full md:max-w-[342px]"
                  : blogs.length === 3 && index === 2
                    ? "max-lg:col-span-full"
                    : ""
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentPosts;
