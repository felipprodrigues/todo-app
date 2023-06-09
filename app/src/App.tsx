import './global.css'
import styles from './styles/App.module.css'

import {Header} from './components/Header'
import {Form} from './components/Form'
import {Content} from './components/Content'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


interface TasksType {
  id: string,
  radioInput: boolean;
  content: string;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<TasksType[]>([]);
  const [radio, setRadio] = useState(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  function handleRadioState(event: any) {
    const checked = event.target.checked;
    setRadio(prev => prev === checked ? null : checked);

    if(checked) {
    }
  }

  function handleDelete() {
    tasks.filter((el) => console.log(el !== el.id))

    // setTasks((prevTasks: TasksType[]) => [...prevTasks, tasks])
  }

  useEffect(() => {
    console.log(tasks, 'saporra')
  }, [tasks])


  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const newTask: TasksType = {
      id: uuidv4(),
      radioInput: true,
      content: inputValue,
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
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          <Content
            tasks={tasks}
            handleRadioState={handleRadioState}
            radio={radio}
            handleDelete={handleDelete}
          />
        </main>
      </div>
    </div>
  )
}

export default App
