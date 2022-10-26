import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LazyLoading } from '@/components/loading'
import { ButtonPrimary } from '@/components/button'

const HomeLayout = React.lazy(() => import('@/layouts/home-layout'))
function App() {
  return (
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        <Route
          path='/'
          element={
            <HomeLayout>
              <ButtonPrimary>button</ButtonPrimary>
            </HomeLayout>
          }
        ></Route>
      </Routes>
    </Suspense>
  )
}

export default App
