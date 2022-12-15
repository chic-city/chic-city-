import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from "./navbar"
import cart from './cart'
export default function Home() {
  return (
    
    <div >
    
  <Link href="/navbar" > navbar</Link>
  <Link href="/cart" > cart</Link>
  hello
    </div>
  )
}
