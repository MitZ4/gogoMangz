import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Mangz. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
};

export default Footer;
