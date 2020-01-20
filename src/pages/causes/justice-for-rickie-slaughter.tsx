import { Button, Seo } from '../../components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { MainLayout } from '@layouts/MainLayout';
import React from 'react';

/* eslint-disable max-len */
const justiceForRickie = () => {
  const data = useStaticQuery(
    graphql`
      query {
        rickie: file(relativePath: { eq: "rickie.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return (
    <MainLayout>
      <Seo title="Justice For Rickie Slaughter" />

      <Image
        fluid={data.rickie.childImageSharp.fluid}
        alt={'Rickie at his graduation'}
      />


      <p>
        # Justice For Rickie Slaughter

        Rickie Lamont Slaughter is an innocent man who is serving a prison
        sentence for a crime he did not commit.

        In 2004, a man along with some of his friends and family was robbed at
        gunpoint, and unfortunately, that man was shot in the face. The victim
        said two men black man, with Jamaican accents, one 5 foot 6 and one 5
        foot 10 perpetrated the crime and took \$1500 in cash, various credit
        cards, and items of clothing.

        Based on an unfair and faulty photo line-up, Rickie (who does not have a
        Jamaican accent and is 5&apos;8&quot;) was misidentified. Additionally, witnesses
        described the perpetrators vehicle as being a Pontiac Grand Am, a
        different kind of car than the one Rickie possessed, a Ford Taurus.
        Furthermore, there was no physical evidence of the cash, credit cards,
        and clothing, to link him to the crime. Despite obvious flaws in the
        case, Rickie was still eventually wrongfully convicted at trial due to
        the photo misidentifications.

        Now, new evidence in a federal proceeding regarding Rickie&apos;s conviction has
        brought to light that the prosecutor knowingly withheld evidence that could
        have proved Rickie&apos;s innocence. There was a second, more fair photo line-up
        from which Rickie was not identified as a perpetrator by the victims and
        witnesses and a 911 dispatch report revealing what time the perpetrators
        left the crime scene (2612 Glory View Lane, Las Vegas, NV), which was at
        7:11pm. At that time, Rickie was picking up his girlfriend from work on the
        opposite side of town (715 N. Nellis Blvd, Las Vegas, NV) at the same time
        the crime was ending nearly 9 miles away proving that it was impossible for
        him to have commited the crime.

        Below, follow along and click on the hyperlinks to read documents and
        evidence in Rickie&apos;s case. Also, sign the petition to help correct the
        grave injustice that was done to Rickie.

        In his [federal habeas appeal](/pdfs/rickie-2AP.pdf), Rickie detailed how
        the facts against him were unjust for several reasons:

        ### The unfair photo line-up

        During the police investigation, an unfair photo line-up was presented to
        the victims and witnesses that caused them to misidentify Rickie.
        Specifically, the photo line-up was made in a way that caused Rickie&apos;s
        photo to stand out from the rest of the photos. The color and background
        was uniquely different from the other 5 photos in the line-up, which
        psychological made his picture stand out to the viewers. Psychologists
        and police protocols have long-warned about making one photo stand out
        from the rest because it can lead to misidentification. The investigation
        deliberately did not follow the proper protocols.

        [The Innoncence Project has an in-depth study of misidentification, which
        details how bias has been used to convict innocent people of crimes they did
        not
        commit.](https://www.innocenceproject.org/eyewitness-identification-reform/)

        ### New evidence of a second more fair photo line-up

        At a recent hearing, ordered by a federal judge, the now retired lead
        detective in this case, Jesse Priedo (who retired after wrongly accussing
        15 year old [Patrick Wayne Harper of a
        crime](/pdfs/detective-deposition.pdf#186) that he was later exonerated
        for) testified [for the first time](/pfs/detectives-deposition.pdf) ever
        that a second more fair line-up was shown to the witnesses in 2004. In
        that instance **no one picked Rickie out of this more fair line-up**. To
        read the deposition of the detective, [click
        here](/pdfs/detective-deposition.pdf).

        However, this information was not adequately provided to Rickie&apos;s attorney
        before trial, and the jury did not hear about this second more fair photo
        line-up. Police did not promptly preserve this photo line up as evidence.
        Hearing about this second more fair photo line-up, would have undermined the
        first unfair photo line-up and Rickie would likely have been aquitted had the
        jury heard this.

        Rickie deserves a trial where this evidence can be presented to the jury.
        [Click here to sign the
        petition](https://www.change.org/p/people-interested-in-criminal-justice-free-rickie-slaughter).

        ### New evidence of when the perpertators left the crime scene and the prosecutor&apos;s deception

        At Rickie&apos;s trial, a big issue was what time did the perpetrators leave the
        crime scene. This was an important question because Rickie&apos;s girlfriend
        testified that Rickie picked her up at 7:15 pm, 9 miles away from the crime
        scene. Additionally, an investigator drove the fastest route possible between
        the crime scene and where Rickie&apos;s girlfriend worked to determine the fastest
        time it would take to drive that route. The fastest route was 20 minutes.

        At trial, the prosecutor secured a court ruling requiring that the jury be
        told that the perpetrators left the crime scene at 7 pm. However, new
        evidence (a 911 dispatch report, which was withheld by police and prosecutors
        all these years) proves that the perpetrators actually left the crime scene
        at 7:08 pm. [Click here to see the dispatch report.](/pdfs/dispatch-report)

        Specifically, the call came in at 7:11 pm and the caller is documented as
        having stated to the dispatch operator that the crime had happened 5 minutes
        ago. This statement was made one minute and 48 seconds into the call, which
        means that the statement was made at 7:12 pm. The dispatch report documents
        this as t/l 5 minutes ago, which means that the time-lapse of the crime was 5
        minutes ago. Simple substraction of 7:12 pm minus 5 minutes means that the
        perpetrators left between 7:07 and 7:08 pm.

        Additionally, the now retired detective testified at a new hearing that a
        witness who was the boss of Rickie&apos;s then girlfriend originally stated that
        he had left work at 7:15 pm. This statement combined with the fact that he
        stated that he saw Rickie as he was pulling out of the parking lot means that
        Rickie must have been there at his girlfriend&apos;s place of work at 7:15 pm, 9
        miles (or 20 minutes away) from the crime scene. At trial, the prosecutors
        knowingly hid this statement from Rickie&apos;s girlfriend&apos;s boss from the jury.

        This new information means that Rickie could not be one of the perpetrators
        at the crime scene.

        As such, the fact Rickie arrived at 7:15 to pick up his girlfriend at 715
        North Nellis Blvd means he could not have perpetrated the crime because the
        earliest it would have taken a perpetator to drive from 2612 Glory View would
        have been 7:28-7:30. This new evidence demonstrates Rickie&apos;s need for a new
        trial to show the jury the evidence of his actual innocence. The fact that
        the prosecutor misled the jury at trial into believing that the peretrators
        fled the crime scene at 7:00 (and at the same time corruptly withheld a
        dispatch report that showed the contratry) is signficant because it changed
        the actual timing of the event to favor the prosecutor&apos;s fictionalized
        version and caused Rickie to be wrongly convicted of a crime he did not commit.
      </p>

      <a href="https://www.change.org/p/people-interested-in-criminal-justice-free-rickie-slaughter/share_for_starters?just_created=true&tag_selected=politics">
        <Button text="Sign Rickie's Petition" />
      </a>

      <a href="https://www.amazon.com/gp/video/detail/0FWLLKVNWELA60OE9FXYMNICE5">
        <Button text="Hard Time" />
      </a>

    </MainLayout>
  );
};

export default justiceForRickie;
