import { Link } from "react-router-dom";
import type { Blog } from "../../types/blog";
import { cardSizes } from "./cardSizes";
import ArrowUpRightIcon from "../svgIcons/ArrowUpRightIcon";

type CardProps = {
  blog: Blog;
  size: "large" | "medium" | "small" | "square";
  customStyle?: string;
  imgStyle?: string;
};

export default function CardComponent({ blog, size, customStyle, imgStyle }: CardProps) {
  if (!blog) return null;

  const styles = cardSizes[size];
  const isRowLayout = size === "large" || size === "small";

  let dataAos = "";
  if (size === "small") {
    dataAos = "fade-left";
  } else if (size === "medium") {
    dataAos = "fade-right";
  } else {
    dataAos = "fade-up";
  }
  
  return (
    <Link to={`/blog/${blog.id}`} className={`${customStyle} block font-inter`} data-aos={dataAos}>
      <div className={`${styles.container} ${isRowLayout ? "flex flex-row gap-4" : "flex flex-col"}`}>
          <img src={blog.img} alt={blog.title} className={`${styles.img} ${imgStyle}`} />
        <div className={`${isRowLayout ? "flex flex-col justify-between" : ""}`}>
          <p className="text-sm text-purple mb-2 font-semibold">{blog.date}</p>
          <div className="flex justify-between">
            <h3 className={styles.title}>{blog.title}</h3>
            {(size !== 'small') && <ArrowUpRightIcon color="stroke-dark dark:stroke-white" />}
          </div>
          <p className={styles.hook}>{blog.hook}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {blog.categories.map((cat) => (
              <span key={cat.name} className={`text-xs font-medium rounded-full px-2 py-0.5 ${`text-${cat.color}`} bg-${cat.bg}`}>
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
