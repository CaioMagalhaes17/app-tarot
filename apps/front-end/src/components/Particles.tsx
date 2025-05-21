import Particles from "@tsparticles/react";
import useStore from "../state";


export function ParticlesComponent() {
  const { initParticles } = useStore()
  return (
    <>
      {initParticles &&
        (
          <Particles
            id="tsparticles"
            style={{ width: '100%', minHeight: 'screen' }}
            className=""
            options={{
              fullScreen: false,
              background: {
                color: {
                  value: "transparent",
                },
              },
              style: {
                minHeight: 'screen'
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },

                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,

                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "star",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
    </>
  )
}