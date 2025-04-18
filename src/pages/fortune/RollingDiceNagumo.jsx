import React, { useState } from 'react'
import Container from '../../components/common/Container'
import Dice from '../../components/dice/Dice'
import nagumo from '@img/rolling_dice_nagumo.png'
import styles from './RollingDiceNagumo.module.scss'
import Button from '../../components/common/Button'

const RollingDiceNagumo = () => {
  const [diceClass, setDiceClass] = useState('')
  const [diceNum, setDiceNum] = useState('')
  const [loaded, setLoaded] = useState(false)

  const rollDice = () => {
    const newNumber = Math.ceil(Math.random() * 6)
    const variant = Math.random() > 0.5 ? 'a' : 'b'
    const newClass = `show${newNumber}${variant}`

    setDiceClass('')
    setTimeout(() => {
      setDiceClass(newClass)
    }, 10)
    setTimeout(() => {
      setDiceNum(newNumber)
    }, 3700)
  }

  return (
    <Container center className={styles.diceContainer} style={{ visibility: loaded ? 'visible' : 'hidden' }}>
      <div className={styles.title}>오늘 너의 행운은?</div>
      <div className={styles.nagumoDiceWrap}>
        <img src={nagumo} className={styles.img} onLoad={() => setLoaded(true)} />
        <Dice diceClass={diceClass} className={styles.dice} />
      </div>
      <div className={styles.diceNum}>{diceNum}</div>
      <Button onClickEvent={rollDice} text={'주사위 굴리기'} />
    </Container>
  )
}

export default RollingDiceNagumo
