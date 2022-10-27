import clsx from 'clsx'
import * as React from 'react'
import { useController } from 'react-hook-form'

export interface InputProps {
  name: string
  className?: string
  control: any
  type?: string
  children?: React.ReactNode
  error?: string
  disabled?: boolean
  placeholder?: string
}

export default function Input({
  name,
  control,
  type = 'text',
  children,
  className,
  error = '',
  disabled = false,
  placeholder = '',
  ...props
}: InputProps) {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  })
  return (
    <div className='relative'>
      <input
        id={name}
        type={type}
        {...field}
        {...props}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(
          `${className} w-full input rounded-md input-primary text-text1 input-bordered placeholder:italic`,
          {
            'pr-10': children,
            'input-error': error,
          },
        )}
      />
      {children}
      {error && (
        <label className='absolute bottom-0 left-0 p-2 cursor-pointer text-error label-text top-full'>
          {error}
        </label>
      )}
    </div>
  )
}
