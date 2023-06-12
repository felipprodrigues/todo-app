import styles from '../styles/Content.module.css';
import { EmptyList } from './EmptyList';
import { List } from './List';

export interface ContentProps {
  tasks: Array[];
  handleRadioState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  radio: boolean;
  handleDelete: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInvalidTask: (event: React.InvalidEvent<HTMLInputElement>) => void;
  inputValue: string;
}

export function Content({tasks, handleRadioState, radio, handleDelete, handleInvalidTask, inputValue}: ContentProps) {
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
            <span>0</span>
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
            handleRadioState={handleRadioState}
            radio={radio}
            handleDelete={handleDelete}
            handleInvalidTask={handleInvalidTask}
            inputValue={inputValue}
          />
        </div>
      )}
    </div>
  );
}
