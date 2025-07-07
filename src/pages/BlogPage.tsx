import HugeTitle from '../components/HugeTitle'
import AllBlogs from '../sections/AllBlogs'
import RecentPosts from '../sections/RecentPosts'


function BlogPage() {
  return (
    <div className='!pt-[123px] 2xl:container 2xl:mx-auto'>
      <HugeTitle content='the blog' />
      <main>
        <RecentPosts
          title="Recent blog posts"
          pageKey="home"
          count={4}
          layout="home"
          startIndex={0}
        />
        <AllBlogs />
      </main>
    </div>
  )
}

export default BlogPage

