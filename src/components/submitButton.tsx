import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MaterialButton from '@material-ui/core/Button';
import React from 'react';

interface SubmitButtonInterface {
  values: any;
  errors: any;
  isSubmitting: boolean;
  submitButtonText: string;
  handleReset?(): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  }),
);

export const SubmitButton = ({
  values,
  errors,
  isSubmitting,
  submitButtonText,
  handleReset,
}: SubmitButtonInterface) => {
  const classes = useStyles();
  const isDisabled = Object.keys(errors).length > 0 ||
    isSubmitting ||
    Object.values(values).every((value) => value === '');

  return (
    <Grid>
      <Grid item={true}>
        <MaterialButton
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={isDisabled}
          type="submit"
        >
          {submitButtonText}
        </MaterialButton>
      </Grid>
      {handleReset && (
        <Grid item={true}>
          <MaterialButton
            variant="contained"
            onClick={handleReset}
          >
            Reset
          </MaterialButton>
        </Grid>
      )}
    </Grid>
  );
};
