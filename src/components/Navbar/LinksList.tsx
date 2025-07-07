import { NavLink } from 'react-router-dom';
import type { LinkItem } from '../../data/siteLinks';

type LinksListProps = {
  links: LinkItem[];
  onLinkClick?: () => void;
  isMobile?: boolean;
};

export default function LinksList({ links, onLinkClick, isMobile }: LinksListProps) {
  return (
    <ul className={`font-inter ${isMobile ? 'flex flex-col gap-8' : 'flex gap-[30px] items-center justify-center mr-3.5'}`}>
      {links.map((item, index) => (
        <li key={index} className='text-center'>
          <NavLink
            to={item.link}
            end={item.link === '/TheBlog-task-6-/'}
            className={({ isActive }) => `${isMobile ? 'text-lg font-semibold' : 'md:text-lg lg:text-xl leading-5'} dark:text-white text-dark pb-2 ${
                          isActive ? (isMobile ? 'text-dark dark:text-dark border-b-2 border-white' : 'border-b-2 border-white dark:border-white') : ''}`}
            onClick={onLinkClick}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
