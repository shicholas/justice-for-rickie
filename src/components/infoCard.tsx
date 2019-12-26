import {
  Button,
  Card as MaterialCard,
  CardActions as MaterialCardActions,
  CardContent as MaterialCardContent,
  Typography
} from '@material-ui/core';
import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  card: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
});

interface CardInterface {
  title: string;
  content: string;
  actionButtonText: string;
  actionButtonLink: string;
}

export const infoCard = (
  { title, content, actionButtonText, actionButtonLink }: CardInterface
) => {
  const classes = useStyles();

  return (
    <MaterialCard className={classes.card}>
      <MaterialCardContent>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>
        <ReactMarkdown source={content} />
      </MaterialCardContent>
      <MaterialCardActions>
        <Link to={actionButtonLink}>
          <Button size="small">{actionButtonText}</Button>
        </Link>
      </MaterialCardActions>
    </MaterialCard>
  );
};
