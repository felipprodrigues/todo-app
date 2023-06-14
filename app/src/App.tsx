import './global.css'
import styles from './styles/App.module.css'

import {Header} from './components/Header'
import {Form} from './components/Form'
import { useState, ChangeEvent, FormEvent, useEffect} from 'react'
import {Content} from './components/Content'
import { v4 as uuidv4 } from 'uuid';

interface TasksType {
  id: string,
  isComplete: boolean;
  title: string;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<TasksType[]>([]);
  const [completedTasksAmount, setCompletedTasksAmount] = useState(0)

  const isInvalid = inputValue.length === 0

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setInputValue(event.target.value);
  };

  function completedTask(id: string) {
    setTasks((prev) => {
      const draft = prev.map(task =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task);

      const isComplete = draft.find((task) => task.id === id)?.isComplete;

      if (isComplete) {
        setCompletedTasksAmount(completedTasksAmount + 1);
      } else {
        setCompletedTasksAmount(completedTasksAmount - 1);
      }

      return draft
    })
  }

  function handleDelete(el: any) {
    const isComplete = el.isComplete;

    const draft = tasks.filter((item: any) => item.id !== el.id)

    if(isComplete) {
      setCompletedTasksAmount(completedTasksAmount - 1)
    }

    setTasks([...draft])
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const idRandom = uuidv4();
    const newTask: TasksType = {
      id: idRandom,
      title: inputValue,
      isComplete: false,
    };

    setTasks((prevTasks: TasksType[]) => [...prevTasks, newTask])
    setInputValue('')
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <Form
            handleInputValue={handleInputValue}
            handleSubmit={handleSubmit}
            isInvalid={isInvalid}
            inputValue={inputValue}
          />

          <Content
            tasks={tasks}
            handleDelete={handleDelete}
            completedTask={completedTask}
            completedTasksAmount={completedTasksAmount}
          />
        </main>
      </div>
    </div>
  )
}

export default App
