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

      <div className={ styles.navbar }>
        <ul className={ styles.un_ordered }>
          <li>
            <Link href=''>
              <Typography>Shop</Typography>
            </Link>
          </li>
          <li>
            <Link href=''>
              <Typography>Holiday Gifts</Typography>
            </Link>
          </li>
          <li>
            <Link href=''>
              <Typography>Rewards</Typography>
            </Link>
          </li>
          <li>
            <Link href=''>
              <Typography>About</Typography>
            </Link>
          </li>
        </ul>


        <Typography>TOPICALS</Typography>


        <ul className={ styles.un_ordered }>
          <li>
            <Link href=''>
              <Typography>Search</Typography>
            </Link>
          </li>
          <li>
            <Link href=''>
              <Typography>Help</Typography>
            </Link>
          </li>
          <li>
            <Link href=''>
              <Typography>Account</Typography>
            </Link>
          </li>
          <li>
            <Link href=''>
              <Typography>Bag</Typography>
            </Link>
          </li>
        </ul>

      </div>

    </div>
  )
}