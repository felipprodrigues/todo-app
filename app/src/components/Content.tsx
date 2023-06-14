import { useState } from 'react';
import styles from '../styles/Content.module.css';
import { EmptyList } from './EmptyList';
import { List } from './List';

export interface ContentProps {
  tasks: Array[];
  completedTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDelete: (event: React.ChangeEvent<HTMLInputElement>) => void;
  completedTasksAmount: number
}
// {tasks, completedTask, radio, handleDelete, inputValue, isChecked}: ContentProps
export function Content({
  tasks,
  handleDelete,
  completedTask,
  completedTasksAmount
}: ContentProps) {
  return (
    <div className={styles.wrapper}>

      <div className={styles.holder}>
        <div className={styles.header}>
          <span className={styles.isBlue}>Tarefas criadas</span>
          <div className={styles.headerNumbers}>
            <span>{tasks.length}</span>
          </div>
        </div>

        <div className={styles.header}>
          <span className={styles.isPurple}>Concluidas</span>
          <div className={styles.headerNumbers}>
            <span>{completedTasksAmount}</span>
          </div>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className={styles.holder}>
          <EmptyList/>
        </div>
      ) : (
        <div className={styles.holderContent}>
          <List
            tasks={tasks}
            handleDelete={handleDelete}
            completedTask={completedTask}
          />
        </div>
      )}
    </div>
  );
}
