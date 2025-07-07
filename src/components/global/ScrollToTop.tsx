
import { useEffect, useState } from 'react'
import ArrowUpIcon from '../svgIcons/ArrowUpIcon'
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {

    const [showScrollTo, setShowScrollTo] = useState(false)
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", 
      });
    }, [pathname]);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTo(true)
            } else {
                setShowScrollTo(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button onClick={handleScrollToTop} className={`dark:bg-white bg-dark flex justify-center items-center
            ${showScrollTo ? "translate-x-0" : "translate-x-40"} w-9 h-9 2xl:w-14 2xl:h-14 cursor-pointer rounded-full fixed bottom-5 right-5 z-40
            transition-all duration-300 ease-in-out `}>
            <ArrowUpIcon color="text-white dark:text-dark" className="w-5 h-5" />
        </button>
    )
}