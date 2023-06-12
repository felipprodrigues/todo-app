import './global.css'
import styles from './styles/App.module.css'

import {Header} from './components/Header'
import {Form} from './components/Form'
import {Content} from './components/Content'
import { useState, ChangeEvent, FormEvent, useEffect, InvalidEvent } from 'react'
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
    const uniqueId = event.currentTarget.id;
    const updateTask = tasks.map((item: any) => {
      if(item.id === uniqueId) {
        console.log(uniqueId, 'aqui')
      }
      return console.log(item, '123')
    })

    updateTask
    // const updatedTasks = tasks.map((item: any) => {
    //   console.log(item, '123')
    // }

    // setTasks(prev => prev === uniqueId ? null : checked);

    // const checked = event.target.checked;


    // const uniqueId = event.currentTarget.id

    // console.log(uniqueId, 'aqui o checked')

    // setRadio(prev => prev === uniqueId ? null : checked);
  }

  function handleDelete(el: any) {
    const draft = tasks.filter((item: any) => item.id !== el.id)
    setTasks([...draft])
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


  function handleInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const isInvalid = inputValue.length === 0

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isInvalid={isInvalid}
          />

          <Content
            tasks={tasks}
            handleRadioState={handleRadioState}
            radio={radio}
            handleDelete={handleDelete}
            handleInvalidTask={handleInvalidTask}
            inputValue={inputValue}
          />
        </main>
      </div>
    </div>
  )
}

export default App
