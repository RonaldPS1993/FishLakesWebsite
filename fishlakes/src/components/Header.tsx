// components/Header.tsx
import React from 'react';
import Image from 'next/image';


const Header = () => {
  return (
    <header style={{ backgroundColor: 'black', padding: '10px', width: '100%' }}>
        <div className='flex flex-row items-center space-x-4 pl-8'>
            <Image src="/icons/fishLakeIcon.png" alt="Logo" width={40} height={40} style={{ borderRadius: '20%' }} />
            <h1 className='text-xl'>FISHLAKES</h1>
        </div>
    </header>
  );
};

export default Header;