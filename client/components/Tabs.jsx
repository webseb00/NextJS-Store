import React, { useState } from 'react'
import styles from '../styles/Tabs.module.css'

const Tabs = ({ description, additionalInfo }) => {

  const [currentTab, setCurrentTab] = useState('tab-1')

  const handleTabSelect = e => {
    e.preventDefault();
    setCurrentTab(e.target.dataset.tab);
  }

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabs__list}>
        <li>
          <a 
            href="#" 
            data-tab="tab-1" 
            onClick={handleTabSelect} 
            className={`${currentTab === 'tab-1' ? styles.active : ''}`}
          >
            Description
          </a>
        </li>
        <li>
          <a 
            href="#" 
            data-tab="tab-2" 
            onClick={handleTabSelect}
            className={`${currentTab === 'tab-2' ? styles.active : ''}`}
          >
            Additional Information
          </a>
        </li>
      </ul>
      <div className={styles.tabs__content}>
        <div className={`${currentTab === 'tab-1' ? styles.tab_active : styles.tab_inactive}`}>
          <p>{description}</p>
        </div>
        <div className={`${currentTab === 'tab-2' ? styles.tab_active : styles.tab_inactive}`}>
          {additionalInfo}
        </div>
      </div>
    </div>
  )
}

export default Tabs