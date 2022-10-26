import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ButtonPrimary } from './components/button'
import { LazyLoading } from './components/loading'

const HomeLayout = React.lazy(() => import('./layouts/home/home-layout'))
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
