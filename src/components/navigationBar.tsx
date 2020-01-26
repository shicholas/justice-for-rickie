import NavigationList, {
  NavigationListItem
} from '@kiwicom/orbit-components/lib/NavigationList';
import { default as NavBar } from '@kiwicom/orbit-components/lib/NavigationBar';
import React from 'react';

export const NavigationBar = () => {
  const handleDrawerOpen = () => {
    alert('opened drawer');
  };

  return (
    <NavBar onMenuOpen={handleDrawerOpen} >
      <NavigationList>
        <NavigationListItem>Justice for Rickie Slaughter</NavigationListItem>
      </NavigationList>
    </NavBar>
  );
};
