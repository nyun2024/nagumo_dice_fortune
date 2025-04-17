import React, { useState } from 'react'
import Container from '../../components/common/Container'
import Dice from '../../components/dice/Dice'
import nagumo from '@img/rolling_dice_nagumo.png'
import styles from './RollingDiceNagumo.module.scss'
import Button from '../../components/common/Button'

const RollingDiceNagumo = () => {
  const [diceClass, setDiceClass] = useState('')

  const rollDice = () => {
    const newNumber = Math.ceil(Math.random() * 6)
    const variant = Math.random() > 0.5 ? 'a' : 'b'
    const newClass = `show${newNumber}${variant}`

    setDiceClass('')
    setTimeout(() => {
      setDiceClass(newClass)
      console.log(newClass)
    }, 10)
  }

  return (
    <Container>
      <div className={styles.nagumoDiceWrap}>
        <img src={nagumo} className={styles.img} />
        <Dice diceClass={diceClass} className={styles.dice} />
      </div>
      <Button onClickEvent={rollDice} text={'Rolling Dice'} />
    </Container>
  )
}

export default RollingDiceNagumo
