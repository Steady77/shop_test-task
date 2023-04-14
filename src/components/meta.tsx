import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

interface Meta {
  title: string;
  description?: string;
}

const Meta: FC<PropsWithChildren<Meta>> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title itemProp="headline">{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {description && <meta itemProp="description" name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default Meta;
