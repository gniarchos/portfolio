import { useCallback, useState, useEffect } from "react"
import Particles from "react-tsparticles"
import type { Container, Engine } from "tsparticles-engine"
import { loadStarsPreset } from "tsparticles-preset-stars"

export default function StarsBackground() {
  const [loaded, setLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 499) {
      setIsMobile(true)
    }
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      setLoaded(true)
    },
    []
  )

  return (
    <div className={loaded ? "stars fade_in" : "stars"}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          modes: {
            bounce: {
              distance: 200,
            },
            push: {
              default: true,
              groups: [],
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.1,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              minSpeed: 0.1,
              easing: "ease-out-quad",
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                selectors: [],
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
              drift: 0,
              random: true,
              speed: 0.5,
              straight: true,
              center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
              },
            },
            number: {
              value: isMobile ? 150 : 300,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0,
              },
              value: 1,
              anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.1, max: isMobile ? 2 : 3 },
            },
          },
          detectRetina: true,
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
        }}
      />
    </div>
  )
}
