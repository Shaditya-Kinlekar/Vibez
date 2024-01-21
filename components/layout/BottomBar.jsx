'use client';

import { sidebarLinks } from '@constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className='bottom-0 z-20 flex w-full items-center justify-between bg-dark-1 px-6 py-3 md:hidden'>
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            key={link.label}
            href={link.route}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 ${isActive && 'bg-purple-1'}`}>
            {link.icon} <p className='text-small-medium text-light-1 max-sm:hidden'>{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
