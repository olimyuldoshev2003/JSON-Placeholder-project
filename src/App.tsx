import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import Posts from './pages/Posts/Posts'
import Post from './pages/Post/Post'
import Comments from './pages/Comments/Comments'
import Comment from './pages/Comment/Comment'
import Albums from './pages/Albums/Albums'
import Album from './pages/Album/Album'
import Photos from './pages/Photos/Photos'
import Photo from './pages/Photo/Photo'
import Todos from './pages/Todos/Todos'
import Todo from './pages/Todo/Todo'
import Users from './pages/Users/Users'
import User from './pages/User/User'

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
        path: "comments/:id",
        element:<Comment/>
      },
      {
        path: "albums",
        element:<Albums/>
      },
      {
        path: "albums/:id",
        element:<Album/>
      },
      {
        path: "photos",
        element:<Photos/>
      },
      {
        path: "photos/:id",
        element:<Photo/>
      },
      {
        path: "todos",
        element:<Todos/>
      },
      {
        path: "todos/:id",
        element:<Todo/>
      },
      {
        path: "users",
        element:<Users/>
      },
      {
        path: "users/:id",
        element:<User/>
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