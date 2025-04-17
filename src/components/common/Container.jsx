import React from 'react'
import styles from './Container.module.scss'
import classNames from 'classnames'

const Container = ({ children, className, center }) => {
  return <div className={classNames(styles.container, center && styles.center, className)}>{children}</div>
}

export default Container
