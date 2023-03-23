import React from 'react';

import Navigation from '../navigation';

const Header = () => {
  return (
    <header> 
        <p>Header! Pulling from header component</p>
        <p><Navigation/></p>
    </header>
  );
};

export default Header;
