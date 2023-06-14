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

interface RadioState {
  radio: boolean
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<TasksType[]>([
    {
      id: '',
      radioInput: false,
      content: '',
    }
  ]);
  const [radio, setRadio] = useState<RadioState[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setInputValue(event.target.value);
  };

  function handleRadioState(id: string) {
    setRadio((prevRadio: any) => {
      if (prevRadio.includes(id)) {
        // Remove the ID from the radio state if already present
        console.log(prevRadio, 'if condition')
        return prevRadio.filter((radioId: any) => radioId !== id);
      } else {
        // Add the ID to the radio state if not already present
        console.log(prevRadio, 'else condition')
        return [...prevRadio, id];
      }
    });
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
