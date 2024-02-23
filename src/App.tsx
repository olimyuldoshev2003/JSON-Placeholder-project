import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import Posts from './pages/Posts/Posts'
import Post from './pages/Post/Post'
import Comments from './pages/Comments/Comments'
import Albums from './pages/Albums/Albums'
import Photos from './pages/Photos/Photos'
import Todos from './pages/Todos/Todos'
import Users from './pages/Users/Users'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "posts",
        element:<Posts/>
      },
      {
        path: "posts/:id",
        element:<Post/>
      },
      {
        path: "comments",
        element:<Comments/>
      },
      {
        path: "albums",
        element:<Albums/>
      },
      {
        path: "photos",
        element:<Photos/>
      },
      {
        path: "todos",
        element:<Todos/>
      },
      {
        path: "users",
        element:<Users/>
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App