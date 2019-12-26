import {
  Collapse,
  Hidden,
  Icon,
  List,
  ListItem,
  ListItemIcon
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { FakeLink, Link, ListItemText } from './index';
import React, { useCallback, useState } from 'react';
import { Footer } from './footer';
import { default as MaterialDrawer } from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: any) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    }
  },
  list: {
    width: 250,
  },
  nested: {
    paddingLeft: 32,
  },
}));

interface IDrawerProps {
  isOpen: boolean;
  variant: 'permanent' | 'persistent' | 'temporary';
  toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
  onClose?: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const menuLinks = [
  {
    children: [
      {
        i18nMessage: 'header.litigation',
        url: '/new-evidence/detectives-deposition',
      },
      {
        i18nMessage: 'header.litigation',
        url: '/new-evidence/prosecutors-deposition',
      },
      {
        i18nMessage: 'header.litigation',
        url: '/new-evidence/witness-lineup',
      },
      {
        i18nMessage: 'header.litigation',
        url: '/new-evidence/911-dispatch-report',
      },
    ],
    i18nMessage: 'header.services',
    icon: 'room_service',
    url: '/new-evidence',
  },
  {
    i18nMessage: 'header.about',
    icon: 'people_outline',
    url: '/sign-rickies-petition',
  },
  {
    i18nMessage: 'header.contact',
    icon: 'contact_support',
    url: '/contact-rickie',
  },
];

export const Drawer: React.FC<IDrawerProps> =
  ({
    isOpen = false,
    toggleDrawer,
    onClose,
    variant,
  }) => {
    const classes = useStyles();

    const [openedLinks, setOpenedLinks] = useState<string[]>([]);

    const isListOpened = useCallback((url: string) => {
      return openedLinks.includes(url);
    }, [openedLinks]);

    const toggleList = useCallback((url: string) => {
      if (isListOpened(url)) {
        // if list opened remove from array
        setOpenedLinks(openedLinks.filter((openedUrl) => openedUrl !== url));
      } else {
        // if closed add to array
        setOpenedLinks([
          ...openedLinks,
          url,
        ]);
      }
    }, [openedLinks]);

    return (
      <MaterialDrawer
        classes={{ paper: classes.drawer }}
        open={isOpen}
        onClose={onClose}
        variant={variant}
      >
        <div
          className={classes.list}
          role="presentation"
          onKeyDown={toggleDrawer}
        >
          <List
            component="nav"
            aria-labelledby="blog-list-with-nested"
          >
            <Hidden lgUp={true}>
              <ListItem
                button={true}
                component={Link}
                to={'/'}
              >
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="header.title" />
              </ListItem>
            </Hidden>
            {
              menuLinks.map((link) => {
                const isHasChildren = !!link.children && !!link.children.length;
                const open = isListOpened(link.url);

                return (
                  <React.Fragment
                    key={link.i18nMessage}
                  >
                    <ListItem
                      button
                      onClick={() => { isHasChildren && toggleList(link.url); }}
                      component={isHasChildren ? FakeLink : Link}
                      to={link.url}
                    >
                      <ListItemIcon>
                        <Icon>{link.icon}</Icon>
                      </ListItemIcon>
                      <ListItemText primary={link.i18nMessage} />
                      {isHasChildren && (
                        <>
                          {
                            open ? <ExpandLess /> : <ExpandMore />
                          }
                        </>
                      )}
                    </ListItem>
                    {
                      isHasChildren && (
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            {
                              (link.children || []).map((nestedLink) => (
                                <ListItem
                                  key={nestedLink.url}
                                  button
                                  className={classes.nested}
                                  component={Link}
                                  to={nestedLink.url}
                                >
                                  <ListItemText
                                    primary={nestedLink.i18nMessage} />
                                </ListItem>
                              ))
                            }
                          </List>
                        </Collapse>
                      )
                    }
                  </React.Fragment>
                );
              })
            }
          </List>
        </div>
        <Footer />
      </MaterialDrawer >
    );
  };
