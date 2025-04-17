import React from 'react'
import Container from '@components/common/Container'
import styles from './Home.module.scss'
import nagumo from '@img/home_nagumo.jpg'
import LinkButton from '@components/common/LinkButton'

const Home = () => {
  return (
    <Container center className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>
        <span className={styles.nagumo}>나구모의</span>
        <br />
        주사위 <span className={styles.luck}>행운점</span>
        <br />
        <i className={styles.icon}>렼</i>
      </h1>
      <img src={nagumo} className={styles.nagumo} />
      <LinkButton href={'/RollingDiceNagumo'} className={styles.linkButton}>
        GO<i>줐</i>
      </LinkButton>
    </Container>
  )
}

export default Home
