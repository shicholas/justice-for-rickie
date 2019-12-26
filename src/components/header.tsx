import {
  AppBar,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Drawer } from './drawer';
import { LanguageMenu } from './languageMenu';
import { Link } from './link';
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = ({ siteTitle }) => {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = useCallback(
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsDrawerOpen(!isDrawerOpen);
    }, [isDrawerOpen]);

  const theme: any = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Hidden lgUp={true}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdDown={true}>
            <Typography
              variant="h6"
              className={classes.title}
            >
              <Link to={'/'}>{siteTitle}</Link>
            </Typography>
          </Hidden>
          <Hidden lgUp={true}>
            <div className={classes.title} />
          </Hidden>
          <LanguageMenu />
        </Toolbar>
      </AppBar>
      <Drawer
        isOpen={isDesktop ? true : isDrawerOpen}
        toggleDrawer={toggleDrawer}
        onClose={toggleDrawer}
        variant={isDesktop ? 'permanent' : 'temporary'}
      />
    </div>
  );
};
