import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import Home from './components/Home.jsx'
import store from './store/index.js'
import SingleHome from './components/Single_Video-Compo/SingleHome.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/watch', element: <SingleHome />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Home></Home>
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
