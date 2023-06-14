import styles from '../styles/Lists.module.css'
import { Trash } from 'phosphor-react'

interface ContentProps {
  tasks: any;
  completedTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDelete: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function List({
  tasks,
  handleDelete,
  completedTask,
  }: ContentProps){

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
