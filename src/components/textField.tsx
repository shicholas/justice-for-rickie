import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import MaterialTextField from '@material-ui/core/TextField';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  }),
);

export const TextField = ({
  errors,
  onBlur,
  onChange,
  label,
  touched,
  value,
  values,
  help = '',
  type = 'text',
  fullWidth = false
}) => {
  const classes = useStyles();

  return (
    <MaterialTextField
      id={value}
      label={label}
      error={touched[value] && errors[value]}
      value={values[value]}
      onChange={onChange}
      className={classes.textField}
      onBlur={onBlur}
      type={type}
      helperText={help}
      fullWidth={fullWidth}
      variant="outlined"
    />
  );
};
