import { LazyLoading } from '@/components/loading'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomeLayout = lazy(() => import('@/layouts/home-layout'))
const HomePage = lazy(() => import('@/pages/home'))
function App() {
  return (
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        <Route
          path='/'
          element={
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          }
        ></Route>
      </Routes>
    </Suspense>
  )
}

export default App
