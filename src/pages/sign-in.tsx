import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { FieldInput } from '@/components/fields'
import { LabelInput } from '@/components/label'
import { Input } from '@/components/input'
import { IconEyeClose, IconEyeOpen } from '@/components/icon'
interface SignUpFormValue {
  email: string
  password: string
}
const schemaValidation = yup.object({
  email: yup.string().required('Email is required').email('Email is wrong format'),
  password: yup.string().required('Password is required').min(8, 'Password minimum 8 characters'),
})
export default function SignInPage() {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValue>({
    resolver: yupResolver(schemaValidation),
  })

  useEffect(() => {
    document.title = 'SignIn'
    // if (user?.email) {
    //   navigate('/')
    // }
  }, [])
  const handleSignUp = (formValue: any) => {
    console.log(formValue)
    toast.success('Login successfully', {
      closeOnClick: true,
      delay: 0,
      theme: 'colored',
    })
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

          <div className='flex items-center justify-center w-full mx-auto mt-10'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='text-white md:w-[300px] min-w-[160px] w-full border-none disabled:btn-disabled btn btn-primary text-xl capitalize bg-gradient-to-r from-[#00A7B4] to-[#A4D96C] '
            >
              Sign In
            </button>
          </div>
          <div className=''>
            You have not had an account?{' '}
            <Link to='/sign-up' className='font-medium text-primary'>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
