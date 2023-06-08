import styles from '../styles/Lists.module.css'
import { Trash } from 'phosphor-react'

export function List({tasks}) {
  console.log(tasks.length)


  return (
    <>
      {tasks.map((item: any, index: number) => {
        return (
          <div className={styles.wrapper}>

            <label
              className={styles.label}
              htmlFor={item.content}
            >
              <input
                id={item.content}
                name={item.content}
                type="radio"
                className={styles.input}
              />
              {item.content}
            </label>

            <Trash
              size={20}
              className={styles.icon}
            />

          </div>
        )
      })}
    </>
  )
}
