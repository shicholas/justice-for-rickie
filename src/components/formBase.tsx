import { Formik } from 'formik';
import { ObjectSchema } from 'yup';
import React from 'react';

export interface ISubmitAction<T = any> {
  (values: T, actions): void;
}

interface IFormBaseProps {
  validationSchema: ObjectSchema;
  children?: any;
  initialValues: any;
  submitAction: ISubmitAction;
}

export const FormBase: React.FC<IFormBaseProps> = ({
  initialValues,
  submitAction,
  validationSchema,
  children,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={submitAction}
    validationSchema={validationSchema}
    render={
      (props) => (
        <form
          onSubmit={event => {
            event.preventDefault();
            props.submitForm();
          }}
          onKeyDown={event => {
            if (event.keyCode === 13 && (event.shiftKey || event.metaKey)) {
              event.preventDefault();
              props.submitForm();
            }
          }}
        >
          {children(props)}
        </form>
      )
    }
  />
);
