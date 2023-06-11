import styles from '../styles/Lists.module.css'
import { Trash } from 'phosphor-react'

export function List({tasks, handleRadioState, radio, handleDelete}) {

  return (
    <>
      {tasks.map((item: any, index: number) => {
        return (
          <div className={styles.wrapper}>

            <label
              className={`${styles.label} ${radio === true ? styles.isStrikeThrough : ''}`}
              htmlFor={item.content}

            >
              <input
                id={item.content}
                name={item.content}
                type="radio"
                className={styles.input}
                value={item.content}
                checked={radio === item.content}
                onChange={(event) => handleRadioState(event)}
              />
              {item.content}
            </label>

            <Trash
              size={20}
              className={styles.icon}
              onClick={() => handleDelete(item)}
            />

          </div>
        )
      })}
    </>
  )
}
