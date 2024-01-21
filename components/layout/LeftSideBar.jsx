'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Zen_Dots } from 'next/font/google';
import { Logout } from '@mui/icons-material';
import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs';
import Menu from './Menu';

const zenDots = Zen_Dots({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-zenDots',
});

const LeftSideBar = () => {
  return (
    <div className='custom-scrollbar sticky left-0 top-0 flex h-screen flex-col gap-6 overflow-auto px-10 py-6 max-md:hidden'>
      <Link
        href={'/'}
        className={`${zenDots.className} my-4 w-[200px] text-heading1-bold font-semibold text-white`}>
        Vibez
      </Link>

      <div className='mt-4 flex flex-col gap-4'>
        <div className='flex flex-col items-center gap-2 text-light-1'>
          <Link href={'/'}>
            <Image
              src='/assets/phucmai.png'
              alt='profile photo'
              width={50}
              height={50}
              className='rounded-full'
            />
          </Link>
          <p className='text-small-bold'>Phuc Mai</p>
        </div>
        <div className='flex justify-between text-light-1'>
          <div className='flex flex-col items-center'>
            <p className='text-base-bold'>1</p>
            <p className='text-tiny-medium'>Posts</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-base-bold'>1</p>
            <p className='text-tiny-medium'>Followers</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-base-bold'>1</p>
            <p className='text-tiny-medium'>Following</p>
          </div>
        </div>

        <hr />
        <Menu />
        <hr />

        <div className='flex items-center gap-4'>
          <UserButton />
          <p className='text-body-bold text-light-1'>Manage Account</p>
        </div>

        <SignedIn>
          <SignOutButton>
            <div className='flex cursor-pointer items-center gap-4'>
              <Logout sx={{ color: 'white', fontsize: '32px' }} />
              <p className='text-body-bold text-light-1'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default LeftSideBar;
