import Heading from '@kiwicom/orbit-components/lib/Heading';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import React from 'react';
import { useFormik } from 'formik';

const ContactRickiePage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik);

  return (
    <>
      <Heading>
        Contact Rickie
      </Heading>

      <form onSubmit={formik.handleSubmit}>
        <InputField
          autoComplete="off"
          dataTest="contact-email"
          error={formik.errors.name}
          id="ID"
          label="Name"
          name="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Your Name"
          type="text"
          value={formik.values.name}
        />
      </form>
    </>
  );
};

export default ContactRickiePage;
