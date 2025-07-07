import RecentPosts from "../sections/RecentPosts";
import SingleBlogDetails from "../sections/SingleBlogDetails";
import SubscribeSection from "../sections/SubscribeSection";

function BlogDetails() {
  return (
    <div className="mt-[60px] md:mt-[120px] flex flex-col gap-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="max-md:w-full order-2 md:order-1">
          <RecentPosts
            title="Related Posts"
            pageKey="related"
            count={9}
            layout="grid"
            isRelated={true}
          />
        </div>

        <div className="w-full md:w-[60%] lg:w-[70%] order-1 md:order-2">
          <SingleBlogDetails />
        </div>
      </div>

      <div className="justify-items-end-safe lg:pr-20">
        <SubscribeSection
          sectionName="Newsletter"
          title="Stories and interviews"
          paragraph="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
          placeholder="Enter your email"
          Hint="We care about your data in our "
          linkLabel="privacy policy"
          link="privacy-policy"
        />
      </div>
    </div>
  );
}

export default BlogDetails;
