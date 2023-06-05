import { PlusCircle } from "phosphor-react"
import styles from '../styles/Form.module.css'
import { ChangeEvent, FormEvent } from "react";

interface InputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function Form({handleChange, handleSubmit}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleChange}
        />

        <button type="submit">
          <PlusCircle size={20}/>
          Criar
        </button>
      </form>
    </div>
  )
}
