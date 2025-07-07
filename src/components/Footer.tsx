import { Link } from 'react-router-dom';
import { footerLinks } from '../data/siteLinks';


export default function Footer() {

  return (
    <footer className='3xl:container 3xl:mx-auto flex gap-3.5 flex-col-reverse md:flex-row text-center lg:text-start py-[30px] text-dark dark:text-white text-xl font-inter'>
      <span>© 2023</span>
      <div className='flex flex-col md:flex-row gap-3.5'>
        {footerLinks.map((element, index) => {
          const isExternal = /^https?:\/\//.test(element.link);
          return isExternal ? (
            <a key={index} href={element.link} target="_blank" className='hover:underline'>
              {element.label}
            </a>
          ) : (
            <Link key={index} to={element.link} className='hover:underline'>
              {element.label}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
