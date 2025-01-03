import React from 'react'
import { RouterProvider } from 'react-router-dom'
import appRouter from './routes/AppRouter'
const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
