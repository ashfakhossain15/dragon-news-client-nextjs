import Link from 'next/link';
import React from 'react';

const HeaderNav = () => {
    return (
        <div>
            <div className='flex items-center justify-center' >
               <Link href={'/'}>Home</Link>
               <Link href={'/about'}>About</Link>
               <Link href={'/career'}>Career</Link>
            </div>
        </div>
    );
};

export default HeaderNav;