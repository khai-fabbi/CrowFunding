import { ButtonPrimary } from '@/components/button'
import { LoadingPage } from '@/components/loading'
import * as React from 'react'

export default function HomePage() {
  const [loading, setLoading] = React.useState(true)
  //   if (loading) {
  //     return <LoadingPage />
  //   }
  console.log(import.meta.env.VITE_API_ENDPOINT)

  return (
    <>
      <h1>This is Home Page</h1>
      <ButtonPrimary>button</ButtonPrimary>
      {loading && <LoadingPage />}
    </>
  )
}
