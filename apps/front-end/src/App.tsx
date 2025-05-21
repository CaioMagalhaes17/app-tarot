import { RouterProvider } from 'react-router-dom'
import { appRoute } from './routes'
import useStore from './state'
import { useEffect } from 'react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

function App() {
  const { setIsMobile, setInitParticles } = useStore()
  useEffect(() => {
    if (window.outerWidth <= 768) {
      setIsMobile(true)
    }
  }, [window.outerWidth])

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      console.log("dasniodnadsano")
      setInitParticles(true);
    });
  }, []);
  return (
    <RouterProvider router={appRoute} />
  )
}

export default App
