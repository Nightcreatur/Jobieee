import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { HomeLayout, Landing, Login, Register, DashboardLayout, Error, } from './pages'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />
  },
  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/landing',
    element: <Landing />
  },
  {
    path: './register',
    element: <Register />
  },
  {
    path: './dashboard',
    element: <DashboardLayout />
  },
  {
    path: './error',
    element: <Error />
  }

])

const App = () => {
  return (
    <RouterProvider router={router} />)
}

export default App