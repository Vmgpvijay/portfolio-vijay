import './App.css'
import { RouterProvider, Outlet, createHashRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Myworks from './components/Myworks/Myworks'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Resume from './components/Resume/Resume'

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


const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/myworks", element: <Myworks /> },
      {path: "/contact" , element: <Contact />},
      {path: "/Education" , element: <Education />},
      { path: "/resume", element: <Resume /> },

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
