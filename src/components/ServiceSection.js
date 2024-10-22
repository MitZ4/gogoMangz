import React from 'react';

const ServiceSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.serviceCard}>
        <h2>Service 1</h2>
        <p>Service 1 description</p>
      </div>
      <div style={styles.serviceCard}>
        <h2>Service 2</h2>
        <p>Service 2 description</p>
      </div>
      <div style={styles.serviceCard}>
        <h2>Service 3</h2>
        <p>Service 3 description</p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '50px 0',
  },
  serviceCard: {
    width: '30%',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    textAlign: 'center',
  },
};

export default ServiceSection;
