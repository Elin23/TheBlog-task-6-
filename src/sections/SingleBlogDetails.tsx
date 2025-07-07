import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { RootState } from "../redux/store/store";
import { clearBlog, displayBlogById } from "../redux/reducers/blogsSlices/blogDetailsSlice";

export default function SingleBlogDetails() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const blog = useSelector((state: RootState) => state.blogDetails.blog);

    useEffect(() => {
        const numericId = Number(id);
        if (!numericId || Number.isNaN(numericId)) {
            navigate("/blog/1", { replace: true });
            return;
        }
        dispatch(displayBlogById(numericId));

        return () => {
            dispatch(clearBlog());
        };
    }, [id, dispatch, navigate]);


    if (!blog) return <p>Loading..</p>;

    return (
        <section className="order-1 font-inter" data-aos="fade">
            <h3 className="text-purple font-semibold text-sm mb-8">
                {blog.date}
            </h3>
            <h2 className="font-semibold text-4xl mb-8 text-dark dark:text-white">{blog.title}</h2>
            <img className="w-full h-[200px] lg:h-[426px] object-cover mb-8" src={blog.img} alt="" />
            {blog.text.map((paragraph, index) => (
                <p key={index} className="mb-3 text-gray-500 dark:text-lightGray">
                    {paragraph}
                </p>
            ))}

            {blog.sections.map((section, index) => (
                <div key={index} className="mb-10" data-aos="fade-up">
                    {section.title && (
                        <h3 className="text-center font-bold lg:px-32 px-5 mb-3 text-gray-500 dark:text-lightGray">
                            {section.title}
                        </h3>
                    )}
                    {section.img && <img className="mb-3 w-full h-auto " src={section.img} alt="" />}
                    {section.caption && (
                        <p className="italic text-[16px] text-center text-gray-500 dark:text-lightGray mb-5">{section.caption}</p>
                    )}

                    {section.paragraphs?.map((p, i) => (
                        <div key={i} className="mb-4 text-gray-500 dark:text-lightGray">
                            {p.mainLabel && <h4 className="font-semibold ">{p.mainLabel}</h4>}
                            <p className="text-gray-500 dark:text-lightGray">{p.subLabel && <h5 className="font-medium inline">{p.subLabel}</h5>}{p.content}</p>
                            {p.LinkLabel && p.link && (
                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-lightGray underline">
                                    {p.LinkLabel}
                                </a>
                            )}
                        </div>
                    ))}

                    {section.sections?.map((subSection, j) => (
                        <div key={j} className="mb-4">
                            {subSection.mainLabel && <h4 className="font-semibold text-gray-500 dark:text-lightGray">{subSection.mainLabel}</h4>}
                            {subSection.subLabel && <p className="font-medium text-gray-500 dark:text-lightGray">{subSection.secLabel && <h5 className="font-medium inline text-gray-500 dark:text-lightGray">{subSection.secLabel}</h5>}{subSection.subLabel}</p>}
                            <p className="text-gray-500 dark:text-lightGray">{subSection.content}</p>
                            {subSection.listLabel && (
                                <div>
                                    <p className="font-semibold text-gray-500 dark:text-lightGray">{subSection.listLabel}</p>
                                    <ul className="list-disc list-inside text-gray-500 dark:text-lightGray">
                                        {subSection.list?.map((item, k) => (
                                            <li key={k}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {subSection.LinkLabel && subSection.link && (
                                <a href={subSection.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-lightGray underline">
                                    {subSection.LinkLabel}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            ))}

            <div className="flex gap-2 flex-wrap mt-6">
            {blog.categories.map((cat) => (
              <span key={cat.name} className={`text-xs font-medium rounded-full px-2 py-0.5 ${`text-${cat.color}`} bg-${cat.bg}`}>
                {cat.name}
              </span>
            ))}
            </div>
        </section>
    );
}
