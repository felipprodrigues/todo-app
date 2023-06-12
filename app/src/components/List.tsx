import styles from '../styles/Lists.module.css'
import { Trash } from 'phosphor-react'
import {ContentProps} from './Content'

export function List({tasks, handleRadioState, radio, handleDelete, handleInvalidTask, inputValue}: ContentProps) {

  return (
    <>
      {tasks.map((item: any, index: number) => {
        return (
          <div
            className={styles.wrapper}
            key={`${item.name}-${index + 1}`}
          >

            <label
              className={`${styles.label} ${radio === true ? styles.isStrikeThrough : ''}`}
              htmlFor={item.content}

            >
              <input
                id={item.content}
                name={item.content}
                type="radio"
                className={styles.input}
                value={inputValue}
                checked={radio === item.content}
                onChange={(event) => handleRadioState(event)}
                onInvalid={handleInvalidTask}
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
