import * as React from 'react'

export interface LabelInputProps {
  children: React.ReactNode
  htmlFor: string
}

export default function LabelInput({ children, htmlFor, ...props }: LabelInputProps) {
  return (
    <label
      htmlFor={htmlFor}
      className='font-semibold cursor-pointer text-text2 label-text'
      {...props}
    >
      {children}
    </label>
  )
}
