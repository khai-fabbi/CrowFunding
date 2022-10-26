import * as React from 'react'

export interface ButtonPrimaryProps {
  children: React.ReactNode
  className?: string
}

export default function ButtonPrimary({ children, className }: ButtonPrimaryProps) {
  return (
    <button
      className={`${className} px-4 py-2 border border-primary font-bold text-white bg-primary rounded-md hover:opacity-90`}
    >
      {children}
    </button>
  )
}
