import React, { useState } from 'react'
import styles from '../styles/InfoPanel.module.css'

const InfoPanel = ({ type, message }) => {

  const [active, setActive] = useState(false);

  const generatePanel = () => {
    switch(type) {
      case 'success':
        return (
          <div className={styles.panel}>
            <div className={`${styles.panel__wrapper} ${styles.panel__success}`}>
              <p>{message}</p>
              <button
                type="button"
                onClick={() => setActive(prev => !prev)}
              >

              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <>{generatePanel()}</>
  )
}

export default InfoPanel