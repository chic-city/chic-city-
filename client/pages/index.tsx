import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Carousel from './carousel'
import Navbar from "./navbar"
import Footer from './footer'
import Suits from './suits'
import shop from './clothing'
export default function Home() {
  return (
    
    <div >

      <Navbar/>
      {/* <img src ='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,h_1500,q_100/v1671027251/tenue-classe-pour-homme_qvxxka.jpg'/> */}
      <Carousel/>
      <Footer/>
  {/* <Link href="/navbar" > navbar</Link>
  <Link href="/footer" > footer</Link> */}
<Link href="/carousel" ></Link>
<Link href="/Suits" ></Link>
<Link href="/shop" ></Link>
<Link href="/accessories" ></Link>
<Link href="/cart" ></Link>

    </div>
  )
}
