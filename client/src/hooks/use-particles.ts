import { useEffect, useState, useCallback } from "react";

interface ParticlesOptions {
  particles: {
    number: {
      value: number;
      density: {
        enable: boolean;
        value_area: number;
      };
    };
    color: {
      value: string[];
    };
    shape: {
      type: string;
    };
    opacity: {
      value: number;
      random: boolean;
    };
    size: {
      value: number;
      random: boolean;
    };
    move: {
      enable: boolean;
      speed: number;
      direction: string;
      random: boolean;
      straight: boolean;
      out_mode: string;
      bounce: boolean;
    };
    line_linked: {
      enable: boolean;
      distance: number;
      color: string;
      opacity: number;
      width: number;
    };
  };
  interactivity: {
    detect_on: string;
    events: {
      onhover: {
        enable: boolean;
        mode: string;
      };
      onclick: {
        enable: boolean;
        mode: string;
      };
      resize: boolean;
    };
    modes: {
      grab: {
        distance: number;
        line_linked: {
          opacity: number;
        };
      };
      push: {
        particles_nb: number;
      };
    };
  };
  retina_detect: boolean;
}

export const useParticles = () => {
  const [loaded, setLoaded] = useState(false);

  const particlesOptions: ParticlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#00F5FF", "#A020F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.3,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00F5FF",
        opacity: 0.2,
        width: 1
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  };

  const particlesInit = useCallback(async (engine: any) => {
    // Load tsParticles
    try {
      await loadParticles();
    } catch (error) {
      console.error("Failed to load particles:", error);
    }
  }, []);

  const particlesLoaded = useCallback(async () => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const loadParticlesLibrary = async () => {
      try {
        // Check if tsParticles already exists
        if (!(window as any).tsParticles) {
          // Load the library
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/tsparticles@2.0.6/tsparticles.bundle.min.js';
          script.async = true;
          
          script.onload = () => {
            loadParticles();
          };
          
          document.body.appendChild(script);
        } else {
          loadParticles();
        }
      } catch (error) {
        console.error("Failed to load particles library:", error);
      }
    };
    
    loadParticlesLibrary();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  const loadParticles = async () => {
    try {
      if ((window as any).tsParticles) {
        await (window as any).tsParticles.load("hero-particles", particlesOptions);
        setLoaded(true);
      }
    } catch (error) {
      console.error("Error loading particles:", error);
    }
  };

  return {
    particlesInit,
    particlesLoaded,
    loaded
  };
};
