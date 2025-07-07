
import RecentPosts from "../sections/RecentPosts"
import SubscribeSection from "../sections/SubscribeSection"

function NewsletterPage() {
  return (
    <main className="!pt-[123px] min-[2000px]:container min-[2000px]:mx-auto">
      <SubscribeSection sectionName="Newsletter" title="Stories and interviews" paragraph="Subscribe to learn about new product features, the latest in technology, solutions, and updates." placeholder="Enter your email" Hint="We care about your data in our " linkLabel="privacy policy" link="privacy-policy" />
        <RecentPosts
          title="Recent blog posts"
          pageKey="newsletter"
          count={3}
          layout="grid"
          startIndex={4}
        />
    </main>
  )
}

export default NewsletterPage
