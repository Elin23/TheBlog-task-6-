import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import BlogDetails from './pages/BlogDetails'
import NewsletterPage from './pages/NewsletterPage'
import SiteLayout from './layouts/SiteLayout'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import ThemeController from './components/global/ThemeController'
import ComingSoon from './pages/ComingSoon'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <BlogPage /> },
      { path: 'blog/:id', element: <BlogDetails /> },
      { path: 'newsletter', element: <NewsletterPage /> },
      { path: 'projects', element: <ComingSoon /> },
      { path: 'about', element: <ComingSoon /> },
    ],
  }
],
  {
    basename: '/TheBlog-task-6-/',
  }
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeController>
        <RouterProvider router={router} />
      </ThemeController>
    </Provider>
  </StrictMode>,
)
