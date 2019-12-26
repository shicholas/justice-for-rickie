import { Header } from '../components/header';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSiteMetadata } from '../hooks';

const useStyles = makeStyles((theme: any) => ({
  root: {
    marginTop: 64,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 240
    },
    padding: 32,
  }
}));

export const MainLayout: React.FC = ({ children }) => {
  const { title } = useSiteMetadata();
  const classes = useStyles();

  return (
    <>
      <Header siteTitle={title} />
      <main className={classes.root}>
        {children}
      </main>
    </>
  );
};
