import { Link, Typography } from '@mui/material';
import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home ()
{
  return (
    <div className={ styles.body }>
      <Head>
        <title>Topicals | Skincare for Flare-ups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href='' className={ styles.header_a }>
        <div className={ styles.header }>
          <Typography className={ styles.header_a }>Subscribe To Save 10% On Your Next Topicals Delivery</Typography>
        </div>
      </Link>
    </div>
  )
}