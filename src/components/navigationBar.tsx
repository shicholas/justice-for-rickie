import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import { default as NavBar } from '@kiwicom/orbit-components/lib/NavigationBar';
import React from 'react';
import { navigate } from 'gatsby';

export const NavigationBar = () => {
  const handleDrawerOpen = () => {
    alert('opened drawer');
  };

  return (
    <NavBar
      onMenuOpen={handleDrawerOpen}
      dataTest="navigation"
    >
      <ButtonLink
        type="secondary"
        transparent={true}
        onClick={() => { navigate('/'); }}
      >
        Justice For Rickie
      </ButtonLink>
      <ButtonLink
        type="secondary"
        transparent
        onClick={() => { navigate('/contact'); }}>
        Contact
      </ButtonLink>
    </NavBar>
  );
};
