import { FieldInput } from '@/components/fields'
import { IconEyeClose, IconEyeOpen } from '@/components/icon'
import { Input } from '@/components/input'
import { LabelInput } from '@/components/label'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
interface SignUpFormValue {
  fullname: string
  email: string
  password: string
}
const schemaValidation = yup.object({
  fullname: yup.string().required('Fullname is required'),
  email: yup.string().required('Email is required').email('Email is wrong format'),
  password: yup.string().required('Password is required').min(8, 'Password minimum 8 characters'),
})
export default function SignUpPage() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValue>({
    resolver: yupResolver(schemaValidation),
  })
  const handleSignUp = (formValue: any) => {
    console.log(formValue)
  }
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='min-h-screen p-10'>
      <div className='container p-5 mx-auto'>
        <Link to='/' className='w-[130px] mx-auto block'>
          <img src='/logo.png' alt='' className='' />
        </Link>
        <h1 className='mt-6 mb-10 font-semibold text-center text-primary text-3xl'>
          Monkey Blogging
        </h1>
        <form
          className='flex flex-col max-w-2xl gap-10 mx-auto'
          onSubmit={handleSubmit(handleSignUp)}
        >
          <FieldInput>
            <LabelInput htmlFor='fullname'>Full name</LabelInput>
            <Input name='fullname' control={control} error={errors?.fullname?.message} />
          </FieldInput>

          <FieldInput>
            <LabelInput htmlFor='email'>Email Address</LabelInput>
            <Input name='email' control={control} error={errors?.email?.message} />
          </FieldInput>

          <FieldInput>
            <LabelInput htmlFor='password'>Password</LabelInput>
            <Input
              name='password'
              type={showPassword ? 'text' : 'password'}
              control={control}
              error={errors?.password?.message}
            >
              {!showPassword ? (
                <IconEyeOpen
                  className='absolute right-0 p-3 -translate-y-1/2 cursor-pointer top-1/2'
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <IconEyeClose
                  className='absolute right-0 p-3 -translate-y-1/2 cursor-pointer top-1/2'
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </Input>
          </FieldInput>

          <div className='flex items-center justify-center w-full mx-auto'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='text-white md:w-[300px] min-w-[160px] w-full border-none disabled:btn-disabled btn btn-primary text-xl capitalize bg-gradient-to-r from-[#00A7B4] to-[#A4D96C] '
            >
              Sign Up
            </button>
          </div>
          <div className=''>
            You already have an account?{' '}
            <Link to='/login' className='font-medium text-primary'>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
