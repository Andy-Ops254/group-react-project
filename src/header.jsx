import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My App</h1>
    </header>
  );
const styles = {
  header: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderBottom: '1px solid #eaeaea',
    textAlign: 'center'
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#333',
    fontWeight: '500'
  }
};

export default Header;
