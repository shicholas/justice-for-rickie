import MaterialListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

const ListItemTextWithoutIntl = ({ primary, intl }) => (
  <MaterialListItemText primary={intl.formatMessage({ id: primary})} />
);

export const ListItemText = injectIntl(ListItemTextWithoutIntl);