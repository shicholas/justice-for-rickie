import Alert from '@kiwicom/orbit-components/lib/Alert';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import { CenteredText } from '@components/centeredText';
import { Container } from '@components/container';
import GoogleMapReact from 'google-map-react';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import React from 'react';
import { SixteenByNineImage } from '@components/sixteenByNineImage';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const HTMLFromGraphCMS = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
`;

const IndexPage = ({ data }) => {
  const pageCopy = data.cms.pages[0].text.html;
  const changeDotOrgPetition =
    'https://www.change.org/p/' +
    'people-interested-in-criminal-justice-free-rickie-slaughter';

  const hardTimes =
    'https://www.amazon.com/gp/video/detail/0FWLLKVNWELA60OE9FXYMNICE5';

  const setMap = ({ map, maps }) => {
    console.log(JSON.stringify(maps));
    const directionsService = new maps.DirectionsService();
    const directionsDisplay = new maps.DirectionsRenderer();

    directionsDisplay.setMap(map);

    directionsService.route(
      {
        destination: '715 N Nellis Blvd, Las Vegas, NV 89110',
        origin: '2612 Glory View Ln, North Las Vegas, NV 89032',
        travelMode: 'DRIVING',
      }, (result, status) => {
        if (status == 'OK') {
          directionsDisplay.setDirections(result);
        }
      }
    );
  };

  return (
    <>
      <SixteenByNineImage url='/images/rickie.png' />
      <Alert>
        Help an innocent man who has been serving time since June 29, 2004.
      </Alert>

      <Container>
        <HTMLFromGraphCMS dangerouslySetInnerHTML={{ __html: pageCopy }} />

        <ButtonLink href={changeDotOrgPetition} external={true}>
          Sign Petition
        </ButtonLink>

        <ButtonLink href={hardTimes} external={true}>
          Hard Time
        </ButtonLink>

        <div style={{ height: '35vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={
              { key: 'AIzaSyBWxquloo2cs9BJ4NXC7I2oBygORWl0gSc' }
            }
            defaultCenter={{ lat: 36.187, lng: -115.137 }}
            defaultZoom={13}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={setMap}
          >
          </GoogleMapReact>
        </div>
        <CenteredText>
          <Heading type="title3">
            No one can do this drive in 7 minutes.
          </Heading>
        </CenteredText>
        <br />
      </Container>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    cms {
      pages(where: {url: "/"}) {
        text {
          html
        }
      }
    }
  }
`;
