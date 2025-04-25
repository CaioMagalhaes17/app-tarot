import { RouterProvider } from 'react-router-dom'
import { appRoute } from './routes'
import useStore from './state'
import { useEffect } from 'react'

function App() {
  const { setIsMobile } = useStore()
  useEffect(() => {
    if (window.outerWidth <= 768) {
      setIsMobile(true)
    }
  }, [window.outerWidth])
  return (
    <RouterProvider router={appRoute} />
  )
}

export default App
