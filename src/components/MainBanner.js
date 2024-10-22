import React from 'react';
import bangbooImage from '../image/bangboo.png';

const MainBanner = () => {
  return (
    <div style={styles.banner}>
      <h1>Welcome to Hakush</h1>
      <p>Your trusted platform for X, Y, Z.</p>
    </div>
  );
};

const styles = {
  banner: {
    height: '500px',
    backgroundImage: `url(${bangbooImage})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    textAlign: 'center'
  }
};

export default MainBanner;
