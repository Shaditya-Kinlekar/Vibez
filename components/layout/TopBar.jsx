'use client';
import React, { useState } from 'react';
import { Add, Logout, Search } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { SignOutButton, SignedIn } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

const TopBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  return (
    <div className='mt-6 flex items-center justify-between'>
      <div className='relative'>
        <input
          type='text'
          className='search-bar'
          placeholder='Search posts, people, ...'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Search className='search-icon' onClick={() => {}} />
      </div>
      <button className='create-post-btn' onClick={() => router.push('/create-post')}>
        <Add />
        <p>Creat A Post</p>
      </button>

      <div className='flex gap-3'>
        <SignedIn>
          <SignOutButton>
            <div className='flex cursor-pointer items-center md:hidden'>
              <Logout sx={{ color: 'white', fontsize: '32px' }} />
            </div>
          </SignOutButton>
        </SignedIn>

        <Link href={'/'}>
          <Image
            src='/assets/phucmai.png'
            alt='profile photo'
            width={50}
            height={50}
            className='rounded-full md:hidden'
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
