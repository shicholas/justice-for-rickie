import NavigationList, {
  NavigationListItem
} from '@kiwicom/orbit-components/lib/NavigationList';
import { Link } from 'gatsby';
import { default as NavBar } from '@kiwicom/orbit-components/lib/NavigationBar';
import React from 'react';

export const NavigationBar = () => {
  const handleDrawerOpen = () => {
    alert('opened drawer');
  };

  return (
    <NavBar onMenuOpen={handleDrawerOpen} >
      <NavigationList type="inline">
        <NavigationListItem>
          <Link to="/">
            Justice For Rickie Slaughter
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/contact">
            Contact
          </Link>
        </NavigationListItem>
      </NavigationList>
    </NavBar>
  );
};
