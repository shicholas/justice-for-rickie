import Heading from '@kiwicom/orbit-components/lib/Heading';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import React from 'react';
import Text from '@kiwicom/orbit-components/lib/Text';
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

      <Text>
        You can send a letter to Rickie at
        Rickie Slaughter NV #85902
        1250 E Arica Road
        Eloy, AZ 85131
      </Text>

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
        <InputField
          autoComplete="off"
          dataTest="contact-email"
          error={formik.errors.name}
          id="ID"
          label="Email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Your Email"
          type="text"
          value={formik.values.name}
        />
      </form>
    </>
  );
};

export default ContactRickiePage;
