import React, { useState } from 'react';

import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from '@nitro3/components';

const useStyles = makeStyles({
  container: {
    minHeight: '480px',
    border: '2px',
    padding: '10px',
  },
  footer: {
    background: '#ccc',
    padding: '20px',
    color: '#fffff',
    margin: 'auto',
    textAlign: 'center',
  },
});
/* eslint-disable-next-line */
export interface MasterLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Master = (props: MasterLayoutProps) => {
  const classes = useStyles();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CssBaseline />
      <Header />
      <main className={classes.container}>{props.children}</main>

      <footer className={classes.footer}>&copy; Copyright 2020 Nitro3</footer>
    </div>
  );
};

export default Master;
