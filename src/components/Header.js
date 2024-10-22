import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Logo</div>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 50px',
    backgroundColor: '#f8f9fa',
  },
  logo: { fontSize: '24px', fontWeight: 'bold' },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
  }
};

export default Header;
