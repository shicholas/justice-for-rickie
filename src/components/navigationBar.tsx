import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import { default as NavBar } from '@kiwicom/orbit-components/lib/NavigationBar';
import React from 'react';
import { navigate } from 'gatsby';

export const NavigationBar = () => {
  return (
    <NavBar
      onMenuOpen={null}
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
      <ButtonLink
        type="secondary"
        transparent
        onClick={() => { navigate('/blog'); }}>
        Blog
      </ButtonLink>
    </NavBar>
  );
};
