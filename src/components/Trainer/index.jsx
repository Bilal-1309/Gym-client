import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../Trainer/trainer.module.css'

function Trainer() {
  const trainers = useSelector((state) => state.trainer.trainers)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <div className={styles.headerTitle}>
        <h2>Тренеры THE GYM с которые будут вас обучать</h2>
      </div>
      {trainers.map((trainer) => {
        return (
          // <div className={styles.image}>
          //   <img src={} alt="" />
          // </div>
          <p>
            {trainer.name}
          </p>
        )
      })}
    </div>
  )
}
export default Trainer;