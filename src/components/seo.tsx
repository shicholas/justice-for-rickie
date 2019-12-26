import Helmet from 'react-helmet';
import React from 'react';
import { useSiteMetadata } from '../hooks';

interface ISeoProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title?: string;
}

export const Seo: React.FC<ISeoProps> = (
  { description = '', lang = 'en', meta = [], title }
) => {
  const {
    title: metaTitle,
    description: metaDescription,
    author: metaAuthor,
  } = useSiteMetadata();

  description = description || metaDescription;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${metaTitle}`}
      meta={[
        {
          content: description,
          name: 'description',
        },
        {
          content: title,
          property: 'og:title',
        },
        {
          content: description,
          property: 'og:description',
        },
        {
          content: 'website',
          property: 'og:type',
        },
        {
          content: 'summary',
          name: 'twitter:card',
        },
        {
          content: metaAuthor,
          name: 'twitter:creator',
        },
        {
          content: title,
          name: 'twitter:title',
        },
        {
          content: description,
          name: 'twitter:description',
        },
      ].concat(meta)}
    />
  );
};
