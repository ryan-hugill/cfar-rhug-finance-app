import React from 'react';

export class HeroSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
        <div className="hero-section">
            <img src="./skyline.jpg" alt="Logo" />
        </div>
    );
  }
}