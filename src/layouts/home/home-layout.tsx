import * as React from 'react'
export interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <header className='min-h-[100px] bg-red-300 flex justify-center items-center'>
        <h1 className='text-4xl font-semibold'>Header</h1>
      </header>
      <div className='max-w-7xl mx-auto p-5'>{children}</div>
    </>
  )
}
