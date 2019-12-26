import { FormattedMessage } from 'gatsby-plugin-intl';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    padding: 16,
  }
});

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      © {new Date().getFullYear()} Friends of Rickie Slaughter.
      <br />
      <FormattedMessage id="footer.builtWith" />{' '}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>.
    </footer>
  );
};
