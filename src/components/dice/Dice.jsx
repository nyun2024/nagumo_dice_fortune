import React from 'react'
import styles from './Dice.module.scss'
import classNames from 'classnames'

const Dice = ({ className, diceClass }) => {
  const getSideClass = (side) => {
    return ['one', 'two', 'three', 'four', 'five', 'six'][side - 1]
  }

  const renderDots = (side) => {
    const dotMap = {
      1: ['one-1'],
      2: ['two-1', 'two-2'],
      3: ['three-1', 'three-2', 'three-3'],
      4: ['four-1', 'four-2', 'four-3', 'four-4'],
      5: ['five-1', 'five-2', 'five-3', 'five-4', 'five-5'],
      6: ['six-1', 'six-2', 'six-3', 'six-4', 'six-5', 'six-6'],
    }
    return dotMap[side].map((dotClass, idx) => <div key={idx} className={classNames(styles.dot, styles[dotClass])} />)
  }

  return (
    <div className={classNames(styles.container, className)}>
      <div className={classNames(styles.dice, styles[diceClass])}>
        {[1, 2, 3, 4, 5, 6].map((side) => (
          <div key={side} className={classNames(styles.side, styles[getSideClass(side)])}>
            {renderDots(side)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dice
