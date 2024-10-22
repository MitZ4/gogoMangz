import React from 'react';
import bangbooImage from '../image/bangboo.png';
import paimonImage from "../image/paimon.png";

const MainBanner = () => {
  return (
    <div style={styles.banner}>
      <h1>Welcome to Mangz</h1>
      <p>Your trusted platform for X, Y, Z.</p>
    </div>
  );
};

const styles = {
  banner: {
    height: '40vh',
    backgroundImage: `url(${bangbooImage}), url(${paimonImage})`,
    backgroundSize: 'contain',
    backgroundPosition: "left, right",
    backgroundRepeat: "no-repeat",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    textAlign: 'center'
  }
};

export default MainBanner;
