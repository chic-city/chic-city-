import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from "./navbar"
import Footer from './footer'

export default function Home() {
  return (
    
    <div >
      <Navbar/>
      <Footer/>
  {/* <Link href="/navbar" > navbar</Link>
  <Link href="/footer" > footer</Link> */}
  
    </div>
  )
}
