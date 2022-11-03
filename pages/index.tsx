import { Card, Carousel } from 'flowbite-react'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Achivement from '../components/Achivement'
import Gallery from '../components/Gallery'
import Location from '../components/Location'
import Meta from '../components/Meta'
import Music from '../components/Music'
import Signup from '../components/Signup'
import Studio from '../components/Studio'
import Video from '../components/Video'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Meta
        title=''
        keywords=''
        description=''
      />

      <Music />
      <Gallery />
      <Video />
      <Studio />
      <Achivement />
      <About />
      <Signup />
      <Location />
    </div>
  )
}
