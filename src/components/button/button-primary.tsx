import * as React from 'react'

export interface ButtonPrimaryProps {
  children: React.ReactNode
  className?: string
}

export default function ButtonPrimary({ children, className }: ButtonPrimaryProps) {
  return <button className={`${className} btn btn-secondary font-bold`}>{children}</button>
}
