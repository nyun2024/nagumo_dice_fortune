import React from 'react'
import styles from './Container.module.scss'
import classNames from 'classnames'

const Container = ({ children, className, center, style }) => {
  return (
    <div className={classNames(styles.container, center && styles.center, className)} style={style}>
      {children}
    </div>
  )
}

export default Container
