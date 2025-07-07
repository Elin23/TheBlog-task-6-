import { useEffect, useState } from 'react';
import type { LinkItem } from '../../data/siteLinks';
import LinksList from './LinksList';
import { BurgerIcon } from '../svgIcons/BurgerIcon';
import { CloseIcon } from '../svgIcons/CloseIcon';
import ToggleModeBtn from '../global/ToggleModeBtn';
import NamePopup from './NamePopup';

type NavbarProps = {
  links: LinkItem[];
};

export default function Navbar({ links }: NavbarProps) {
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userName, setUserName] = useState<string>('Your name');

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setUserName(savedName);
    } else {
      setTimeout(() => {
        setIsPopupOpen(true);
      }, 300);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setActive((prev) => !prev);
  const closeMenu = () => setActive(false);

  const handleSaveName = (name: string) => {
    const finalName = name.trim() || 'Your name';
    setUserName(finalName);
    localStorage.setItem('userName', finalName);
  };

  return (
    <>
      <nav
        className={`fixed px-[20px] lg:px-[6%] top-0 w-full left-0 right-0 z-[988] transition-shadow duration-300 bg-white dark:bg-dark ${
          isScrolled ? 'shadow-md dark:shadow-white/10 shadow-black/10' : ''
        }`}>
        <div className="min-[2000px]:container min-[2000px]:mx-auto flex justify-between items-center pt-[10px] pb-[20px] md:pt-[30px] md:pb-[50px]">
          <h3
            className="font-inter text-lg lg:text-xl font-semibold leading-6 dark:text-white text-dark cursor-pointer"
            onClick={() => setIsPopupOpen(true)}
          >
            {userName}
          </h3>
          <div className="hidden md:flex items-center gap-4">
            <LinksList links={links} />
            <ToggleModeBtn />
          </div>

          <button
            className="md:hidden text-dark dark:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={active ? 'Close menu' : 'Open menu'}
          >
            {active ? (
              <CloseIcon className="fill-dark dark:fill-white" />
            ) : (
              <BurgerIcon className="fill-dark dark:fill-white" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 bottom-0 w-full bg-white dark:bg-dark text-dark dark:text-white z-[999] transition-transform duration-300 ease-in-out lg:hidden ${
          active ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center gap-10">
          <h1
            className="text-[18px] md:text-3xl font-semibold cursor-pointer font-inter"
            onClick={() => {
              setIsPopupOpen(true);
              closeMenu();
            }}
          >
            {userName}
          </h1>

          <LinksList links={links} onLinkClick={closeMenu} isMobile />

          <ToggleModeBtn />
        </div>

        <button
          className="absolute bottom-5 left-2/4 -translate-x-2/4 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <CloseIcon className="fill-dark dark:fill-white" />
        </button>
      </div>
      <NamePopup
        isOpen={isPopupOpen}
        onSave={handleSaveName}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
