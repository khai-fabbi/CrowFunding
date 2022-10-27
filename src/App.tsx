import { LazyLoading } from '@/components/loading'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import SignInPage from './pages/sign-in'
import SignUpPage from './pages/sign-up'

const HomeLayout = lazy(() => import('@/layouts/home-layout'))
const HomePage = lazy(() => import('@/pages/home'))
function App() {
  return (
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        <Route path='/login' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
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
