import Heading from '@kiwicom/orbit-components/lib/Heading';
import React from 'react';
import Text from '@kiwicom/orbit-components/lib/Text';

const ContactRickiePage = () => {
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
