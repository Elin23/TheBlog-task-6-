import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { navbarLinks } from '../data/siteLinks'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTop from '../components/global/ScrollToTop'
import BounceLoader from '../components/global/BounceLoader'
import AOS from 'aos';
import 'aos/dist/aos.css';

function SiteLayout() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false
    });
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <BounceLoader />

  return (
    <>
      <ScrollToTop />
      <div className='px-3.5 md:px-8 lg:px-[6%] dark:bg-dark bg-white overflow-hidden'>
        <header>
          <Navbar links={navbarLinks} />
        </header>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default SiteLayout
