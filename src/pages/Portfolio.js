import React  from 'react';
import Header from '../components/Header';
// import Modal from '../components/Modal';
import TrybewalletThumb from '../images/trybewallet-thumb.png';
import './ProjectCard.css';

function Portfolio() {
  // const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="h-screen bg-neutral-800">
        <Header />
        <div className="wrap">
          <img src={ TrybewalletThumb } alt="trybewallet project" />
          <div className="image_overlay">
            <div className="flex flex-col items-center">
              <p className="font-bold">Trybewallet</p>
              <p className="text-cyan-500 text-base">React JS | Redux JS</p>
            </div>
            <div>
              <button
                className="flex items-center justify-around text-lg w-56 border border-cyan-500 p-3
                hover:bg-cyan-500 transition-all duration-300"
                // onClick={ () => setModal(true) }
              >
              Ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* { modal && <Modal /> } */}
    </div>
  );
}

export default Portfolio;