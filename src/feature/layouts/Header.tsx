import React from 'react'
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/src/theme/ThemeToogle";
export const Header = async() => {
  return (
    <header className='border-b border-b-accent'>
      <div className=' flex item-center py-2 max-w-lg m-auto  gap-1'>
        <h2 className='text-2xl font-bold mr-auto '>Githread
        <span className='sr-only'>
           Logo Githread
        </span></h2>
       <ThemeToggle/>
      </div>
    </header>
  )
}
