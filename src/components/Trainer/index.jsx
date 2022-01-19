import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadTrainers } from '../../redux/features/trainer'
import Modal from 'react-awesome-modal';
import styles from '../Trainer/trainer.module.css'

function Trainer() {
  const trainers = useSelector((state) => state.trainerReducer.trainers)
  console.log(trainers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTrainers())
  }, [dispatch])

  const [open, setOpen] = useState(false)
  const [close, setClose] = useState("")

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickClose = () => {
    setOpen(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerTitle}>
        <h2>Тренеры THE GYM которые будут вас обучать</h2>
      </div>
      <div className={styles.container_block}>
        {trainers.map((trainer) => {
          return (
            <div className={styles.cart}>
              <div className={styles.block_cart}>
                <img
                  src={`http://localhost:5000/${trainer.img}`}
                  onClick={() => handleClickOpen(true)}
                  alt="" />
                <p>{trainer.name}</p>
              </div>
            </div>
          )
        })}
        <Modal
          isOpen={open} onRequestClose={() => setOpen(false)}>
            <h2>{trainers.name}</h2>
            <p>{trainers.description}</p>
            <div>
              <button onClick={handleClickClose}>x</button>
            </div>
          </Modal>
      </div>
    </div>
  )
}
export default Trainer;