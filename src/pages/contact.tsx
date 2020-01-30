import Heading from '@kiwicom/orbit-components/lib/Heading';
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
      <form
        action="https://formspree.io/moqdvlav"
        method="POST"
      >
        <Text>

          Your email: <input type="text" name="_replyto" />
        </Text>
        <Text>
          Your message: <textarea name="message" />
        </Text>

        <button type="submit">Send Information</button>
      </form>
    </>
  );
};

export default ContactRickiePage;
