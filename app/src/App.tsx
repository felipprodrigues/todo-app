import './global.css'
import styles from './styles/App.module.css'

import {Header} from './components/Header'
import {Form} from './components/Form'
import {Content} from './components/Content'
import { useState, ChangeEvent, FormEvent } from 'react'
import { v4 as uuidv4 } from 'uuid';


interface TasksType {
  id: number,
  checkbox: boolean;
  content: string;
}



function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<TasksType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(inputValue, '123')
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const newTask: TasksType = {
      id: uuidv4(),
      checkbox: true,
      content: inputValue,
    };

    setTasks((prevTasks: TasksType[]) => [...prevTasks, newTask]
    )
    setInputValue('')

    console.log(tasks, 'quantidade')
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          <Content
            tasks={tasks}
          />
        </main>
      </div>
    </div>
  )
}

export default App
