import * as React from 'react'

export interface FieldInputProps {
  children: React.ReactNode
  className?: string
}

export default function FieldInput({ children, className }: FieldInputProps) {
  return <div className={`${className} flex flex-col gap-3`}>{children}</div>
}
