import './App.css'
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Myworks from './components/Myworks/Myworks'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'

function Layout() {
  return (
    <>
      <Navbar />
      <main >
        <Outlet />

      </main>
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/myworks", element: <Myworks /> },
      {path: "/contact" , element: <Contact />},
      {path: "/Education" , element: <Education />},
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
