import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { theme } from '@utils/theme';

const BaseLayout: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </>
);

export default BaseLayout;
