import styles from '../styles/Header.module.css'

import LogoApp from '../assets/LogoApp.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoApp} alt="" />
    </header>
  )
}
