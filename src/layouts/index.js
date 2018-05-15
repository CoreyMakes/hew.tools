import React from 'react';
import Nav from '../components/nav.js';
import Footer from '../components/footer';

// Global Styles
import '../styles';

// Import Data
import data from '../data';

const Template = ({children, location}) => {
  const {headerLinks} = data;

  return (
    <Box px={[4, 5]}>
      <nav>
        <Nav items={headerLinks} />
      </nav>
      <main>{children()}</main>
      <Box py={4} />
    </Box>
  );
};

export default Template;
