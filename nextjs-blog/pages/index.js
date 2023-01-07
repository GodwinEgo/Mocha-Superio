import { Link, Typography } from '@mui/material';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { BsSearch } from 'react-icons/bs';

export default function Home ()
{
  return (
    <div className={ styles.body }>
      {/*========================HEADER========================*/ }
      <div className={ styles.mainheader }>
        <Head>
          <title>Topicals | Skincare for Flare-ups</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link href='' className={ styles.header_a }>
          <div className={ styles.header }>
            <Typography className={ styles.header_a }>Subscribe To Save 10% On Your Next Topicals Delivery</Typography>
          </div>
        </Link>
        {/*=====================NAVBAR=================== */ }
        <div className={ styles.navbar }>
          <ul className={ styles.un_ordered }>
            {/*===================SHOP STARTS====================== */ }
            <li>
              <Link href=''>
                <Typography className={ styles.shop }>Shop</Typography>
              </Link>
            </li>
            {/*=================SHOP ENDS================*/ }
            <li>
              <Link href=''>
                <Typography className={ styles.page }>Holiday Gifts</Typography>
              </Link>
            </li>
            <li>
              <Link href=''>
                <Typography className={ styles.page }>Rewards</Typography>
              </Link>
            </li>
            <li>
              <Link href=''>
                <Typography className={ styles.page }>About</Typography>
              </Link>
            </li>
          </ul>


          <Typography className={ styles.topicals }>TOPICALS</Typography>


          <ul className={ styles.un_ordered }>
            <li>
              <Link href='' className={ styles.search } >
                <BsSearch className={ styles.search_icon } />
                <Typography className={ styles.page }>Search</Typography>
              </Link>
            </li>
            <li>
              <Link href=''>
                <Typography className={ styles.page }>Help</Typography>
              </Link>
            </li>
            <li>
              <Link href=''>
                <Typography className={ styles.page }>Account</Typography>
              </Link>
            </li>
            <li>
              <Link href=''>
                <Typography className={ styles.page }>Bag</Typography>
              </Link>
            </li>
          </ul>

        </div>

      </div>
      {/*=========================MAIN==================*/ }
      <main className={ styles.main }>

      </main>


































    </div>
  )
}