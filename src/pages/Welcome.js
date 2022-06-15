import React, { useRef } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Particles from 'react-tsparticles';

function Welcome() {

  const mainContent = useRef(null);

  const executeScroll = () => mainContent.current.scrollIntoView();

  return (
    <div>
      <div className="h-0">
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
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
                value: "#a3a3a3",
              },
              links: {
                color: "#a3a3a3",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
        <div className="h-screen flex flex-col items-center justify-center text-white drop-shadow-[10px_10px_10px_rgba(0,0,0,1)]">
          <div className="text-center text-3xl">
            <p className="font-light">Olá, meu nome é <span className="text-cyan-500 font-semibold">Giuseppe Nunes</span>!</p>
            <p className="font-light">Estudante de Desenvolvimento Web Full-Stack</p>
          </div>
          <div className="flex mt-8">
            <button
              onClick={executeScroll}
              className="flex items-center justify-around text-lg w-56 border border-cyan-500 p-3
              hover:bg-cyan-500 transition-all duration-300"
            >
              Veja meus projetos
              <AiOutlineArrowDown className="text-2xl" />
            </button>
          </div>
        </div>
        <div ref={mainContent} className="h-screen bg-neutral-800">Element to scroll to</div>
      {/* </div> */}
    </div>
  );
}

export default Welcome;
