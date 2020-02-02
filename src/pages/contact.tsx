import Button from '@kiwicom/orbit-components/lib/Button';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import React from 'react';
import Text from '@kiwicom/orbit-components/lib/Text';
import Textarea from '@kiwicom/orbit-components/lib/Textarea';

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
          Your email: <InputField type="text" name="_replyto" />
        </Text>
        <Text>
          Your message: <Textarea name="message" />
        </Text>

        <Button submit={true} type="primary">Send Information</Button>
      </form>
    </>
  );
};

export default ContactRickiePage;
