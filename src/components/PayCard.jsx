import React from 'react'
import styles from "./Pay.module.css"
const PayCard = ({payData}) => {
  return (
    <div className={payData.id === "3" ? styles.parent1 : styles.parent}>

      <div className={styles.child}>
         <div className={styles.date}><h4>{payData.date}</h4></div>
         <div ><img className={styles.image} src={payData.logo} alt=""/></div>
      </div>

      <div className={styles.info}>
          <div className={styles.caseStudy}>{payData.caseStudy}</div>
          <div><h1>{payData.heading}</h1></div>
          <div><h1>{payData.subheading}</h1></div>
      </div>

      <div className={styles.last}>
        <div><h2>{payData.devices}</h2></div>
        <div className={styles.icon}><p>{payData.icon}</p></div>
      </div>
      
    </div>
  )
}

export default PayCard