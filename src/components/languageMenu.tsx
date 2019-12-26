import { FormattedMessage, changeLocale } from 'gatsby-plugin-intl';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';

export const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button 
        color="inherit"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={openMenu}
      >
        <TranslateIcon />
        <FormattedMessage id="languages.language" />
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted={true}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={() => { changeLocale('en'); }}>
          <FormattedMessage id="languages.english" />
        </MenuItem>
        <MenuItem onClick={() => { changeLocale('es'); }}>
          <FormattedMessage id="languages.spanish" />
        </MenuItem>
      </Menu>
    </>
  );
};