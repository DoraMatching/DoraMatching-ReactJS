import React, { Component } from 'react'
import CardProfileLeft from '../components/ProfilePage/cardProfileLeft'
import CardProfileSetting from '../components/ProfilePage/cardProfileSetting'
import styles from '../styles/Home.module.css'

export default class ProfileSettingPage extends Component {
  render() {
    return (
      <div>
        <div className={styles.profilePage}>
        <div style={{ width: "25%" }}>
          <CardProfileLeft />
        </div>
        <div style={{ width: "70%", marginLeft: "20px" }}>
          <CardProfileSetting />
        </div>
      </div>
      </div>
    )
  }
}