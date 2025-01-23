import React, { ReactNode } from 'react';
import ActiveLink, { IconWithActiveClass, TextWithActiveClass } from './ActiveLink';
import { IcoBlog, IcoContact, IcoHome, IcoProjects, IcoStory } from './Icons';

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  text: string;
}

const navLinks = [
  {
    href: 'home',
    icon: <IcoHome className="h-8 w-8 sm:hidden" />,
    text: 'Home',
  },
  {
    href: 'story',
    icon: <IcoStory className="h-8 w-8 sm:hidden" />,
    text: 'My Story',
  },
  {
    href: 'projects',
    icon: <IcoProjects className="h-8 w-8 sm:hidden" />,
    text: 'Projects',
  },
  {
    href: 'blog',
    icon: <IcoBlog className="h-8 w-8 sm:hidden" />,
    text: 'Blog',
  },
  {
    href: 'contact',
    icon: <IcoContact className="h-8 w-8 sm:hidden" />,
    text: 'Reach Out',
  },
];

function Navbar() {
  return (
    <div className="fixed bottom-0 z-30 w-full rounded-none border border-white/10 bg-black/90 sm:bottom-8 sm:left-1/2 sm:w-max sm:-translate-x-1/2 sm:rounded-full sm:bg-black">
      {/* /30 backdrop-blur-xl */}
      <ul className="navbar flex flex-row items-center justify-center gap-6 px-6 py-4">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <ActiveLink href={link.href}>
              <IconWithActiveClass className="h-8 w-8 sm:hidden">{link.icon}</IconWithActiveClass>
              <TextWithActiveClass className="hidden sm:block">{link.text}</TextWithActiveClass>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
