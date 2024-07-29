import React from 'react';
import ActiveLink from './ActiveLink';

function Navbar() {
  return (
    <div className="fixed bottom-8 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/10 bg-black">
      {/* /30 backdrop-blur-xl */}
      <ul className="navbar flex w-max flex-row items-center justify-center gap-6 px-6 py-4">
        <li>
          <ActiveLink href="home">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink href="story">My Story</ActiveLink>
        </li>
        <li>
          <ActiveLink href="projects">Projects</ActiveLink>
        </li>
        <li>
          <ActiveLink href="blog">Blog</ActiveLink>
        </li>
        <li>
          <ActiveLink href="contact">Contact</ActiveLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
