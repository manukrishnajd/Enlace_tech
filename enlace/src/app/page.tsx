"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Sidebar from './components/Navbar'
import './globals.css'
import Topbar from './components/Topbar'

export default function Home() {
  return (
   <>
   <Topbar/>
   <Sidebar/>
   </>
  )
}
