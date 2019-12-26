import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Button as MaterialButton } from '@material-ui/core';
import React from 'react';

interface ButtonInterface {
  text: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  }),
);

export const Button = ({ text }: ButtonInterface) => {
  const classes = useStyles();
  return (
    <MaterialButton
      variant="contained"
      color="primary"
      className={classes.button}
      type="submit"
    >
      {text}
    </MaterialButton>
  );
};
