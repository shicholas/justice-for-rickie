import { Link as GatsbyLink } from 'gatsby-plugin-intl';
import styled from '@material-ui/styles/styled';

export const Link = styled(GatsbyLink)({
  color: 'inherit',
  textDecoration: 'none'
});

export const StyledLink = GatsbyLink;
