'use client'

import { useState, useRef } from 'react'
import styles from './banner.module.scss'

export default function Banner() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    const menuParent = bannerRef.current?.parentElement
    if (menuParent) {
      const newState = !menuIsOpen
      setMenuIsOpen(state => newState)
      menuParent.dataset.menu = newState ? 'open' : 'closed'
    }
  }

  return (
    <div className={styles.banner} ref={bannerRef}>
      <div>
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>
      <span onClick={toggleMenu}>menu</span>
    </div>
  )
}
