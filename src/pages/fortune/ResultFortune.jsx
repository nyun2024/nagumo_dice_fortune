import React, { useEffect, useState } from 'react'
import Container from '@components/common/Container'
import styles from './ResultFortune.module.scss'
import scoreComments from '@data/scoreComment'

const ResultFortune = ({ diceNum }) => {
  const [suffix, setSuffix] = useState('')

  useEffect(() => {
    if (diceNum === 1 || diceNum === 3 || diceNum === 6) {
      setSuffix('이')
    } else {
      setSuffix('가')
    }
  }, [diceNum])

  const comment = scoreComments[diceNum] || ''

  return (
    <Container className={styles.resultContainer} center>
      <div className={styles.diceNumTitle}>
        <span>{diceNum}</span>
        {suffix} 나온 당신!
      </div>
      <div className={styles.comment}>{comment}</div>
    </Container>
  )
}

export default ResultFortune
