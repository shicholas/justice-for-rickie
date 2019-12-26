import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from '@material-ui/core';
import React from 'react';
import { useField } from 'formik';

export const CheckBox = ({ label, ...props }) => {
  const [field] = useField(props.name);

  return (
    <FormControlLabel
      control={
        <MuiCheckbox {...field} {...props} checked={field.value} />
      }
      label={label}
    />
  );
};
