import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="fixed flex flex-col items-center justify-around z-10 bottom-0 w-[80px] h-[300px]">
      <a href='https://github.com/giuseppeusn' target="_blank" title="Link externo" rel="noreferrer">
        <FiGithub
          className="icon text-white text-3xl opacity-30 hover:opacity-100 transition-all duration-300"
          style={{ "--order": 1 }}
        />
      </a>
      <a href='https://www.linkedin.com/in/giuseppe-nunes/' target="_blank" title="Link externo" rel="noreferrer">
        <FiLinkedin
          className="icon text-white text-3xl opacity-30 hover:opacity-100 transition-all duration-300"
          style={{ "--order": 2 }}
        />
      </a>
      <a href='https://www.instagram.com/giuseppe_usn/' target="_blank" title="Link externo" rel="noreferrer">
        <FiInstagram
          className="icon text-white text-3xl opacity-30 hover:opacity-100 transition-all duration-300"
          style={{ "--order": 3 }}
        />
      </a>
      <span className="trace bg-white w-[2px] opacity-30"></span>
    </div>
  )
}

export default SocialMedia;