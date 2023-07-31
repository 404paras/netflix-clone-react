import React from 'react';
import '../style/NetflixLoading.css';

const NetflixLoading = () => {
  return (
    <div className="loading-container">
      <div className="loading-background"></div>
      <div className="loading-netflix-logo"></div>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default NetflixLoading;
