import styles from '../styles/Lists.module.css'
import { Trash } from 'phosphor-react'
import {ContentProps} from './Content'

export function List({
  tasks,
  handleDelete,
  completedTask,
  })
{

  return (
    <>
      {tasks.map((item: any, index: number) => {
        return (
          <div
            className={styles.wrapper}
            key={`${item.name}-${index + 1}`}
          >

            <label
              className={`${styles.label} ${item.isComplete ? styles.isStrikeThrough : ''}`}
              htmlFor={item.content}
            >
              <input
                type="checkbox"
                onClick={() => completedTask(item.id)}
                readOnly={true}
                name={item.content}
                id={item.content}
                checked={item.isComplete}
              />
              {item.title}
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
