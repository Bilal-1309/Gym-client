import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTrainers } from '../../redux/features/trainer'
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
          <div className={styles.cartBody}>
            <div className={styles.image}>
              <img src={`http://localhost:5000/${trainer.img}`} alt="" />
            </div>
            <p>
              {trainer.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}
export default Trainer;