import * as React from 'react'

export default function LazyLoading() {
  return (
    <div className='h-[100vh] bg-black/[.1] flex justify-center items-center'>
      <div className='square-loading z-10'></div>
    </div>
  )
}
