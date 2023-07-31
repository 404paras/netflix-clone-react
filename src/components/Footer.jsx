import React from 'react';
import Github from '../assets/icons8-github-30.png';
import Linkdin from '../assets/icons8-linkedin-48.png';

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        marginTop:'3rem',
        color: 'white',
        backgroundColor: 'rgb(25, 23, 23)',
        minHeight: '30vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p
        style={{
          fontSize: '1.5rem',
          wordSpacing: '0.5rem',
        }}
      >
        Made By Paras Garg ❤️
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a
          href="https://github.com/404paras"
          style={{
            margin: '0rem 1.5rem 0 0',
            transition: 'opacity 0.3s ease-in-out',
          }}
          target="_blank"
        >
          <img
            src={Github}
            alt="Github"
            style={{
              backgroundColor: 'white',
              borderRadius: '50%',
              width: '100%',
              height: '5vh',
              opacity: 1, /* Set the initial opacity */
            }}
            // Apply hover effect by changing the opacity
            onMouseEnter={(e) => (e.target.style.opacity = 0.7)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/paras-garg-b45512204/"
          target="_blank"
          style={{
            margin: '0rem 0 0 0.5rem',
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <img
            src={Linkdin}
            alt="LinkdIn"
            style={{
              height: '6vh',
              opacity: 1, /* Set the initial opacity */
            }}
            // Apply hover effect by changing the opacity
            onMouseEnter={(e) => (e.target.style.opacity = 0.7)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
