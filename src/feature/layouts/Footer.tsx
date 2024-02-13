import React from 'react'
import Link  from "next/link";
import {Home , User , PenSquare} from 'lucide-react';
import clsx from 'clsx';
import { buttonVariants } from '@/components/ui/button';

export const Footer = () => {
  return (
   <div className='py-2 flex justify-between container gap-1 fixed bottom-0 left-0 right-0 bg-background  max-w-lg m-auto border-t border-t-accent'>
    <Link href='/' className={clsx(buttonVariants({variant:'ghost',}),'flex-1')}>
    <Home size={16}/>
    </Link>
    <Link href='/write' className={clsx(buttonVariants({variant:'ghost',}),'flex-1')}>
    <PenSquare size={16}/>
    </Link>
    <Link href='/profile' className={clsx(buttonVariants({variant:'ghost',}),'flex-1')}>
    <User size={16}/>
    </Link>
       </div>
  )
}
