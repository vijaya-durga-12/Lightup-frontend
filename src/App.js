import React from 'react'
import { RouterProvider } from 'react-router-dom'
import appRouter from './routes/AppRouter'
import adminRouter from './routes/AdminRoute'

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}/>
      <RouterProvider router={adminRouter}/>
    </div>
  )
}

export default App
